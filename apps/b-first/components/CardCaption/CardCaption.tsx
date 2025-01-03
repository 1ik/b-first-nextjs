import { getImageUrl } from "../../image_utils";

const CardCaption = (props: { item: any }) => {
  const { item } = props;
  return (
    <>
      <div className="hover-img bg-gray-100">
        <a href="">
          <img
            className="max-w-full w-full mx-auto"
            src={getImageUrl(item.meta.featured_image, 1600, 900)}
            alt={item.title}
          />
        </a>
        <div className="py-3 px-6">
          <span className="font-black font-semibold">{item.meta.imageCaption}</span>
        </div>
      </div>
    </>
  );
};

export default CardCaption;
