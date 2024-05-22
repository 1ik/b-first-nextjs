"use client";
import { useState } from "react";
import { Dialog, DialogBody, Card } from "@bfirst/material-tailwind";

interface ImagepreviewProps {
  url: string;
  alt?: string;
}

export default function ImagePreview({ url, alt }: ImagepreviewProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Card className="cursor-pointer" onClick={handleOpen}>
        <img className="w-full" src={url} alt="alt" />
      </Card>
      <Dialog size="lg" open={open} handler={handleOpen}>
        <DialogBody className="p-0 m-0">
          <img alt={alt} className="w-full object-cover" src={url} />
        </DialogBody>
      </Dialog>
    </>
  );
}
