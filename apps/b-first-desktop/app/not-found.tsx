import "../../../libs/fonts/montserrat/index.css";
import Navbar from "./components/Navbar/Navbar";

export default function NotFound() {
  return (
    <>
      <head>
        <title>Page Not Found | Bangladesh First</title>
        <meta
          name="description"
          content="Oops! The page you were looking for isn't here. Navigate back to our latest news and updates or explore trending topics on Bangladesh First."
        />
      </head>
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-14 pb-20 montserrat-regular">
        <h2 className="flex items-center gap-x-4 text-9xl montserrat-semibold">
          <span>4</span>
          <img className="w-20" src="/img/logo-mini.png" alt="logo" />
          <span>4</span>
        </h2>
        <h1 className="my-4 text-3xl montserrat-bold">Page Not Found</h1>
        <p className="text-center text-2xl font-medium mt-1 mb-">
          Sorry! The page you are looking for could not be found.
        </p>
        <p className="text-xl mt-1 mb-4">You can return to our homepage. Thanks for your understanding.</p>
        <a
          href="/"
          className="border bg-transparent border-accent text-accent px-6 py-2.5 text-xl font-medium rounded-md hover:text-white hover:bg-accent duration-200"
        >
          Return Home
        </a>
      </div>
    </>
  );
}
