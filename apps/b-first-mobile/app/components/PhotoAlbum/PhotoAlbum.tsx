"use client";

import { PhotoAlbumMobile, PhotoAlbumMobileProps } from "@bfirst/components-photo-album-mobile";

export default function PhotoAlbum({ images, bottomSlidesPerView }: PhotoAlbumMobileProps) {
  return <PhotoAlbumMobile images={images} bottomSlidesPerView={bottomSlidesPerView} />;
}
