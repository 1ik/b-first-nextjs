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
      import("./add").then((component) => {
        resolve(component);
      });
    })
);

export function ListLazy() {
  return (
    <Suspense>
      <LoadList />
    </Suspense>
  );
}

export function AddEditLazy() {
  return (
    <Suspense>
      <LoadAddEdit />
    </Suspense>
  );
}
