import { lazy, Suspense } from "react";

const LoadCreatead = lazy(
  () =>
    // eslint-disable-next-line
    new Promise<any>((resolve) => {
      import("./createAd").then((component) => {
        resolve(component);
      });
    })
);
const LoadAdsList = lazy(
  () =>
    // eslint-disable-next-line
    new Promise<any>((resolve) => {
      import("./adsList").then((component) => {
        resolve(component);
      });
    })
);


export function CreateAdLazy() {
  return (
    <Suspense>
      <LoadCreatead />
    </Suspense>
  );
}
export function AdListLazy() {
  return (
    <Suspense>
      <LoadAdsList />
    </Suspense>
  );
}
