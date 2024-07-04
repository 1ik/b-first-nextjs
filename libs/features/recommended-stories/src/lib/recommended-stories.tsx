import { useGet, usePost } from "@bfirst/api-client";
import { TypeAheadSearch } from "@bfirst/components-type-ahead-search";
import moment from "moment";
import { useEffect, useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import { ToastContainer, toast } from "react-toastify";

const dropTarget = (
  <div className="py-3 text-center text-blue-600/50 font-bold border-2 border-dashed border-blue-600/50 rounded-md">
    Drop Here
  </div>
);

/* eslint-disable-next-line */
export interface RecommendedStoriesProps {}

export function RecommendedStories(props: RecommendedStoriesProps) {
  //  STATES
  const [search, setSearch] = useState("");
  const [recommendedStories, setRecommendedStories] = useState([]);
  const [showConfirmModalFor, setShowConfirmModalFor] = useState<number>();

  // API CALLS
  const { data: recommendedStoriesList, isSuccess: recommendedStoriesLoadSuccess } = useGet(
    `api/v1/public/recommended-stories`
  );
  const { data: searchedNews } = useGet(`api/v1/stories?title=${search}`);
  const { request, isSuccess: saveSuccess } = usePost(`api/v1/recommended-stories/create`);

  // HANDLER FUNCTIONS
  const move = <T,>(array: T[], from: number, to: number): T[] => {
    const newArray: T[] = [...array];
    const item: T = newArray.splice(from, 1)[0];
    newArray.splice(to, 0, item);
    return newArray;
  };

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setRecommendedStories((array: any[]) => move(array, oldIndex, newIndex) as never);
  };

  let debounce: string | number | NodeJS.Timeout | undefined;
  const debounceSearch = function (callback: () => void) {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      callback();
    }, 500);
  };

  const handleAddRecommendedStories = function (news: any) {
    if (!news) return;
    setRecommendedStories((cur) => [{ id: news.id, title: news.title, created_at: news.created_at }, ...cur] as never);
    toast.success("New item added", {
      position: "top-center",
    });
    setSearch("");
  };

  const handleSubmit = async function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (recommendedStories.length < 4) {
      toast.warning("Total recommended story minimum be 4", {
        position: "top-center",
      });
      return;
    }

    const newRecommendedStoriesId = {
      story_ids: recommendedStories.map((story) => (story as { id: number }).id),
    };

    request(newRecommendedStoriesId);
  };

  const handleConfirm = (id: number) => {
    setRecommendedStories((curr) => curr.filter((item) => (item as { id: number }).id !== id));
    setShowConfirmModalFor(undefined);
    toast.dismiss();
    toast.success("List removed successfully", { position: "top-center" });
  };
  const handleRemove = function (id: number) {
    setShowConfirmModalFor(id);
  };

  // EFFECT HOOKS
  useEffect(() => {
    if (saveSuccess) {
      toast.success("Recommended stories list saved succesfully", {
        position: "top-center",
      });
    }
  }, [saveSuccess]);

  useEffect(() => {
    if (recommendedStoriesLoadSuccess) {
      setRecommendedStories([...recommendedStoriesList.data] as never);
    }
  }, [recommendedStoriesList, recommendedStoriesLoadSuccess]);

  return (
    <div className="p-5">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="col-span-3">
          <TypeAheadSearch
            displayValue="title"
            label="Type for news"
            items={searchedNews?.data.filter((sN: any) => !recommendedStories.some((fN: any) => fN.id === sN.id))}
            onSearch={(s) => debounceSearch(() => setSearch(s))}
            itemsSelected={(i) => {
              handleAddRecommendedStories(i);
            }}
          />
        </div>
        <div className="col-span-full">
          <div className="col-span-full">
            <label className="block text-lg font-medium leading-6 my-4 text-gray-900">Recommended Stories</label>
            <div className="grid grid-cols-3 py-4 mb-4 border-b">
              <p className="grid-col-1">Serial</p>
              <p className="grid-col-2 text-center">Title</p>
              <p className="grid-col-3 text-center hidden md:block">Created at</p>
            </div>

            <div className="flex gap-x-2">
              <div className="flex flex-col">
                {recommendedStories.map((_, index) => (
                  <p className="flex-grow mt-6">{index + 1}</p>
                ))}
              </div>
              <SortableList
                dropTarget={dropTarget}
                onSortEnd={onSortEnd}
                className="flex flex-grow flex-col gap-y-2"
                draggedItemClassName="dragged"
              >
                {recommendedStories.map((item, index) => (
                  <SortableItem key={(item as { id: number }).id}>
                    <div className="flex  justify-between items-center py-3 rounded-md cursor-grab px-2 bg-gray-200  relative   max-[340px]:w-[260px] max-[360px]:w-[290px] max-[430px]:w-[330px] max-[530px]:w-[350px]   sm:w-full">
                      <div className="px-5">
                        <h3 className="">{(item as { title: string }).title}</h3>
                        <p className="md:hidden  mt-4">
                          {moment((item as { created_at: string }).created_at).format("YYYY-MM-DD hh:mm a")}
                        </p>
                      </div>
                      <div className="flex gap-x-4 items-center">
                        <p className="hidden md:block">
                          {moment((item as { created_at: string }).created_at).format("YYYY-MM-DD hh:mm a")}
                        </p>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleRemove((item as { id: number }).id);
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

        <div className="h-10 pt-5 flex items-center justify-end gap-x-6 w-full border-t bg-white border-gray-100 fixed bottom-0 pb-5 right-10">
          <button
            type="button"
            onClick={() => setRecommendedStories(recommendedStoriesList.data)}
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

export default RecommendedStories;
