import { useEffect, useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import { Breadcrumb } from "../../components";
import { token } from "../../token_utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

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




  useEffect(() => {
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

    fetchData();
  }, [categoryOption]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async function () {
      try {
        const response = await fetch(`https://backend.bangladeshfirst.com/api/v1/stories-search?title=${search}`, {
          headers: { Authorization: token },
        });

        if (!response.ok) throw new Error("Could not fetch data");
        const data = await response.json();
        setSearchedNews(data.data);
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
      toast.warning("Can't add, remove first", {
        position: "top-center",
      });
      return;
    }
    setFeaturedStories((cur) => [...cur, { id: news.id, title: news.title }] as never);
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
  };


  const handleRemoveFeaturedStories = function (id: number) {
    toast.info(
      <div>
        <p>Do you want to remove the story?</p>
        <div className="flex gap-5">
          <button onClick={() => handleConfirm(id)}>Yes</button>
          <button onClick={() => toast.dismiss()}>No</button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeButton: false,
        draggable: false,
      }
    );
  };

  const handleConfirm = (id: number) => {
    setFeaturedStories((curr) => curr.filter((item) => (item as { id: number }).id !== id));
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

  return (
    <div className="overflow-x-auto flex flex-col h-full">
      <div className="inline-flex h-10 justify-between items-center px-4 py-2 w-full border-b fixed bg-white z-10">
        <Breadcrumb items={[{ name: "Manage Stories" }]} />
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
                <input type="text" className="w-full rounded-md" value={search} onChange={handleSearch} />
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
                <SortableList
                  dropTarget={dropTarget}
                  onSortEnd={onSortEnd}
                  className="flex flex-col gap-y-2"
                  draggedItemClassName="dragged"
                >
                  {featuredStories.map((item) => (
                    <SortableItem key={(item as { id: number }).id}>
                      <div className="flex justify-between items-center py-3 rounded-md cursor-grab px-2 bg-gray-200">
                        <h3>
                          <span>{(item as { id: number }).id}. </span>
                          {(item as { title: string }).title}
                        </h3>
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
                    </SortableItem>
                  ))}
                </SortableList>
              </div>
            </div>
          </div>

          {/* ================== buttons ================ */}
          <div className="h-10 pt-5 flex items-center justify-end gap-x-6 w-full border-t border-gray-100 fixed bottom-5 right-10">
            <button type="button" onClick={()=> window.location.reload()} className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button type="submit" className="btn btn-sm btn-accent">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
