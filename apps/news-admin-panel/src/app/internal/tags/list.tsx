import React, { useEffect, useState } from "react";
import { Breadcrumb, DeleteAction, EditAction } from "../../components";
import { token } from "../../token_utils";

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
      setTags(tags.filter(tag => ((tag as { id: number }).id) !== id));
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
  }, []);

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
    setCurrentPage((curr)=> curr + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((curr)=> curr - 1);
  };

  return (
    <div className="overflow-x-auto flex flex-col">
      <div className="inline-flex h-10 justify-between items-center px-4 py-2 w-full border-b">
        <Breadcrumb items={[{ name: "Tags" }]} />
        <span className="inline-flex gap-2">
          <input type="text" className="input-sm h-6" placeholder="Search" />
          <a href="tags/add" className="btn btn-outline btn-xs">
            Add
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
      <div className="flex justify-between w-1/3 m-auto  mb-10 mt-5 p-2 font-semibold">
          <button className="hover:text-white bg-gray-300 px-2 py-1 rounded w-32" onClick={handlePrevPage} disabled={currentPage === 1}>Previous Page</button>
          <button className="hover:text-white bg-gray-300 px-2 py-1 rounded w-32" onClick={handleNextPage} disabled={currentPage === totalPage}>Next Page</button>
        </div>
    </div>
  );
}