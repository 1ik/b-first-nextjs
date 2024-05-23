import { lazy, Suspense } from "react";

const LoadRecommendedStories = lazy(
  () =>
    // eslint-disable-next-line
    new Promise<any>((resolve) => {
      import("./recommendedStories").then((component) => {
        resolve(component);
      });
    })
);

export default function RecommendedStoriesLazy() {
  return (
    <Suspense>
      <LoadRecommendedStories />
    </Suspense>
  );
}
