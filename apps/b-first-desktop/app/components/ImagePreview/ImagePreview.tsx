"use client";

import ModalImage from "react-modal-image";

interface ImagepreviewProps {
  url: string;
  url_md?: string;
  url_lg?: string;
  alt?: string;
}

export default function ImagePreview({ url, url_md, url_lg, alt }: ImagepreviewProps) {
  return (
    <ModalImage
      hideDownload
      style={{ zIndex: "9999" }}
      small={url}
      medium={url_md || url}
      large={url_lg || url}
      alt={alt || "featured image"}
    />
  );
}
