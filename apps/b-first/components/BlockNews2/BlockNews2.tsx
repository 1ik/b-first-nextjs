import { newsUrl } from "../../util";
import SquareGrid from "../SquareGrid/SquareGrid";

const BlockNews2 = ({ items, latest, title }: { items: any[]; title: string; latest: any[] }) => {
  if (!items.length) {
    return <></>;
  }

  const className = "sm:w-1/3";
  return (
    <>
      <div className="bg-gray-50 py-6">
        <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            {/* Left */}
            <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
              <div className="w-full py-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
                  {title}
                </h2>
              </div>
              <SquareGrid items={items} gridClass={className} />
            </div>
            {/* right */}
            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
              <div className="w-full bg-white">
                <div className="mb-6">
                  <div className="p-4 bg-gray-100">
                    <h2 className="text-lg font-bold">Latest</h2>
                  </div>
                  <ul className="post-number">
                    {latest.map((item) => {
                      return (
                        <li key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href={newsUrl(item)}>
                            {item.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="text-sm py-6 sticky">
                <div className="w-full text-center">
                  <a href="#">
                    <img className="mx-auto" src="/img/ads/union-bank-ad.gif" alt="advertisement area" />
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

export default BlockNews2;
