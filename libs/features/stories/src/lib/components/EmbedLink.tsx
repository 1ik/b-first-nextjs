import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from "@bfirst/material-tailwind";

import { Dispatch, SetStateAction, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import tinymce from "tinymce";
interface EmbedLinkProps {
  open: boolean;
  onOpen: Dispatch<SetStateAction<boolean>>;
}

export default function EmbedLink({ open, onOpen }: EmbedLinkProps) {
  const [state, setState] = useState({
    embedUrl: "",
    displayText: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleOpen = function () {
    onOpen((cur) => !cur);
  };

  const handleEmbedLink = () => {
    if (!state.embedUrl) {
      toast.error("Embed Url is required", {
        position: "top-center",
      });
    } else if (!state.displayText) {
      toast.error("Display text is required", {
        position: "top-center",
      });
    } else {
      tinymce.activeEditor?.insertContent(
        `<a style = "text-decoration:underline; color:#544ce0" href=${state.embedUrl}>${state.displayText}</a>`
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
          <Input label="Embed Url" name="embedUrl" onChange={handleChange} />
        </div>
        <div className="mt-2">
          <Input label="Display Text" name="displayText" onChange={handleChange} />
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
