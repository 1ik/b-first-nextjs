import React from "react";


function TopicList({items}:any) {
  console.log(items);
  

  return (
    <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2 mt-16">
      <div className="flex gap-x-4 items-center">
        <div>
          <p className="font-semibold text-xl bg-red-600 text-white px-4 py-2 rounded-sm inline-block">Trending</p>
        </div>
        <div>
          <ul className="flex flex-wrap gap-x-4  items-center">
            {items.map((item:any) => (
              <li key={item.id} className="font-normal text-sm text-black/80 ">
                <a href={`/topic/${item.name}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopicList;
