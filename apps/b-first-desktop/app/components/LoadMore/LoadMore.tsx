"use client";

import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { Key, useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getData } from "../../utils/dataFetch";

interface LoadMoreProps {
  initialPage?: number;
  lastPage?: number;
  size?: number;
  category: string;
  showIntro?: boolean;
  showTime?: boolean;
}

export default function LoadMore({
  initialPage = 1,
  lastPage = 1,
  category,
  size = 10,
  showIntro = true,
  showTime = false,
}: LoadMoreProps) {
  const [page, setPage] = useState(initialPage);
  const [stories, setStories] = useState<any>([]);
  const { ref, inView } = useInView();

  const loadMoreStoris = useCallback(
    async function () {
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
    },
    [category, page, size]
  );

  useEffect(() => {
    if (inView) {
      loadMoreStoris();
    }
  }, [inView, loadMoreStoris]);

  return (
    <>
      {stories.map((story: { id: Key | null | undefined }) => (
        <ItemCardHorizontal
          size="lg"
          showTime={showTime}
          showIntro={showIntro}
          className="pb-5 mb-5 border-b dark:border-dark-300"
          key={story.id}
          data={story}
        />
      ))}
      {page < lastPage && (
        <div className="flex items-center justify-center h-20">
          <img ref={ref} className="animate-ping w-12" src="/img/logo-mini.png" alt="logo" />
        </div>
      )}
    </>
  );
}
