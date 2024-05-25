"use client";

import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { Key, useState } from "react";
import { getData } from "../../utils/dataFetch";

interface LoadMoreProps {
  initialPage?: number;
  lastPage?: number;
  size?: number;
  category: string;
}

export default function LoadMore({ initialPage = 1, lastPage = 1, category, size = 10 }: LoadMoreProps) {
  const [page, setPage] = useState(initialPage);
  const [stories, setStories] = useState<any>([]);

  const loadMoreStoris = async function () {
    const next = page + 1;
    const moreStories = await getData(
      `${
        category === "latest"
          ? `latest/stories?size=${size}&page=${next}`
          : `categories/${category}/stories?size=${size}&page=${next}`
      }`
    );
    if (moreStories?.data.length) {
      setPage(next);
      setStories((cur: any) => [...cur, ...(moreStories?.data ? moreStories.data : [])]);
    }
  };

  return (
    <>
      {stories.map((story: { id: Key | null | undefined }) => (
        <ItemCardHorizontal size="md" className="pb-5 border-b dark:border-dark-300" key={story.id} data={story} />
      ))}
      {page < lastPage && (
        <div className="flex items-center justify-center h-20">
          <button onClick={() => loadMoreStoris()} className="bg-[#EB1923] text-white font-semibold py-2 px-4 rounded">Load More</button>
        </div>
      )}
    </>
  );
}
