import { getImageUrl } from "../../image_utils";
import { newsUrl } from "../../util";

const Card = (props: { item: any }) => {
  const { item } = props;
  return (
    <>
      <div className="w-full pb-3">
        <div className="hover-img h-full flex flex-col bg-white">
          <a href={newsUrl(item)}>
            <img
              style={{ height: "200px" }}
              className="max-w-full h-full object-cover w-full mx-auto"
              src={getImageUrl(item.meta.featured_image)}
              alt={item.title}
            />
          </a>
          <div className="py-3 flex-grow flex flex-col justify-between px-6">
            <h3 className="text-lg font-bold leading-tight mb-2">
              {/* <a href={newsUrl(item)}>{MaxText(item.title, 60)}</a> */}
              <a href={newsUrl(item)}>{item.meta.altheadline || item.title}</a>
            </h3>
            <a className="text-gray-500" href={`/${item?.categories[0].name}`}>
              <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
              {item.categories[0].name}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
