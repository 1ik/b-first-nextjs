import { lazy, Suspense } from "react";

const LoadHome = lazy(
  () =>
    // eslint-disable-next-line
    new Promise<any>((resolve) => {
      import("./home").then((component) => {
        resolve(component);
      });
    })
);

export function HomeLazy() {
  return (
    <Suspense>
      <LoadHome />
    </Suspense>
  );
}
