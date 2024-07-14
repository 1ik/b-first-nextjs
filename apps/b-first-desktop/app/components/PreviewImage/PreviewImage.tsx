"use client";

import { ImagePreview } from "@bfirst/components-image-preview";

interface PreviewImageProps {
  url: string;
  caption?: string;
}

export default function PreviewImage({ url, caption }: PreviewImageProps) {
  return <ImagePreview imageUrl={url} imageCaption={caption} />;
}
