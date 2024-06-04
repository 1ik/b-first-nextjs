import { Link } from "react-router-dom";

export default function home() {
  return (
    <div className="m-4 flex gap-x-4">
      <Link to={"/trending-topic"}>
        <button className="bg-black/80 font-medium text-white rounded-sm px-4 py-2 text-base ">Trending Topics</button>
      </Link>
      <Link to={"/recommended-stories"}>
        <button className="bg-black/80 font-medium text-white rounded-sm px-4 py-2 text-base ">
          Recommended Stories
        </button>
      </Link>
    </div>
  );
}
