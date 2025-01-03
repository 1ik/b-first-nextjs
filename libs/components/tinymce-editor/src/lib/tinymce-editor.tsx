import { usePost } from "@bfirst/api-client";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import tinymce from "tinymce";

interface TinymceEditorProps {
  defaultValue?: string;
  label?: string;
  onChange: (content: string) => void;
  dispatch: any;
  onOpenEmbed: Dispatch<SetStateAction<boolean>>;
  onOpenEmbedLink: Dispatch<SetStateAction<boolean>>;
}

export const TinymceEditor = function ({
  label,
  defaultValue,
  onChange,
  dispatch,
  onOpenEmbed,
  onOpenEmbedLink,
}: TinymceEditorProps) {
  const { requestAsync } = usePost(`api/v1/media-upload-image`);

  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    tinymce.init({
      target: editorRef.current,
      convert_urls: false,
      plugins:
        "anchor charmap codesample emoticons image  lists media searchreplace table visualblocks wordcount code",
      toolbar:
        "paste undo  redo code | blocks fontfamily fontsize | bold italic underline strikethrough embed-link| embed-news media-library media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",

      file_picker_callback: (callback, value, meta) => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");

        input.addEventListener("change", (e: any) => {
          if (!e.target) return;
          const file = e.target.files[0];

          const reader = new FileReader();

          reader.addEventListener("load", async function () {
            const formData = new FormData();
            formData.append("image", file);

            try {
              const response = await requestAsync(formData);

              callback(
                `https://images.bfirst.news/resize?width=1600&height=900&format=webp&quality=85&path=${response.data.url}`,
                { title: file.name }
              );
            } catch (error) {
              console.log(error);
            }
          });
          reader.readAsDataURL(file);
        });

        input.click();
      },
      setup: (editor) => {
        editor.on("change", () => {
          onChange(editor.getContent());
        });
        editor.ui.registry.addButton("embed-link", {
          icon: "link",
          onAction: () => {
            onOpenEmbedLink(true);
          },
        });
        editor.ui.registry.addButton("media-library", {
          icon: "gallery",
          onAction: () => {
            dispatch({ type: "setDialogOpen", paylaod: true });
            dispatch({ type: "setOpenFrom", payload: "textEditor" });
          },
        });
        editor.ui.registry.addButton("embed-news", {
          icon: "embed-page",
          onAction: () => {
            onOpenEmbed(true);
          },
        });
      },
      tinycomments_mode: "embedded",
      tinycomments_author: "Author name",
      mergetags_list: [
        { value: "First.Name", title: "First Name" },
        { value: "Email", title: "Email" },
      ],
      paste_as_text: true,
    });
  });

  return (
    <div>
      <label>{label}</label>
      <textarea ref={editorRef} defaultValue={defaultValue} />
    </div>
  );
};
