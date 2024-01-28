export default function Component() {
  return (
    <div className="text-gray-700 pt-9 sm:pt-10">
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-black">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex justify-between">
              <div className="mx-w-10 text-2xl font-bold capitalize text-white flex items-center">Tailnews</div>
              <div className="flex flex-row">
                <ul className="navbar hidden lg:flex lg:flex-row text-gray-400 text-sm items-center font-bold">
                  <li className="active relative border-l border-gray-800 hover:bg-gray-900">
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="/national">
                      National
                    </a>
                  </li>
                  <li className="active relative border-l border-gray-800 hover:bg-gray-900">
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="politics">
                      Politics
                    </a>
                  </li>
                  <li className="active relative border-l border-gray-800 hover:bg-gray-900">
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="index.html">
                      Business
                    </a>
                  </li>
                  <li className="active relative border-l border-gray-800 hover:bg-gray-900">
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="sports">
                      Sports
                    </a>
                  </li>
                  <li className="active relative border-l border-gray-800 hover:bg-gray-900">
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="sports">
                      Business
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
