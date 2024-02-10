import { getImageUrl } from "../../../../libs/news-site-ui/src/lib/image_utils";
import React from "react";
import SquareGrid from "../SquareGrid/SquareGrid";
import { newsUrl } from "libs/settings/analytics/src/lib/util";

const BlockNews3 = ({ items, title }: { items: any[]; title: string }) => {
  if (!items?.length) {
    return <></>;
  }

  const className = "sm:w-1/3";
  return (
    <>
      {/* block news */}
      <div className="bg-gray-50 py-6">
        <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            {/* post */}
            <div className="flex-shrink max-w-full w-full lg:w-2/3 ">
              <div className="w-full py-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
                  {title}
                </h2>
              </div>
              <div className="flex flex-row flex-wrap -mx-3">
                <div className="flex-shrink max-w-full w-full px-3 pb-5">
                  <div className="relative hover-img max-h-98 overflow-hidden">
                    {/*thumbnail*/}
                    <a href={newsUrl(items[0])}>
                      <img
                        className="max-w-full w-full mx-auto h-auto"
                        src={getImageUrl(items[0].featured_image)}
                        alt={items[0].title}
                      />
                    </a>
                    <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                      {/*title*/}
                      <a href={newsUrl(items[0])}>
                        <h2 className="text-3xl font-bold capitalize text-white mb-3">{items[0].title}</h2>
                      </a>
                      <p className="text-gray-100 hidden sm:inline-block">{items[0].brief}</p>
                      {/* author and date */}
                      <div className="pt-2">
                        <div className="text-gray-100">
                          <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                          {items[0].category?.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-3">
                  <SquareGrid items={items.slice(1, 7)} gridClass={className} />
                </div>
              </div>
            </div>
            {/* sidebar */}
            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pt-14 lg:pb-8 order-first">
              <div className="w-full bg-white">
                <div className="mb-6">
                  <div className="p-4 bg-gray-100">
                    <h2 className="text-lg font-bold">Most Popular</h2>
                  </div>
                  <ul className="post-number">
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">
                        Why the world would end without political polls
                      </a>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">
                        Meet The Man Who Designed The Ducati Monster
                      </a>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">
                        2020 Audi R8 Spyder spy shots release
                      </a>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">
                        Lamborghini makes Huracán GT3 racer faster for 2019
                      </a>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">
                        ZF plans $14 billion autonomous vehicle push, concept van
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-sm py-6 sticky">
                <div className="w-full text-center">
                  <a className="uppercase" href="#">
                    Advertisement
                  </a>
                  <a href="#">
                    <img className="mx-auto" src="/img/ads/250.jpg" alt="advertisement area" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockNews3;
