import { useEffect, useRef } from "react";
import tinymce from "tinymce";
import { token } from "../token_utils";

export default function TinyMceEditor({
  initialValue = "",
  onChange,
}: {
  initialValue: string;
  onChange: (content: string) => void;
}) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    tinymce.init({
      target: editorRef.current,
      plugins:
        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
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

            try {
              const response = await fetch(`https://backend.bangladeshfirst.com/api/v1/media-upload-image`, {
                method: "POST",
                headers: {
                  Authorization: token,
                },
                body: formData,
              });

              if (!response.ok) throw new Error("Could not upload image");

              const data = await response.json();

              callback(`https://bfirst.sgp1.cdn.digitaloceanspaces.com/${data.url}`, { title: file.name });
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
    });
  });

  return <textarea ref={editorRef} defaultValue={initialValue}></textarea>;
}
