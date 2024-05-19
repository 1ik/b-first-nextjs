import { useGet, usePost } from "@bfirst/api-client";
import { TypeAheadSearch } from "@bfirst/components-type-ahead-search";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import SortableList, { SortableItem } from "react-easy-sort";
import { Typography } from "@bfirst/material-tailwind";
import moment from "moment";

const dropTarget = (
  <div className="py-3 text-center text-blue-600/50 font-bold border-2 border-dashed border-blue-600/50 rounded-md">
    Drop Here
  </div>
);
export function TrendingTags() {
  const [search, setSearch] = useState("");
  const { data: searchedNews } = useGet(`api/v1/tags?name=${search}`);
  const { data: TrendingTagsList, isSuccess: trendingLoadSuccess } = useGet(`api/v1/public/trendy-topics`);
  const [trendingTopic, setTrendingTopic] = useState([]);
  const [showConfirmModalFor, setShowConfirmModalFor] = useState<number>();
  const { request, isSuccess: featuredSaveSuccess } = usePost(`api/v1/trendy-topic/create`);

  const move = <T,>(array: T[], from: number, to: number): T[] => {
    const newArray: T[] = [...array];
    const item: T = newArray.splice(from, 1)[0];
    newArray.splice(to, 0, item);
    return newArray;
  };

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setTrendingTopic((array: any[]) => move(array, oldIndex, newIndex) as never);
  };

  let debounce: string | number | NodeJS.Timeout | undefined;
  const debounceSearch = function (callback: () => void) {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      callback();
    }, 500);
  };

  const handleAddTrendingTopic = function (news: any) {
    if (!news) return;
    if (trendingTopic.length >= 10) {
      toast.success("Last item removed and new one added", {
        position: "top-center",
      });
      setTrendingTopic((cur) => {
        const newList = cur.slice(0, -1);
        return [{ id: news.id, name: news.name, created_at: news.created_at }, ...newList] as never;
      });
    } else setTrendingTopic((cur) => [{ id: news.id, name: news.name, created_at: news.created_at }, ...cur] as never);
    setSearch("");
  };

  const handleSubmit = async function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTrendingTopicId = {
      tag_ids: trendingTopic.map((story) => (story as { id: number }).id),
    };

    request(newTrendingTopicId);
  };

  const handleConfirm = (id: number) => {
    setTrendingTopic((curr) => curr.filter((item) => (item as { id: number }).id !== id));
    setShowConfirmModalFor(undefined);
    toast.dismiss();
    toast.success("List removed successfully", { position: "top-center" });
  };
  const handleRemoveTrendingTopic = function (id: number) {
    setShowConfirmModalFor(id);
  };

  useEffect(() => {
    if (featuredSaveSuccess) {
      toast.success("Featured saved succesfully", {
        position: "top-center",
      });
    }
  }, [featuredSaveSuccess]);

  useEffect(() => {
    if (trendingLoadSuccess) {
      setTrendingTopic([...TrendingTagsList.data] as never);
    }
  }, [TrendingTagsList, trendingLoadSuccess]);

  return (
    <div className="p-5">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="col-span-3">
          <TypeAheadSearch
            label="Type for Trending Topic"
            items={searchedNews?.data.filter((sN: any) => !trendingTopic.some((fN: any) => fN.id === sN.id))}
            onSearch={(s) => debounceSearch(() => setSearch(s))}
            itemsSelected={(i) => {
              handleAddTrendingTopic(i);
            }}
          />
        </div>
        <div className="col-span-full">
          <label className="block text-lg font-medium leading-6 mb-4 mt-6 text-gray-900">Trending Topic</label>
          <div className="flex border-b justify-between  pr-2 py-4">
            <div className="flex gap-x-6">
              <p>Serial</p>
              <p>Name</p>
            </div>
            <div className="flex justify-between w-48">
              <p>Created at</p>
              <p>Action</p>
            </div>
          </div>

          <div className="flex gap-x-2 mb-5">
            <div className="flex flex-col">
              {trendingTopic.map((_, index) => (
                <p className="flex-grow mt-6">{index + 1}</p>
              ))}
            </div>
            <SortableList
              dropTarget={dropTarget}
              onSortEnd={onSortEnd}
              className="flex flex-grow flex-col gap-y-2"
              draggedItemClassName="dragged"
            >
              {trendingTopic.map((item, index) => (
                <SortableItem key={(item as { id: number }).id}>
                  <div className="flex   justify-between items-center py-3 rounded-md ml-1 cursor-grab px-4 bg-gray-200  relative   max-[340px]:w-[260px] max-[360px]:w-[290px] max-[430px]:w-[330px] max-[530px]:w-[350px] sm:w-full ">
                    <div className="px-5 flex items-center justify-between w-full">
                      <h3>{(item as { name: string }).name}</h3>

                      <Typography variant="small" className="font-normal leading-none opacity-70">
                        {moment((item as { created_at: string }).created_at).format("YYYY-MM-DD hh:mm a")}
                      </Typography>
                    </div>
                    <div className="flex gap-x-4 items-center">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveTrendingTopic((item as { id: number }).id);
                        }}
                        className="btn"
                      >
                        X
                      </button>
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
                  </div>
                </SortableItem>
              ))}
            </SortableList>
          </div>
        </div>

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

export default TrendingTags;
