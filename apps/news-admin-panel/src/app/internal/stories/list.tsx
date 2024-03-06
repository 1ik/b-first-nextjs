import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components";
import { useNavigate } from "react-router";
import { token } from "../../token_utils";
import { Link } from "react-router-dom";

export default function List() {
  const [stories, setStories] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://backend.bangladeshfirst.com/api/v1/stories?page=${currentPage}&size=20`, {
          method: "GET",
          headers: { Authorization: token },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setStories(data.data);
        setTotalPage(data.meta.last_page);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);

  const navigate = useNavigate();

  const handleNextPage = () => {
    setCurrentPage((curr)=> curr + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((curr)=> curr - 1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPage);
  }

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
      <div className="inline-flex h-10 justify-between items-center px-4 py-2 fixed bg-white z-10 w-[90.5%] border-b">
        <Breadcrumb items={[{ name: "Stories" }]} />
        <span className="inline-flex gap-2">
          <input type="text" className="input-sm h-6" placeholder="Search" />
          <Link to="/stories/create-story" className="btn btn-outline btn-xs">
            Create Story
          </Link>
        </span>
      </div>
      <table className="table mt-10">
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
      <div className="join flex w-[400px] fixed bottom-5 -right-20">
          <button className="join-item btn btn-sm rounded-[5px] bg-white btn-outline" onClick={handlePrevPage} disabled={currentPage === 1}>Previous Page</button>
          <button className="join-item btn btn-sm rounded-[5px] bg-white btn-outline" onClick={handleNextPage} disabled={currentPage === totalPage}>Next Page</button>
          <button className="join-item btn btn-sm rounded-[5px] bg-white btn-outline" onClick={handleLastPage} disabled={currentPage === totalPage}>Last Page</button>
          
        </div>
    </div>
  );
}
