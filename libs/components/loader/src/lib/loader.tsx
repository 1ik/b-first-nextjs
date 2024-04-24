import { Spinner } from "@bfirst/material-tailwind";

/* eslint-disable-next-line */
export interface LoaderProps {}

export function Loader(props: LoaderProps) {
  return (
    <div className="flex justify-center items-center h-full">
      <Spinner className="h-10 w-10 text-gray-900/50" />
    </div>
  );
}

export default Loader;
