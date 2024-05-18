"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Button } from "@bfirst/material-tailwind";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar />

      <div className="desktop-container flex justify-center text-center my-6">
        <div>
          <p className="capitalize font-black text-[150px] text-accent tracking-[10px]">Oops!</p>
          <h3 className="font-montserrat text-2xl mb-4">Something went wrong!</h3>

          <Button
            onClick={() => reset()}
            size="lg"
            className="font-montserrat border border-accent text-accent px-6 py-2.5 text-lg font-medium rounded-md hover:text-white hover:bg-accent duration-200"
          >
            Try again
          </Button>
        </div>
      </div>
    </>
  );
}
