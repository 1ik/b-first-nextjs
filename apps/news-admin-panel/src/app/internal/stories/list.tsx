import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components";
import { useNavigate } from "react-router";
import { token } from "../../token_utils";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { dateFormatter } from "../../dateFormat_utils";

export default function List() {
  const [stories, setStories] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [searchNews, setSearchNews] = useState([]);
  const [lastSearchTime, setLastSearchTime] = useState(0);
  const [timer, setTimer] = useState<number | undefined>(undefined);

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

  const handleFirstPage = () => {
    setCurrentPage(1);
  };
  const handleNextPage = () => {
    setCurrentPage((curr) => curr + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((curr) => curr - 1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPage);
  };

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const response = await fetch(`https://backend.bangladeshfirst.com/api/v1/stories?title=${searchInput}`, {
          method: "GET",
          headers: { Authorization: token },
        });
        if (!response.ok) {
          throw new Error("Failed to Fetch Data");
        }
        const data = await response.json();
        setSearchNews(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchData();
  }, [searchInput]);

  const debounceDelay = 300;

  const throttledSearch = () => {
    const currentTime = Date.now();
    if (currentTime - lastSearchTime >= debounceDelay) {
      setLastSearchTime(currentTime);
    }
  };
  
  const handlePaste = (event: any) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text/plain");
    setSearchInput(pastedText);
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      throttledSearch();
    }, 100) as unknown as number;
    setTimer(newTimer);
  };

  // const dateFormatter = (dateString: string) => {
  //   const date = new Date(dateString);

  //   const formattedDate = new Intl.DateTimeFormat("en-US", {
  //     month: "short",
  //     day: "numeric",
  //     year: "numeric",
  //     hour: "numeric",
  //     minute: "numeric",
  //     hour12: true,
  //   }).format(date);
  //   return formattedDate.replace(/,/g, "");
  // };

  return (
    <div className="overflow-x-auto flex flex-col">
      <div className="inline-flex h-10 justify-between items-center px-4 py-2 fixed bg-white z-10 border-b w-full lg:w-[83%] xl:w-[88%]">
        <Breadcrumb items={[{ name: "Stories" }]} />
        <span className="inline-flex gap-2">
          <details className="dropdown dropdown-left block md:hidden">
            <summary className="btn btn-xs hover:bg-white h-8">
              <IoSearchOutline size={15} />
            </summary>
            <ul className="p-0 m-0 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <input type="text" className="input-sm" placeholder="Search" />
            </ul>
          </details>

          <input
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            onPaste={handlePaste}
            type="text"
            className="input-sm h-6 hidden md:block"
            placeholder="Search"
          />
          <Link to="/stories/create-story" className="btn btn-outline btn-xs h-8 md:h-6">
            Create Story
          </Link>
        </span>
      </div>
      <table className="table mt-10 mb-28">
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
          {searchInput.length
            ? searchNews.map((story) => (
                <tr key={(story as { id: number }).id}>
                  <td>{(story as { id: number }).id}</td>
                  <td className="cursor-pointer" onClick={() => navigate(`/stories/${(story as { id: number }).id}`)}>
                    {(story as { title: string }).title}
                  </td>
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
              ))
            : stories.map((story) => (
                <tr key={(story as { id: number }).id}>
                  <td>{(story as { id: number }).id}</td>
                  <td className="cursor-pointer" onClick={() => navigate(`/stories/${(story as { id: number }).id}`)}>
                    {(story as { title: string }).title}
                  </td>
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
      <div className="bg-white join flex  fixed bottom-5 right-5 ">
        <button
          className="join-item btn btn-xs sm:btn-sm rounded-[5px] bg-white btn-outline"
          onClick={handleFirstPage}
          disabled={currentPage === 1}
        >
          First Page
        </button>
        <button
          className="join-item btn btn-xs sm:btn-sm rounded-[5px] bg-white btn-outline"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          className="join-item btn btn-xs sm:btn-sm rounded-[5px] bg-white btn-outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPage}
        >
          Next Page
        </button>
        <button
          className="join-item btn btn-xs sm:btn-sm rounded-[5px] bg-white btn-outline"
          onClick={handleLastPage}
          disabled={currentPage === totalPage}
        >
          Last Page
        </button>
      </div>
    </div>
  );
}
