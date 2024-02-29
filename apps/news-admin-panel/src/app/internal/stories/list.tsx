import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components";
import { useNavigate } from "react-router";

export default function List() {
  const [stories, setStories] = useState([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://backend.bangladeshfirst.com/api/v1/stories?page=${currentPage}&size=20`, {
          method: "GET",
          headers: { Authorization: "Bearer 3|KgHSFiBKye5bfM73JPi5VJDo6wNrHAKsUtys5Dme11e09b6a" },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setStories(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);

  const navigate = useNavigate();

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const dateFormatter = (dateString: string) => {
    const date = new Date(dateString);

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
    return formattedDate.replace(/,/g, "");
  };

  return (
    <div className="overflow-x-auto flex flex-col">
      <div className="inline-flex h-10 justify-between items-center px-4 py-2 w-full border-b">
        <Breadcrumb items={[{ name: "Stories" }]} />
        <span className="inline-flex gap-2">
          <input type="text" className="input-sm h-6" placeholder="Search" />
          <a href="stories/create-story" className="btn btn-outline btn-xs">
            Create Story
          </a>
        </span>
      </div>
      <table className="table">
        <thead className="sticky">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Created At</th>
            <th>Updated At</th>
            {/* <th className="text-right">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {stories.map((story) => (
            <tr key={(story as { id: number }).id}>
              <td>{(story as { id: number }).id}</td>
              <td className="cursor-pointer" onClick = {()=> navigate(`/stories/${(story as { id: number }).id}`)}>{(story as { title: string }).title}</td>
              <td>{dateFormatter((story as { created_at: string }).created_at)}</td>
              <td>{dateFormatter((story as { updated_at: string }).updated_at)}</td>
              {/* <td className="flex flex-row justify-end gap-2">
                <button>
                  <EditAction />
                </button>
                <button>
                  <DeleteAction />
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between w-1/3 m-auto bg-gray-300 mb-10 mt-5 p-2 rounded font-semibold">
          <button className="hover:text-white" onClick={handlePrevPage} disabled={currentPage === 1}>Previous Page</button>
          <button className="hover:text-white" onClick={handleNextPage}>Next Page</button>
        </div>
    </div>
  );
}
