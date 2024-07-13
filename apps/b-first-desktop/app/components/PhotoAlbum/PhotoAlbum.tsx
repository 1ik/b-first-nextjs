"use client";

import { PhotoAlbumDesktop } from "@bfirst/components-photo-album-desktop";

interface PhotoAlbumProps {
  data: any;
}

export default function PhotoAlbum({ data }: PhotoAlbumProps) {
  return <PhotoAlbumDesktop data={data} />;
}
