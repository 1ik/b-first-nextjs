import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-14 pb-20 font-montserrat ">
        <h2 className="flex items-center gap-x-4 text-9xl font-semibold">
          <span>4</span>
          <img className="w-20" src="/img/logo-mini.png" alt="logo" />
          <span>4</span>
        </h2>
        <p className="text-center text-2xl font-medium mt-1 mb-">
          Sorry! The page you are looking for could not be found.
        </p>
        <p className="text-xl mt-1 mb-4">You can return to our homepage. Thanks for your understanding.</p>
        <Link
          className="border border-accent text-accent px-6 py-2.5 text-xl font-medium rounded-md hover:text-white hover:bg-accent duration-200"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </>
  );
}
