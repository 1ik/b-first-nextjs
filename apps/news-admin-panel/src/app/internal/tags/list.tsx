import React, { useEffect, useState } from "react";
import { Breadcrumb, DeleteAction, EditAction } from "../../components";

export default function List() {
  const [tags, setTags] = useState([]);

  const handleDeleteTag = async function (id: number) {
    if (!window.confirm("Do you want to delete the tag ?")) return;
    try {
      const response = await fetch(`https://backend.bangladeshfirst.com/api/v1/tags/${id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer 3|KgHSFiBKye5bfM73JPi5VJDo6wNrHAKsUtys5Dme11e09b6a" },
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
        const response = await fetch("https://backend.bangladeshfirst.com/api/v1/tags", {
          method: "GET",
          headers: { Authorization: "Bearer 3|KgHSFiBKye5bfM73JPi5VJDo6wNrHAKsUtys5Dme11e09b6a" },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTags(data.data);
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
    </div>
  );
}
