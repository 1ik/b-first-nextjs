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

const LoadTrashList = lazy(
  () =>
    // eslint-disable-next-line
    new Promise<any>((resolve) => {
      import("./trash").then((component) => {
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

export function AuthorsListLazy() {
  return (
    <Suspense>
      <LoadList />
    </Suspense>
  );
}

export function TrashAuthorsListLazy() {
  return (
    <Suspense>
      <LoadTrashList />
    </Suspense>
  );
}

export function AuthorAddLazy() {
  return (
    <Suspense>
      <LoadAdd />
    </Suspense>
  );
}

export function AuthorEditLazy() {
  return (
    <Suspense>
      <LoadEdit />
    </Suspense>
  );
}
