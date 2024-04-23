import { Input } from "@bfirst/material-tailwind";
import { useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";

const demoTagsList = [
  {
    id: 1,
    name: "cricket",
  },
  {
    id: 2,
    name: "fashion",
  },
  {
    id: 3,
    name: "instagood",
  },
  {
    id: 4,
    name: "news",
  },
  {
    id: 5,
    name: "reels",
  },
  {
    id: 6,
    name: "arival",
  },
  {
    id: 7,
    name: "holyday",
  },
  {
    id: 8,
    name: "summer",
  },
  {
    id: 9,
    name: "nature",
  },
  {
    id: 10,
    name: "artist",
  },
];

const dropTarget = (
  <div className="py-3 text-center text-blue-600/50 font-bold border-2 border-dashed border-blue-600/50 rounded-md">
    Drop Here
  </div>
);
export function TrendingTags() {
  const [data, setData] = useState(demoTagsList);

  const move = <T,>(array: T[], from: number, to: number): T[] => {
    const newArray: T[] = [...array];
    const item: T = newArray.splice(from, 1)[0];
    newArray.splice(to, 0, item);
    return newArray;
  };
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setData((array: any[]) => move(array, oldIndex, newIndex) as never);
  };

  return (
    <div className="my-4 px-4">
      <Input label="Search Trending Topic" type="text" placeholder="Type Trending Tags" />
      <form>
        <div className="col-span-full mt-5">
          <label className="block text-lg font-medium leading-6 mb-4 text-gray-900">Trending Topic</label>
          <div className="grid grid-cols-3 py-4 mb-2 border-b">
            <p className="grid-col-1">Serial</p>
            <p className="grid-col-2 text-center">Title</p>
            <p className="grid-col-3 text-center hidden md:block">Created at</p>
          </div>

          <div className="flex gap-x-2">
            <div className="flex flex-col">
              {data.map((_, index) => (
                <p className="flex-grow mt-6">{index + 1}</p>
              ))}
            </div>
            <SortableList
              dropTarget={dropTarget}
              onSortEnd={onSortEnd}
              className="flex flex-grow flex-col gap-y-2"
              draggedItemClassName="dragged"
            >
              {data.map((item, index) => (
                <SortableItem key={(item as { id: number }).id}>
                  <div className="flex  justify-between items-center py-3 rounded-md cursor-grab px-2 bg-gray-200  relative   max-[340px]:w-[260px] max-[360px]:w-[290px] max-[430px]:w-[330px] max-[530px]:w-[350px]   sm:w-full">
                    <div className="px-5">
                      <h3>{(item as { name: string }).name}</h3>
                    </div>
                    <div className="flex gap-x-4 items-center">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          // handleRemoveFeaturedStories((item as { id: number }).id);
                        }}
                        className="btn"
                      >
                        X
                      </button>
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
