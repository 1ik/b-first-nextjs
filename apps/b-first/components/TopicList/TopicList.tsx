import React from "react";

const demoTopicList = [
  {
    id: 1,
    tag: "Paddy",
  },
  {
    id: 2,
    tag: "Maldives",
  },
  {
    id: 3,
    tag: "Helicopter",
  },
  {
    id: 4,
    tag: "Crash",
  },
  {
    id: 5,
    tag: "Teck",
  },
  {
    id: 6,
    tag: "Cricket",
  },
  {
    id: 7,
    tag: "Bangladesh",
  },
  {
    id: 8,
    tag: "Board",
  },
  {
    id: 9,
    tag: "Football",
  },
];
function TopicList() {
  return (
    <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2 mt-16">
      <div className="flex gap-x-4 items-center">
        <div>
          <p className="font-semibold text-xl bg-red-600 text-white px-4 py-2 rounded-sm inline-block">Trending</p>
        </div>
        <div>
          <ul className="flex gap-x-5 flex-wrap justify-center items-center">
            {demoTopicList.map((item) => (
              <li key={item.id} className="font-normal text-lg text-black/80">
                <a href={`/topic/${item.tag}`}>{item.tag}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopicList;
