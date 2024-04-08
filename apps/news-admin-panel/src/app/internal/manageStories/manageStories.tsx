import { useEffect, useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import { Breadcrumb } from "../../components";
import { token } from "../../token_utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dateFormatter } from "../../dateFormat_utils";
import { Spinner } from "@bfirst/material-tailwind";

const dropTarget = (
  <div className="py-3 text-center text-blue-600/50 font-bold border-2 border-dashed border-blue-600/50 rounded-md">
    Drop Here
  </div>
);

export function ManageStories() {
  const [categoryOption, setCategoryOption] = useState("0");
  const [featuredStories, setFeaturedStories] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedNews, setSearchedNews] = useState([]);
  const [lastSearchTime, setLastSearchTime] = useState(0);
  const [timer, setTimer] = useState<number | undefined>(undefined);
  const [showConfirmModalFor, setShowConfirmModalFor] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const debounceDelay = 300;

  const throttledSearch = () => {
    const currentTime = Date.now();
    if (currentTime - lastSearchTime >= debounceDelay) {
      setLastSearchTime(currentTime);
      // fetchData();
    }
  };

  const handlePaste = (event: any) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text/plain");
    setSearch(pastedText);
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      throttledSearch();
    }, 100) as unknown as number;
    setTimer(newTimer);
  };

  const fetchData = async function () {
    try {
      const response = await fetch(
        `https://backend.bangladeshfirst.com/api/v1/public/categories/${categoryOption}/featured-stories`,
        {
          headers: { Authorization: token },
        }
      );

      if (!response.ok) throw new Error("Could not fetch data");
      const data = await response.json();
      setFeaturedStories(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryOption]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async function () {
      try {
        const response = await fetch(`https://backend.bangladeshfirst.com/api/v1/stories-search?title=${search}`, {
          headers: { Authorization: token },
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Could not fetch data");
        const data = await response.json();
        setSearchedNews(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return function () {
      controller.abort();
    };
  }, [search]);

  const handleAddFeaturedStories = function (news: any) {
    if (featuredStories.length >= 11) {
      toast.success("Last item removed and new one added", {
        position: "top-center",
      });
      setFeaturedStories((cur) => {
        const newList = cur.slice(0, -1);
        return [{ id: news.id, title: news.title, created_at: news.created_at }, ...newList] as never;
      });
    } else
      setFeaturedStories((cur) => [{ id: news.id, title: news.title, created_at: news.created_at }, ...cur] as never);
    setSearch("");
  };

  const handleSubmit = async function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (featuredStories.length !== 11) {
      toast.warning("Total featured story must be 11", {
        position: "top-center",
      });
      return;
    }

    const newFeaturedIds = {
      category_id: categoryOption,
      story_ids: featuredStories.map((story) => (story as { id: number }).id),
    };

    try {
      const response = await fetch(`https://backend.bangladeshfirst.com/api/v1/featured/stories/create`, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeaturedIds),
      });

      if (!response.ok) throw new Error("Could not fetch data");
      toast.success("Featured saved succesfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = function (e: any) {
    if (!e.target.value) setSearchedNews([]);
    setSearch(e.target.value);
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      throttledSearch();
    }, debounceDelay) as unknown as number;
    setTimer(newTimer);
  };

  const handleRemoveFeaturedStories = function (id: number) {
    setShowConfirmModalFor(id);
  };

  const handleConfirm = (id: number) => {
    setFeaturedStories((curr) => curr.filter((item) => (item as { id: number }).id !== id));
    setShowConfirmModalFor(undefined);
    toast.dismiss();
    toast.success("Story removed successfully", { position: "top-center" });
  };

  const move = <T,>(array: T[], from: number, to: number): T[] => {
    const newArray: T[] = [...array];
    const item: T = newArray.splice(from, 1)[0];
    newArray.splice(to, 0, item);
    return newArray;
  };

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setFeaturedStories((array: any[]) => move(array, oldIndex, newIndex) as never);
  };

  /* ========= handling outside click ======= */
  const handleOutsideClick = function (e: React.MouseEvent<HTMLElement>) {
    const clickedElement = e.target as HTMLElement;
    if (showConfirmModalFor && clickedElement.id !== "selectTags_input") setShowConfirmModalFor(undefined);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="overflow-x-auto flex flex-col h-full" onClick={handleOutsideClick}>
      <div className="inline-flex h-10 justify-between items-center px-4 py-2 w-full border-b fixed bg-white z-10">
        <Breadcrumb items={[{ name: "Top News List" }]} />
      </div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="overflow-x-auto mb-5 p-5 h-full w-full flex flex-col">
          {/*=============content=================*/}
          <div className="flex-1 w-full mb-10">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 text-gray-900 mt-10">Feature Category</label>
                <select
                  className="border-gray-300 rounded-md"
                  value={categoryOption}
                  onChange={(e) => setCategoryOption(e.target.value)}
                >
                  <option value="0">Home</option>
                </select>
              </div>

              {/* ================ search for news ================= */}
              <div className="col-span-3 relative">
                <label className="block text-sm font-medium leading-6 text-gray-900">Search for News</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  value={search}
                  onChange={handleSearch}
                  onPaste={handlePaste}
                />
                {searchedNews.length ? (
                  <div className="flex flex-col h-[50vh] overflow-y-auto gap-y-2 mt-1 w-full bg-white">
                    {searchedNews.map((news) => {
                      if (featuredStories.find((item) => (item as { id: number }).id === (news as { id: number }).id)) {
                        return null;
                      }
                      return (
                        <div
                          key={(news as { id: number }).id}
                          className="flex border px-1 py-2 items-center rounded-md w-full justify-between"
                        >
                          <h3>{(news as { title: string }).title}</h3>
                          <button
                            type="button"
                            onClick={() => handleAddFeaturedStories(news)}
                            className="bg-slate-300 p-1 text-xl"
                          >
                            +
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>

              {/* ================== sortable list =============== */}
              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 mb-4 text-gray-900">Featured News</label>
                <div className="grid grid-cols-3 py-4 mb-4 border-b">
                  <p className="grid-col-1">Serial</p>
                  <p className="grid-col-2 text-center">Title</p>
                  <p className="grid-col-3 text-center hidden md:block">Created at</p>
                </div>
                <SortableList
                  dropTarget={dropTarget}
                  onSortEnd={onSortEnd}
                  className="flex flex-col gap-y-2"
                  draggedItemClassName="dragged"
                >
                  {featuredStories.map((item, index) => (
                    <div className="flex items-center">
                      <div className="px-2 w-[40px]">
                        <p>{index + 1}</p>
                      </div>
                      <div className="flex-grow">
                        <SortableItem key={(item as { id: number }).id}>
                          <div className="flex  justify-between items-center py-3 rounded-md cursor-grab px-2 bg-gray-200  relative   max-[340px]:w-[260px] max-[360px]:w-[290px] max-[430px]:w-[330px] max-[530px]:w-[350px]   sm:w-full">
                            <div className="px-5">
                              <h3 className="">{(item as { title: string }).title}</h3>
                              <p className="md:hidden  mt-4">
                                {dateFormatter((item as { created_at: string }).created_at)}
                              </p>
                            </div>
                            <div className="flex gap-x-4 items-center">
                              <p className="hidden md:block">
                                {dateFormatter((item as { created_at: string }).created_at)}
                              </p>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleRemoveFeaturedStories((item as { id: number }).id);
                                }}
                                className="btn"
                              >
                                X
                              </button>
                            </div>
                            {showConfirmModalFor === (item as { id: number }).id && (
                              <div
                                id="delete-confirmation-modal"
                                className="absolute bg-white shadow-lg right-0 bottom-[100%] p-3 rounded-md cursor-default border border-black/30"
                              >
                                Do you want to remove it from list ?
                                <div className="flex w-full [&>*]:flex-grow">
                                  <button
                                    onClick={() => handleConfirm((item as { id: number }).id)}
                                    className="px-2 py-1 border hover:bg-black hover:text-white"
                                  >
                                    Yes
                                  </button>
                                  <button
                                    onClick={() => setShowConfirmModalFor(undefined)}
                                    className="px-2 py-1 border hover:bg-black hover:text-white"
                                  >
                                    No
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </SortableItem>
                      </div>
                    </div>
                  ))}
                </SortableList>
              </div>
            </div>
          </div>
        </div>
        {/* ================== buttons ================ */}
        <div className="h-10 pt-5 flex items-center justify-end gap-x-6 w-full border-t bg-white border-gray-100 fixed bottom-0 pb-5 right-10">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-sm btn-accent">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
