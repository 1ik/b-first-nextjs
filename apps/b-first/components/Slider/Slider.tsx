import React from 'react';
import Card from '../Card/Card';

const Slider = (props: { items: any[]; title: string }) => {
    return (
        <>
            {/* slider news */}
            <div
                className="relative bg-gray-50"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="bg-black bg-opacity-70">
                    <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
                        <div className="flex flex-row flex-wrap">
                            <div className="flex-shrink max-w-full w-full py-12 overflow-hidden">
                                <div className="w-full py-3">
                                    <h2 className="text-white text-2xl font-bold text-shadow-black">
                                        <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
                                        {props.title}
                                    </h2>
                                </div>
                                <div id="post-carousel" className="splide">
                                    <div className="splide__track">
                                        <ul className="splide__list">
                                            {props.items.map((item) => (
                                                <li className="splide__slide">
                                                    <Card item={item} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;