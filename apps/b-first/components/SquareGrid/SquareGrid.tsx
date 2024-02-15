import { getImageUrl } from "../../../../libs/news-site-ui/src/lib/image_utils";
import { newsUrl } from "../../../../libs/settings/analytics/src/lib/util";
import React from "react";

const SquareGrid = ({ items, gridClass }: { items: any[]; gridClass: string }) => {
  return (
    <>
      <div className="flex flex-row flex-wrap -mx-3">
        {items.map((item, idx) => {
          return (
            <div
              key={idx} className={`flex-shrink max-w-full w-full ${gridClass} px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100`}
            >
              <div className="flex h-full flex-row sm:flex-col hover-img">
                <div className="w-[100%] hidden md:block">
                  <a href={newsUrl(item)}>
                    <img className="object-cover h-36 w-full" src={getImageUrl(item.featured_image)} alt={item.title} />
                  </a>
                </div>

                <div className="sm:w-full w-[40%] md:hidden">
                  <a href={newsUrl(item)}>
                    <img
                      className="object-cover w-full h-full"
                      src={getImageUrl(item.featured_image)}
                      alt={item.title}
                    />
                  </a>
                </div>

                <div className="py-0 flex flex-col justify-between sm:py-3 pl-3 sm:pl-0 flex-1">
                  <h3 className="text-lg font-bold leading-tight mb-2">
                    {/* <a href={newsUrl(item)}>{MaxText(item.title, 50)}</a> */}
                    <a href={newsUrl(item)}>{item.title}</a>
                  </h3>
                  {/* <a href={newsUrl(item)} className="hidden md:block text-gray-600 leading-tight mb-1">
                    {MaxText(item.brief, 90)}
                  </a> */}
                  <a className="text-gray-500" href={newsUrl(item)}>
                    <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                    {item.category?.name}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SquareGrid;
