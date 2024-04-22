import React from "react";

function TopicItem({tagName}:any) {
  return (
    <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2 pt-12 pb-6">
      <p>{tagName}</p>
    </div>
  );
}

export default TopicItem;
