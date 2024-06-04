import { usePost } from "@bfirst/api-client";
import { useEffect, useRef } from "react";
import tinymce from "tinymce";

interface TinymceEditorProps {
  defaultValue?: string;
  label?: string;
  onChange: (content: string) => void;
}

export const TinymceEditor = function ({ label, defaultValue, onChange }: TinymceEditorProps) {
  const { requestAsync } = usePost(`api/v1/media-upload-image`);

  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    tinymce.init({
      target: editorRef.current,
      plugins: "anchor charmap codesample emoticons image  lists media searchreplace table visualblocks wordcount code",
      toolbar:
        "paste undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | code image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",

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
