"use client";

import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { Spinner } from "@bfirst/material-tailwind";
import { Key, useEffect, useRef, useState } from "react";
import { getData } from "../../utils/dataFetch";

interface LoadMoreProps {
  initialPage?: number;
  size?: number;
  category: string;
}

export default function LoadMore({ initialPage = 1, category, size = 10 }: LoadMoreProps) {
  const [page, setPage] = useState(initialPage);
  const [stories, setStories] = useState<any>([]);
  const loaderRef = useRef(null);

  useEffect(() => {
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

    const loader = loaderRef.current;
    if (!loader) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadMoreStoris();
        }
      });
    });

    observer.observe(loader);
  }, [category, page, size]);

  return (
    <>
      {stories.map((story: { id: Key | null | undefined }) => (
        <ItemCardHorizontal
          size="lg"
          showIntro
          className="pb-5 border-b dark:border-dark-300"
          key={story.id}
          data={story}
        />
      ))}
      <div className="flex items-center justify-center h-20">
        <Spinner ref={loaderRef} color="red" className="w-10 h-10 text-transparent" />
      </div>
    </>
  );
}