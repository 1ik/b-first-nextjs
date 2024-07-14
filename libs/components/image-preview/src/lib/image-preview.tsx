// import LightGallery React components
import LightGallery from "lightgallery/react";

// Import LightGallery styles
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// Import LightGallery plugins
import { getImageUrl } from "@bfirst/utilities";
import lgFullScreen from "lightgallery/plugins/fullscreen";
import lgZoom from "lightgallery/plugins/zoom";

export interface ImagePreviewProps {
  imageUrl: string;
  imageCaption?: string;
}

const lgSettings = {
  counter: false,
  enableSwipe: false,
  enableDrag: false,
  controls: false,
  infiniteZoom: true,
  showZoomInOutIcons: true,
  actualSize: false,
  plugins: [lgZoom, lgFullScreen],
};

export function ImagePreview({ imageUrl, imageCaption = "Featured Image" }: ImagePreviewProps) {
  return (
    <LightGallery {...lgSettings}>
      <div data-src={getImageUrl(imageUrl)}>
        <img
          className="w-full aspect-video object-cover cursor-pointer"
          src={getImageUrl(imageUrl)}
          alt={imageCaption}
        />
      </div>
    </LightGallery>
  );
}

export default ImagePreview;
