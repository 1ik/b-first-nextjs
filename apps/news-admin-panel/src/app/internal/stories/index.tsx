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
      import("./storyCreate").then((component) => {
        resolve(component);
      });
    })
);

const LoadStoryPreview = lazy(
  () =>
    // eslint-disable-next-line
    new Promise<any>((resolve) => {
      import("./storyPreview").then((component) => {
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

export function StoryPreviewLazy() {
  return (
    <Suspense>
      <LoadStoryPreview />
    </Suspense>
  );
}