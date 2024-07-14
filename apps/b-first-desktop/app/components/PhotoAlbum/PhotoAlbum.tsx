"use client";

import { PhotoAlbumDesktop, PhotoAlbumDesktopProps } from "@bfirst/components-photo-album-desktop";

export default function PhotoAlbum({
  images,
  authors,
  createdTime,
  shareLink,
  bottomSlidesPerView,
}: PhotoAlbumDesktopProps) {
  return (
    <PhotoAlbumDesktop
      images={images}
      authors={authors}
      createdTime={createdTime}
      shareLink={shareLink}
      bottomSlidesPerView={bottomSlidesPerView}
    />
  );
}
