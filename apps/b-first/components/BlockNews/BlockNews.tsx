import React from 'react';
import SquareGrid from '../SquareGrid/SquareGrid';

const BlockNews = ({ items, title, showAd = true }: { items: any[]; title: string; showAd?: boolean }) => {
    const className = 'sm:w-1/3';
    return (
        <>
            <div className="bg-white">
                <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
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
                            <SquareGrid items={items} gridClass={className} />
                        </div>
                        {/* right */}
                        {showAd && (
                            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pb-8 order-first lg:order-last">
                                <div className="w-full bg-gray-50 h-full">
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
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlockNews;