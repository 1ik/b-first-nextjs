// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import { Route, Routes, useLocation } from "react-router-dom";
import { AddEditAuthorLazy, AuthorsListLazy } from "./internal/authors";
import { AddEditLazy, ListLazy } from "./internal/categories";

export const NavBar = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Newsroom</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

const _links = [
  { name: "Categories", href: "/categories", isActive: true },
  { name: "Authors", href: "/authors" },
  { name: "Tags", href: "/tags" },
  { name: "Stories", href: "/stories" },
];

export function App() {
  let location = useLocation();
  const [links, setLinks] = useState(() => {
    return _links.map((l) => {
      return { ...l, isActive: location.pathname.startsWith(l.href) };
    });
  });

  return (
    <div className="drawer h-full lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content h-full flex flex-col overflow-hidden">
        {/*Navbar*/}
        <div className="navbar h-4 bg-base-300">
          <div className="flex-1">
            <a className="btn">Newsroom</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Link</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="pl-2">
                <label
                  htmlFor="my-drawer"
                  className="text-lg drawer-button lg:hidden btn btn-sm btn-circle btn-outline"
                >
                  <IoMenuSharp />
                </label>
              </li>
            </ul>
          </div>
        </div>
        {/*Navbar*/}
        <div className="content flex-1  overflow-hidden">
          <div className="w-full h-full overflow-y-scroll">
            <Routes>
              <Route path="/categories" element={<ListLazy />} />
              <Route path="/categories/add" element={<AddEditLazy />} />
              <Route path="/authors" element={<AuthorsListLazy />} />
              <Route path="/authors/add" element={<AddEditAuthorLazy />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-50 min-h-full bg-base-200 text-base-content">
          {links.map((l) => (
            <li key={l.name}>
              <a href={l.href} className={"flex justify-between" + (l.isActive ? " active" : "")}>
                {l.name} <MdChevronRight />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
