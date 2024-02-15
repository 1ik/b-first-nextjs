import { getImageUrl } from "../../../../libs/news-site-ui/src/lib/image_utils";
import React from 'react';

const CardCaption = (props: { item: any }) => {
    const { item } = props;
    return (
        <>
            <div className="hover-img bg-gray-100">
                <a href="">
                    <img
                        className="max-w-full w-full mx-auto"
                        src={getImageUrl(item.featured_image, 1600, 900)}
                        alt={item.featured_image_caption}
                    />
                </a>
                <div className="py-3 px-6">
                    <span className="font-black font-semibold">{item.featured_image_caption}</span>
                </div>
            </div>
        </>
    );
};

export default CardCaption;