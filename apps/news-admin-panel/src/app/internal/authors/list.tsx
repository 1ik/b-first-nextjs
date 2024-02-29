import { useEffect, useState } from "react";
import { Breadcrumb, DeleteAction, EditAction } from "../../components";

export default function List() {
  const [authors, setAuthors] = useState([]);

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

  const handleDeleteAuthor = async function (id: number) {
    if (!window.confirm("Do you want to delete the author ?")) return;
    try {
      const response = await fetch(`https://backend.bangladeshfirst.com/api/v1/authors/${id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer 3|KgHSFiBKye5bfM73JPi5VJDo6wNrHAKsUtys5Dme11e09b6a" },
      });
      if (!response.ok) throw new Error("Could not delete the author");
      setAuthors((curr) => curr.filter((author) => (author as { id: number }).id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await fetch("https://backend.bangladeshfirst.com/api/v1/authors", {
          method: "GET",
          headers: { Authorization: "Bearer 3|KgHSFiBKye5bfM73JPi5VJDo6wNrHAKsUtys5Dme11e09b6a" },
        });

        if (!response.ok) throw new Error("Could not get authors list");

        const data = await response.json();
        setAuthors(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto flex flex-col">
      <div className="inline-flex h-10 justify-between items-center px-4 py-2 w-full border-b">
        <Breadcrumb items={[{ name: "Authors" }]} />
        <span className="inline-flex gap-2">
          <input type="text" className="input-sm h-6" placeholder="Search" />
          <a href="authors/add" className="btn btn-outline btn-xs">
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
          {authors.map((author) => (
            <tr key={(author as { id: number }).id}>
              <td>{(author as { id: number }).id}</td>
              <td>{(author as { name: string }).name}</td>
              <td>{dateFormatter((author as { created_at: string }).created_at)}</td>
              <td>{dateFormatter((author as { updated_at: string }).updated_at)}</td>
              <td className="flex flex-row justify-end gap-2">
                <button>
                  <EditAction />
                </button>
                <button onClick={() => handleDeleteAuthor((author as { id: number }).id)}>
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
