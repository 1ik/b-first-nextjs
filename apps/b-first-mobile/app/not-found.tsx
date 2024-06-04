import "../../../libs/fonts/montserrat/index.css";
import Navbar from "./components/Navbar/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-14 pb-20 montserrat-regular px-3">
        <h2 className="flex items-center gap-x-2 text-6xl montserrat-semibold">
          <span>4</span>
          <img className="w-12" src="/img/logo-mini.png" alt="logo" />
          <span>4</span>
        </h2>
        <h1 className="montserrat-bold text-xl my-3">Page Not Found</h1>
        <p className="text-center text-xl font-medium mt-3">Sorry! The page you are looking for could not be found.</p>
        <p className="text-lg text-center mt-3 mb-4">You can return to our homepage. Thanks for your understanding.</p>
        <a
          href="/"
          className="border bg-transparent border-accent text-accent px-5 py-2 text-lg font-medium rounded-md hover:text-white hover:bg-accent duration-200"
        >
          Return Home
        </a>
      </div>
    </>
  );
}
