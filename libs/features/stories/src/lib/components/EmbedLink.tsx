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
        `<a  style = "border-bottom: 1px solid; text-decoration:none" href=${embedUrl}>${displayText}</a>`
      );
      onOpen(false);
    }
  };

  return (
    <Dialog open={open} handler={handleOpen} size="sm">
      <DialogHeader>Link Embed</DialogHeader>
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
