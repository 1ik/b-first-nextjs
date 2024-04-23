import { lazy, Suspense } from "react";

const LoadTrending = lazy(
  () =>
    // eslint-disable-next-line
    new Promise<any>((resolve) => {
      import("./trendingTags").then((component) => {
        resolve(component);
      });
    })
);

export function TrendingTagsLazy() {
  return (
    <Suspense>
      <LoadTrending />
    </Suspense>
  );
}
