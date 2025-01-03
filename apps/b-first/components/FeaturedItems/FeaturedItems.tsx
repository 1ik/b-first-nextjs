import { getImageUrl } from "../../image_utils";
import { newsUrl } from "../../util";

const FeaturedItems = ({ items }: { items: any[] }) => {
  if (!items.length) {
    return <></>;
  }
  return (
    <>
      {/* hero big grid */}
      <div className="bg-white py-10">
        <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
          {/* big grid 1 */}
          <div className="flex flex-row flex-wrap">
            {/*Start left cover*/}
            <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
              <div className="relative h-full overflow-hidden ">
                <a
                  href={newsUrl(items[0])}
                  className="filter bg-gradient-to-b from-black/10 to-black brightness-75 hover:grayscale contrast-100"
                >
                  <img
                    className="max-w-full w-full mx-auto h-full object-cover"
                    src={getImageUrl(items[0].meta.featured_image)}
                    alt={items[0].title}
                  />
                </a>
                <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                  <a href={newsUrl(items[0])}>
                    <h2 className="xl:text-3xl leading-tight sm:leading-normal lg:text-2xl sm:text-2xl text-lg md:text-3xl font-bold text-white">
                      {items[0].meta.altheadline || items[0].title}
                    </h2>
                  </a>
                  <p className="text-gray-100 hidden sm:inline-block">{items[0].meta.headline}</p>
                  <div className="pt-2">
                    <div className="text-gray-100">
                      <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                      {items[0].categories[0]?.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Start box news*/}
            <div className="flex-shrink max-w-full w-full lg:w-1/2">
              <div className="flex h-full gap-1 flex-row flex-wrap">
                {items.map((news, index) => {
                  if (index >= 1 && index <= 4) {
                    return (
                      <article key={index} className="flex-shrink max-w-full w-full sm:w-[calc(50%-2px)]">
                        <div className="relative h-full hover-img">
                          <a href={newsUrl(news)}>
                            <div className="filter h-full bg-gradient-to-b from-black/5 to-black brightness-75 hover:grayscale contrast-100">
                              <img
                                className="max-w-full min-h-[200px] object-cover h-full w-full mx-auto"
                                src={getImageUrl(news.meta.featured_image)}
                                alt={news.title}
                              />
                            </div>
                          </a>
                          <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                            <a href={newsUrl(news)}>
                              <h2 className="text-lg font-bold leading-tight text-white mb-1">
                                {news.meta.altheadline || news.title}
                              </h2>
                            </a>
                            <div className="pt-1">
                              <div className="text-gray-100">
                                <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                {news.categories[0]?.name}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedItems;
