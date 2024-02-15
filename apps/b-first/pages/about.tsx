import styles from "./index.module.scss";
import Head from "next/head";

export default function Component() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div className="text-gray-700 pt-9 sm:pt-10">
        <header className="fixed top-0 left-0 right-0 z-50">
          <nav className="bg-black">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
              <div className="flex justify-between">
                <div className="mx-w-10 text-2xl font-bold capitalize text-white flex items-center">About</div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}
