import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from "@bfirst/material-tailwind";

import { Dispatch, SetStateAction, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import tinymce from "tinymce";
interface EmbedRelatedNewsProps {
  open: boolean;
  onOpen: Dispatch<SetStateAction<boolean>>;
}

export default function EmbedLink({ open, onOpen }: EmbedRelatedNewsProps) {
  const [embedUrl, setEmbedUrl] = useState("");
  const [displayText, setDisplayText] = useState("");
  const handleOpen = function () {
    onOpen((cur) => !cur);
  };

  const handleEmbedLink = () => {
    if (!embedUrl) {
      toast.error("Embed Url is required", {
        position: "top-center",
      });
    } else if (!displayText) {
      toast.error("Diplay name is required", {
        position: "top-center",
      });
    } else {
      tinymce.activeEditor?.insertContent(
        `<a style = "text-decoration:underline; color:#544ce0" href=${embedUrl}>${displayText}</a>`
      );
      onOpen(false);
    }
  };

  return (
    <Dialog open={open} handler={handleOpen} size="sm">
      <DialogHeader>Insert Link</DialogHeader>
      <DialogBody className="relative overflow-hidden">
        <ToastContainer />
        <div>
          <Input label="Embed Url" onChange={(e) => setEmbedUrl(e.target.value)} />
        </div>
        <div className="mt-2">
          <Input label="Display Text" onChange={(e) => setDisplayText(e.target.value)} />
        </div>
      </DialogBody>
      <DialogFooter className="mt-4">
        <Button onClick={() => onOpen(false)} className="ml-2" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleEmbedLink} className="ml-2" variant="outlined">
          Save
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
