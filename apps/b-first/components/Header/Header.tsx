import CurrentDate from "../CurrentDate/CurrentDate";

const Header = ({ category }: { category?: string }) => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b-2">
        <nav className="bg-white">
          <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex justify-between">
              <div className="mx-w-10 text-2xl font-bold capitalize text-white flex flex-col items-center">
                <a href="/">
                  <img src="/img/logo.svg" alt="" className="w-[220px]" />
                </a>
                <CurrentDate />
              </div>

              <div className="flex flex-row">
                <ul className="navbar hidden lg:flex lg:flex-row text-gray-400 text-sm items-center font-bold">
                  <li className={`relative border-l hover:bg-gray-900 ${category === "Bangladesh" ? "active" : null}`}>
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="/Bangladesh">
                      Bangladesh
                    </a>
                  </li>
                  <li className={`relative border-l hover:bg-gray-900 ${category === "World" ? "active" : null}`}>
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="/World">
                      World
                    </a>
                  </li>
                  <li className={`relative border-l hover:bg-gray-900 ${category === "Politics" ? "active" : null}`}>
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="/Politics">
                      Politics
                    </a>
                  </li>
                  <li className={`relative border-l hover:bg-gray-900 ${category === "Sports" ? "active" : null}`}>
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="/Sports">
                      Sports
                    </a>
                  </li>

                  <li
                    className={`dropdown relative border-l border-r hover:bg-gray-900 ${
                      category === "Corporates" ||
                      category === "Tech" ||
                      category === "Opinion" ||
                      category === "Features" ||
                      category === "Lifestyle" ||
                      category === "Education"
                        ? "active"
                        : null
                    }`}
                  >
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="#">
                      More
                    </a>
                    <ul className="dropdown-menu font-normal absolute left-0 right-auto top-full z-50 border-b-0 text-left bg-white text-gray-700 border ">
                      <li className="relative hover:bg-gray-50">
                        <a className="block py-2 px-6 border-b border-gray-100" href="#">
                          Corporates
                        </a>
                      </li>
                      <li className="relative hover:bg-gray-50">
                        <a className="block py-2 px-6 border-b border-gray-100" href="/Tech">
                          Tech
                        </a>
                      </li>
                      <li className="relative hover:bg-gray-50">
                        <a className="block py-2 px-6 border-b border-gray-100" href="/Opinion">
                          Opinion
                        </a>
                      </li>
                      <li className="relative hover:bg-gray-50">
                        <a className="block py-2 px-6 border-b border-gray-100" href="/Features">
                          Features
                        </a>
                      </li>
                      <li className="relative hover:bg-gray-50">
                        <a className="block py-2 px-6 border-b border-gray-100" href="/Lifestyle">
                          Lifestyle
                        </a>
                      </li>
                      <li className="relative hover:bg-gray-50">
                        <a className="block py-2 px-6 border-b border-gray-100" href="/Education">
                          Education
                        </a>
                      </li>
                      <li className="relative hover:bg-gray-50">
                        <a className="block py-2 px-6 border-b border-gray-100" href="">
                          Search
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className="flex flex-row items-center text-gray-300">
                  <div className="relative hover:bg-gray-800 block lg:hidden">
                    <button type="button" className="menu-mobile block py-3 px-6 border-b-2 border-transparent">
                      <span className="sr-only">Mobile menu</span>
                      <svg
                        className="inline-block h-6 w-6 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
