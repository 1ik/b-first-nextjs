import { getImageUrl } from "../../../../libs/news-site-ui/src/lib/image_utils";
import { newsUrl } from "../../../../libs/settings/analytics/src/lib/util";
import React from 'react';

const FeaturedItems = ({ items }: { items: any[] }) => {
    if (!items.length) {
        return <></>;
    }
    return (
        <>
            {/* hero big grid */}
            <div className="bg-white py-6">
                <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    {/* big grid 1 */}
                    <div className="flex flex-row flex-wrap">
                        {/*Start left cover*/}
                        <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                            <div className="relative overflow-hidden ">
                                <a href={newsUrl(items[0])} className="filter brightness-50 hover:grayscale contrast-100">
                                    <img
                                        className="max-w-full w-full mx-auto h-auto"
                                        src={getImageUrl(items[0].featured_image)}
                                        alt="Image description"
                                    />
                                </a>
                                <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                                    <a href={newsUrl(items[0])}>
                                        <h2 className="text-3xl font-bold text-white">{items[0].title}</h2>
                                    </a>
                                    <p className="text-gray-100 hidden sm:inline-block">{items[0].brief}</p>
                                    <div className="pt-2">
                                        <div className="text-gray-100">
                                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                            {items[0].category?.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Start box news*/}
                        <div className="flex-shrink max-w-full w-full lg:w-1/2">
                            <div className="box-one flex flex-row flex-wrap">
                                <article className="flex-shrink max-w-full w-full sm:w-1/2">
                                    <div className="relative hover-img">
                                        <a href={newsUrl(items[1])}>
                                            <div className="filter brightness-50 hover:grayscale contrast-100">
                                                <img
                                                    className="max-w-full w-full mx-auto h-auto"
                                                    src={getImageUrl(items[1].featured_image)}
                                                    alt="Image description"
                                                />
                                            </div>
                                        </a>
                                        <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                            <a href={newsUrl(items[1])}>
                                                <h2 className="text-lg font-bold leading-tight text-white mb-1">{items[1].title}</h2>
                                            </a>
                                            <div className="pt-1">
                                                <div className="text-gray-100">
                                                    <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                                    {items[1].category?.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="flex-shrink max-w-full w-full sm:w-1/2">
                                    <div className="relative hover-img">
                                        <a href="#">
                                            <div className="filter brightness-50 hover:grayscale contrast-100">
                                                <img
                                                    className="max-w-full w-full mx-auto h-auto"
                                                    src={getImageUrl(items[2].featured_image)}
                                                    alt="Image description"
                                                />
                                            </div>
                                        </a>
                                        <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                            <a href={newsUrl(items[2])}>
                                                <h2 className="text-lg font-bold leading-tight text-white mb-1">{items[2].title}</h2>
                                            </a>
                                            <div className="pt-1">
                                                <div className="text-gray-100">
                                                    <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                                    {items[2].category?.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="flex-shrink max-w-full w-full sm:w-1/2">
                                    <div className="relative hover-img">
                                        <a href={newsUrl(items[3])}>
                                            <div className="filter brightness-50 hover:grayscale contrast-100">
                                                <img
                                                    className="max-w-full w-full mx-auto h-auto"
                                                    src={getImageUrl(items[3].featured_image)}
                                                    alt="Image description"
                                                />
                                            </div>
                                        </a>
                                        <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                            <a href={newsUrl(items[3])}>
                                                <h2 className="text-lg font-bold leading-tight text-white mb-1">{items[3].title}</h2>
                                            </a>
                                            <div className="pt-1">
                                                <div className="text-gray-100">
                                                    <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                                    {items[3].category?.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="flex-shrink max-w-full w-full sm:w-1/2">
                                    <div className="relative hover-img">
                                        <a href={newsUrl(items[4])}>
                                            <div className="filter brightness-50 hover:grayscale contrast-100">
                                                <img
                                                    className="max-w-full w-full mx-auto h-auto"
                                                    src={getImageUrl(items[4].featured_image)}
                                                    alt="Image description"
                                                />
                                            </div>
                                        </a>
                                        <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                            <a href={newsUrl(items[4])}>
                                                <h2 className="text-lg font-bold leading-tight text-white mb-1">{items[4].title}</h2>
                                            </a>
                                            <div className="pt-1">
                                                <div className="text-gray-100">
                                                    <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                                    {items[4].category?.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturedItems;