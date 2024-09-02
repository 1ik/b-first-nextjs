import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";

interface ImagePreviewProps {
  imageUrl: string;
  imageCaption?: string;
}

export function ImagePreview({ imageUrl, imageCaption = "Featured Image" }: ImagePreviewProps) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      wheelToZoom: true,
      bgOpacity: 1,
      showHideAnimationType: "none",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  });
  return (
    <div className="pswp-gallery relative group" id="gallery">
      <a href={imageUrl} data-pswp-width={1600} data-pswp-height={900} target="_blank" rel="noreferrer">
        <img className="w-full object-cover aspect-video" src={imageUrl} alt="abcd" />
      </a>
      <div className="absolute top-3 right-3 text-xl text-white p-3 pointer-events-none bg-black/50 rounded-sm backdrop-blur-md opacity-0 group-hover:opacity-100 duration-300">
        <FaExpandArrowsAlt />
      </div>
    </div>
  );
}
