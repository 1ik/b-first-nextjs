import { useEffect, useRef } from "react";
import tinymce from "tinymce";

interface TinymceEditorProps {
  defaultValue?: string;
  label?: string;
  onChange: (content: string) => void;
}

export const TinymceEditor = function ({ label, defaultValue, onChange }: TinymceEditorProps) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    tinymce.init({
      target: editorRef.current,
      plugins:
        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
      toolbar:
        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
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
    });
  });

  return (
    <div>
      <label>{label}</label>
      <textarea ref={editorRef} defaultValue={defaultValue} />
    </div>
  );
};
