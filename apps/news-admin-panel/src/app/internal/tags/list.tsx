import React, { useEffect, useState } from "react";
import { Breadcrumb, DeleteAction, EditAction } from "../../components";
import { token } from "../../token_utils";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

export default function List() {
  const [tags, setTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const handleDeleteTag = async function (id: number) {
    if (!window.confirm("Do you want to delete the tag ?")) return;
    try {
      const response = await fetch(`https://backend.bangladeshfirst.com/api/v1/tags/${id}`, {
        method: "DELETE",
        headers: { Authorization: token },
      });
      if (!response.ok) throw new Error("Could not delete the tag");
      setTags(tags.filter((tag) => (tag as { id: number }).id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://backend.bangladeshfirst.com/api/v1/tags?page=${currentPage}&size=20`, {
          method: "GET",
          headers: { Authorization: token },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTags(data.data);
        setTotalPage(data.meta.last_page);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);

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

  const handleNextPage = () => {
    setCurrentPage((curr) => curr + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((curr) => curr - 1);
  };

  return (
    <div className="overflow-x-auto flex flex-col">
      <div className="inline-flex h-10 justify-between items-center px-4 py-2 fixed bg-white z-10 border-b w-full lg:w-[83%] xl:w-[88%]">
        <Breadcrumb items={[{ name: "Tags" }]} />
        <span className="inline-flex gap-2 ">
        <details className="dropdown dropdown-left block md:hidden">
            <summary className="btn btn-xs hover:bg-white h-8"><IoSearchOutline size={15} /></summary>
            <ul className="p-0 m-0 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <input type="text" className="input-sm" placeholder="Search" />
            </ul>
          </details>
          <input type="text" className="input-sm h-6 hidden md:block" placeholder="Search" />
          <Link to="/tags/add" className="btn btn-outline btn-xs h-8 md:h-6">
            Add
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
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag) => (
            <tr key={(tag as { id: number }).id}>
              <td>{(tag as { id: number }).id}</td>
              <td>{(tag as { name: string }).name}</td>
              <td>{dateFormatter((tag as { created_at: string }).created_at)}</td>
              <td>{dateFormatter((tag as { updated_at: string }).updated_at)}</td>
              <td className="flex flex-row justify-end gap-2">
                <button>
                  <EditAction />
                </button>
                <button onClick={() => handleDeleteTag((tag as { id: number }).id)}>
                  <DeleteAction />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="join bg-white grid grid-cols-2 w-[250px] mx-auto bottom-5 fixed  right-1/2 max-[640px]:translate-x-1/2 sm:right-5">
        <button
          className="join-item btn btn-sm rounded-[5px] btn-outline"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          className="join-item btn btn-sm rounded-[5px] btn-outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
