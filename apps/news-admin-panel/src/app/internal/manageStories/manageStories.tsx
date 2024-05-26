import { useGet, usePost } from "@bfirst/api-client";
import { Loader } from "@bfirst/components-loader";
import { TypeAheadSearch } from "@bfirst/components-type-ahead-search";
import { useEffect, useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Breadcrumb } from "../../components";
import { dateFormatter } from "../../dateFormat_utils";

const dropTarget = (
  <div className="py-3 text-center text-blue-600/50 font-bold border-2 border-dashed border-blue-600/50 rounded-md">
    Drop Here
  </div>
);

export function ManageStories() {
  const [categoryOption, setCategoryOption] = useState("0");
  const [featuredStories, setFeaturedStories] = useState([]);
  const [search, setSearch] = useState("");
  const [showConfirmModalFor, setShowConfirmModalFor] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let debounce: string | number | NodeJS.Timeout | undefined;
  const debounceSearch = function (callback: () => void) {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      callback();
    }, 500);
  };

  /* API calls */
  const { data, isSuccess: featuredLoadSuccess } = useGet(
    `api/v1/public/categories/${categoryOption}/featured-stories?size=13`
  );
  const { data: searchedNews } = useGet(`api/v1/stories?title=${search}`);
  const { request, isSuccess: featuredSaveSuccess } = usePost(`api/v1/featured/stories/create`);

  const handleAddFeaturedStories = function (news: any) {
    if (!news) return;
    if (featuredStories.length >= 13) {
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
    if (featuredStories.length !== 13) {
      toast.warning("Total featured story must be 13", {
        position: "top-center",
      });
      return;
    }

    const newFeaturedIds = {
      category_id: categoryOption,
      story_ids: featuredStories.map((story) => (story as { id: number }).id),
    };

    request(newFeaturedIds);
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

  useEffect(() => {
    if (featuredLoadSuccess) {
      setFeaturedStories([...data.data] as never);
    }
  }, [data, featuredLoadSuccess]);

  useEffect(() => {
    if (featuredSaveSuccess) {
      toast.success("Featured saved succesfully", {
        position: "top-center",
      });
    }
  }, [featuredSaveSuccess]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="overflow-x-auto flex flex-col h-full">
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
              <div className="col-span-3">
                <TypeAheadSearch
                  label="Type for News"
                  items={searchedNews?.data.filter((sN: any) => !featuredStories.some((fN: any) => fN.id === sN.id))}
                  onSearch={(s) => debounceSearch(() => setSearch(s))}
                  displayValue="title"
                  itemsSelected={(i) => {
                    handleAddFeaturedStories(i);
                  }}
                />
              </div>

              {/* ================== sortable list =============== */}
              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 mb-4 text-gray-900">Featured News</label>
                <div className="grid grid-cols-3 py-4 mb-4 border-b">
                  <p className="grid-col-1">Serial</p>
                  <p className="grid-col-2 text-center">Title</p>
                  <p className="grid-col-3 text-center hidden md:block">Created at</p>
                </div>

                <div className="flex gap-x-2">
                  <div className="flex flex-col">
                    {featuredStories.map((_, index) => (
                      <p className="flex-grow mt-6">{index + 1}</p>
                    ))}
                  </div>
                  <SortableList
                    dropTarget={dropTarget}
                    onSortEnd={onSortEnd}
                    className="flex flex-grow flex-col gap-y-2"
                    draggedItemClassName="dragged"
                  >
                    {featuredStories.map((item, index) => (
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
                    ))}
                  </SortableList>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ================== buttons ================ */}
        <div className="h-10 pt-5 flex items-center justify-end gap-x-6 w-full border-t bg-white border-gray-100 fixed bottom-0 pb-5 right-10">
          <button
            type="button"
            onClick={() => setFeaturedStories(data.data)}
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
