import { Spinner } from "@bfirst/material-tailwind";

/* eslint-disable-next-line */
export interface LoaderProps {}

export function Loader(props: LoaderProps) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Spinner className="h-10 w-10 text-gray-900/50" />
    </div>
  );
}

export default Loader;
