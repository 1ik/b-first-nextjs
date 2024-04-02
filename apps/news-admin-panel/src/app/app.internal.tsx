// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Accordion, AccordionBody, AccordionHeader } from "@bfirst/material-tailwind";
import { useContext, useEffect, useRef, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AppContext } from "./app.context";
import { AuthorAddLazy, AuthorEditLazy, AuthorsListLazy } from "./internal/authors";
import { AddLazy, EditLazy, ListLazy } from "./internal/categories";
import { ManageStories } from "./internal/manageStories/manageStories";
import { AddEditStoriesLazy, StoriesListLazy, StoryPreviewLazy, TrashStoriesListLazy } from "./internal/stories";
import { TagAddLazy, TagEditLazy, TagsListLazy } from "./internal/tags";

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
  { name: "Stories", href: "/stories" },
  { name: "Top News List", href: "/top-news-list" },
  { name: "Trash", href: "/trash" },
  { name: "Categories", href: "/categories", isActive: true },
  { name: "Authors", href: "/authors" },
  { name: "Tags", href: "/tags" },
];

const _subLinks = [
  { name: "Stories", href: "/trash-stories" },
  { name: "Categories", href: "/trash-categories" },
  { name: "Authors", href: "/trash-authors" },
  { name: "Tags", href: "/trash-tags" },
];

export function AppInternal() {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  let location = useLocation();

  const [links, setLinks] = useState(() => {
    return _links.map((l) => {
      return { ...l, isActive: location.pathname.startsWith(l.href) };
    });
  });
  const [subLinks, setSubLinks] = useState(() => {
    return _subLinks.map((sL) => {
      return { ...sL, isActive: location.pathname.startsWith(sL.href) };
    });
  });

  useEffect(() => {
    setLinks((curr) => {
      return curr.map((l) => {
        return { ...l, isActive: location.pathname.startsWith(l.href) };
      });
    });
  }, [location.pathname]);

  useEffect(() => {
    setSubLinks((curr) => {
      return curr.map((sL) => {
        return { ...sL, isActive: location.pathname.startsWith(sL.href) };
      });
    });
  }, [location.pathname]);

  const { user, setUser, setToken } = useContext(AppContext);
  const handleSignOut = function () {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    setUser && setUser(undefined);
    setToken && setToken(undefined);
  };

  const modalRef = useRef(null);
  const btnRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = function (e: any) {
      if ((btnRef.current as any)?.contains(e.target)) {
        return;
      } else if (e.target !== modalRef.current) {
        setShowProfileModal(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return function () {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = function () {
    (document.querySelector("#my-drawer") as HTMLInputElement).checked = false;
  };

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
                <button className="flex" ref={btnRef} onClick={() => setShowProfileModal((cur) => !cur)}>
                  <FaRegCircleUser className="text-xl" />
                  <p>{user.name}</p>
                </button>
                {showProfileModal && (
                  <ul
                    ref={modalRef}
                    className="absolute top-[100%] bg-white right-0 z-[999] flex flex-col hover:bg-white shadow-xl min-w-full m-0 p-0 text-center"
                  >
                    <li className="hover:bg-gray-200 cursor-pointer p-2">Settings</li>
                    <li className="hover:bg-gray-200 cursor-pointer p-2">Theme</li>
                    <li className="hover:bg-gray-200 cursor-pointer p-2" onClick={handleSignOut}>
                      Sign out
                    </li>
                  </ul>
                )}
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
              <Route path="/categories/add" element={<AddLazy />} />
              <Route path="/categories/:id" element={<EditLazy />} />
              <Route path="/authors" element={<AuthorsListLazy />} />
              <Route path="/authors/add" element={<AuthorAddLazy />} />
              <Route path="/authors/:id" element={<AuthorEditLazy />} />
              <Route path="/stories" element={<StoriesListLazy />} />
              <Route path="/trash" element={<TrashStoriesListLazy />} />
              <Route path="/stories/create-story" element={<AddEditStoriesLazy />} />
              <Route path="/tags" element={<TagsListLazy />} />
              <Route path="/tags/add" element={<TagAddLazy />} />
              <Route path="/tags/:id" element={<TagEditLazy />} />
              <Route path="/stories/:storyId" element={<StoryPreviewLazy />} />
              <Route path="/top-news-list" element={<ManageStories />} />
            </Routes>
          </div>
        </div>
      </div>

      <div className="drawer-side z-[40]">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu p-4 w-50 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
          <ul className="">
            {links.map((l) => (
              <li key={l.name}>
                <Link
                  onClick={handleClick}
                  key={l.name}
                  to={l.href}
                  className={"flex justify-between" + (l.isActive ? " active" : "")}
                >
                  {l.name} <MdChevronRight />
                </Link>
              </li>
            ))}
            <Accordion
              open={subMenuOpen}
              icon={subMenuOpen ? <MdChevronRight className="rotate-90" /> : <MdChevronRight />}
            >
              <AccordionHeader
                className="text-sm px-4 py-2 font-normal text-base-content border-0"
                onClick={() => setSubMenuOpen((cur) => !cur)}
              >
                Trash
              </AccordionHeader>
              <AccordionBody className="p-0 pl-2">
                {subLinks.map((sL) => (
                  <li key={sL.name}>
                    <Link
                      onClick={handleClick}
                      key={sL.name}
                      to={sL.href}
                      className={"flex justify-between" + (sL.isActive ? " active" : "")}
                    >
                      {sL.name} <MdChevronRight />
                    </Link>
                  </li>
                ))}
              </AccordionBody>
            </Accordion>
          </ul>
          {/* <button className="btn btn-primary btn-outline" onClick={handleSignOut}>
            Sign out
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default AppInternal;
