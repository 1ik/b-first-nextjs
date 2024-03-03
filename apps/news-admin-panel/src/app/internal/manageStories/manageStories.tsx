import arrayMove from "array-move";
import { useEffect, useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import { Breadcrumb } from "../../components";
import { token } from "../../token_utils";

const dropTarget = (
  <div className="py-3 text-center text-blue-600/50 font-bold border-2 border-dashed border-blue-600/50 rounded-md">
    Drop Here
  </div>
);

export default function ManageStories() {
  const [categoryOption, setCategoryOption] = useState("0");
  const [featuredStories, setFeaturedStories] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedNews, setSearchedNews] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await fetch(
          `https://backend.bangladeshfirst.com/api/v1/categories/${categoryOption}/featured-stories`,
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
    setFeaturedStories((cur) => [...cur, { id: news.id, title: news.title }] as never);
    setSearch("");
  };

  const handleSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      category_id: categoryOption,
      story_ids: featuredStories.map((story) => (story as { id: number }).id),
    };

    console.log(data);
  };

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setFeaturedStories((array: any[]) => arrayMove(array, oldIndex, newIndex) as never);
  };

  return (
    <div className="overflow-x-auto flex flex-col h-full">
      <div className="inline-flex h-10 justify-between items-center px-4 py-2 w-full border-b">
        <Breadcrumb items={[{ name: "Manage Stories" }]} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="overflow-x-auto mb-5 p-5 h-full w-full flex flex-col">
          {/*=============content=================*/}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">Feature Category</label>
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
                  onChange={(e) => setSearch(e.target.value)}
                />
                {searchedNews.length ? (
                  <div className="flex flex-col h-[50vh] overflow-y-auto gap-y-2 mt-1 w-full bg-white">
                    {searchedNews.map((news) => (
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
                    ))}
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
                      <div className="py-3 rounded-md cursor-grab px-2 bg-gray-200">
                        <h3>
                          <span>{(item as { id: number }).id}. </span>
                          {(item as { title: string }).title}
                        </h3>
                      </div>
                    </SortableItem>
                  ))}
                </SortableList>
              </div>
            </div>
          </div>

          {/* ================== buttons ================ */}
          <div className="h-10 pt-5 flex items-center justify-end gap-x-6 w-full border-t border-gray-100">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
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
