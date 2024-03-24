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

const LoadAdd = lazy(
  () =>
    // eslint-disable-next-line
    new Promise<any>((resolve) => {
      import("./add").then((component) => {
        resolve(component);
      });
    })
);

const LoadEdit = lazy(
  () =>
    // eslint-disable-next-line
    new Promise<any>((resolve) => {
      import("./edit").then((component) => {
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

export function AddLazy() {
  return (
    <Suspense>
      <LoadAdd />
    </Suspense>
  );
}

export function EditLazy() {
  return (
    <Suspense>
      <LoadEdit />
    </Suspense>
  );
}
