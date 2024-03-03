import { lazy, Suspense } from "react";

const LoadManageStories = lazy(
  () =>
    // eslint-disable-next-line
    new Promise<any>((resolve) => {
      import("./manageStories").then((component) => {
        resolve(component);
      });
    })
);

export function ManageStoriesLazy() {
  return (
    <Suspense>
      <LoadManageStories />
    </Suspense>
  );
}
