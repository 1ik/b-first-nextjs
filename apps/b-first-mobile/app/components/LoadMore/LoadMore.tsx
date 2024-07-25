"use client";

import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { Key, useState } from "react";
import { getData } from "../../utils/dataFetch";
import filterCategory from "../../utils/filterCategory";

interface LoadMoreProps {
  initialPage?: number;
  lastPage?: number;
  size?: number;
  url: string;
  showIntro?: boolean;
  showTime?: boolean;
}

export default function LoadMore({
  initialPage = 1,
  lastPage = 1,
  url,
  size = 20,
  showIntro = true,
  showTime = false,
}: LoadMoreProps) {
  const [page, setPage] = useState(initialPage);
  const [stories, setStories] = useState<any>([]);

  const loadMoreStoris = async function () {
    const next = page + 1;
    const moreStories = await getData(`${url}?size=${size}&page=${next}`);
    if (moreStories?.data.length) {
      setPage(next);
      setStories((cur: any) => [...cur, ...(moreStories?.data ? moreStories.data : [])]);
    }
  };

  const filterStories = filterCategory(stories, "On_This_Day", "Video_Gallery", "Photo_Gallery");

  return (
    <>
      {filterStories?.map((story: any) => (
        <ItemCardHorizontal
          showIntro={showIntro}
          showTime={showTime}
          size="md"
          className="pb-4 mb-4 border-b dark:border-dark-300"
          key={story.id}
          data={story}
          titleFontSize="16px"
        />
      ))}
      {page < lastPage && (
        <div className="flex items-center justify-center h-20">
          <button onClick={() => loadMoreStoris()} className="bg-[#EB1923] text-white font-semibold py-2 px-4 rounded">
            Load More
          </button>
        </div>
      )}
    </>
  );
}
