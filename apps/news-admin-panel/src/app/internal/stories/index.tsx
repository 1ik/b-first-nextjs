import { lazy, Suspense } from "react";

const LoadList = lazy(
  () =>
    // eslint-disable-next-line
    new Promise<any>((resolve) => {
      import("./list").then((component) => {
        resolve(component);
      });
    })
);

const LoadAddEdit = lazy(
  () =>
    // eslint-disable-next-line
    new Promise<any>((resolve) => {
      import("./addEdit").then((component) => {
        resolve(component);
      });
    })
);

export function StoriesListLazy() {
  return (
    <Suspense>
      <LoadList />
    </Suspense>
  );
}

export function AddEditStoriesLazy() {
  return (
    <Suspense>
      <LoadAddEdit />
    </Suspense>
  );
}
