"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

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
          <button
            className="font-montserrat bg-accent px-4 py-2 text-base rounded-sm text-white"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </div>
    </>
  );
}
