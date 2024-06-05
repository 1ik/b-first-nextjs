import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from "@bfirst/material-tailwind";

import { Dispatch, SetStateAction, useState } from "react";
import tinymce from "tinymce";
interface EmbedRelatedNewsProps {
  open: boolean;
  onOpen: Dispatch<SetStateAction<boolean>>;
}

export default function EmbedLink({ open, onOpen }: EmbedRelatedNewsProps) {
  const [embedUrl, setEmbedUrl] = useState("");
  const handleOpen = function () {
    onOpen((cur) => !cur);
  };

  const handleEmbedLink = () => {
    tinymce.activeEditor?.insertContent(`<a href=${embedUrl}>${embedUrl}</a>`);
    onOpen(false);
  };

  return (
    <Dialog open={open} handler={handleOpen} size="sm">
      <DialogHeader>Link Embed</DialogHeader>
      <DialogBody className="relative overflow-hidden">
        <div>
          <Input label="Embed Url" onChange={(e) => setEmbedUrl(e.target.value)} />
        </div>
        <div className="mt-2">
          <Input label="Title" />
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
