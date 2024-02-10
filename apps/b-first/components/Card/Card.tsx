import { getImageUrl } from "../../../../libs/news-site-ui/src/lib/image_utils";
import { newsUrl } from "../../../../libs/settings/analytics/src/lib/util";
import React from 'react';
import MaxText from "../MaxText/MaxText";

const Card = (props: { item: any }) => {
    const { item } = props;
    return (
        <>
            <div className="w-full pb-3">
                <div className="hover-img bg-white">
                    <a href={newsUrl(item)}>
                        <img className="max-w-full w-full mx-auto" src={getImageUrl(item.featured_image)} alt="alt title" />
                    </a>
                    <div className="py-3 px-6">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href={newsUrl(item)}>{MaxText(item.title, 60)}</a>
                        </h3>
                        <a className="text-gray-500" href={`/${item.category.name}`}>
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            {item.category.name}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;