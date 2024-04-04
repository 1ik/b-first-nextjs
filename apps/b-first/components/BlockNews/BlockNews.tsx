import SquareGrid from "../SquareGrid/SquareGrid";

const BlockNews = ({
  items,
  title,
  showAd = true,
  position,
}: {
  items: any[];
  title: string;
  showAd?: boolean;
  position?: string;
}) => {
  const className = "sm:w-1/3";
  return (
    <>
      <div className="bg-white">
        <div className={`md-container xl:container  px-3 sm:px-4 xl:px-2 ${position}`}>
          <div className="flex flex-row flex-wrap">
            {/* Left */}
            <div className={`flex-shrink max-w-full w-full ${showAd ? "lg:w-2/3" : ""} overflow-hidden`}>
              {title && (
                <div className="w-full py-3">
                  <h2 className="text-gray-800 text-2xl font-bold">
                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
                    {title}
                  </h2>
                </div>
              )}
              {showAd && (
                <a href="#">
                  <img
                    className="hidden lg:block mx-auto mb-8"
                    src="/img/ads/FSB-banner-ad.gif"
                    alt="advertisement area"
                  />
                </a>
              )}

              <SquareGrid items={items} gridClass={className} />
            </div>
      
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockNews;
