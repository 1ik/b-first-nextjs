import { lazy, Suspense } from "react";


const LoadAdManager = lazy(
  () =>
    // eslint-disable-next-line
    new Promise<any>((resolve) => {
      import("./ad-manager").then((component) => {
        resolve(component);
      });
    })
);



export function AdManagerLazy() {
  return (
    <Suspense>
      <LoadAdManager />
    </Suspense>
  );
}
