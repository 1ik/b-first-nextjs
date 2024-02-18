import React from "react";
import { Breadcrumb, DeleteAction, EditAction } from "../../components";

export default function List() {
  const categories = [
    {
      id: 1,
      name: "World",
      createdAt: "Feb 18 2024 10:12 AM",
      updatedAt: "Feb 18 2024 10:12 AM",
    },
    {
      id: 2,
      name: "Bangladesh",
      createdAt: "Feb 18 2024 10:12 AM",
      updatedAt: "Feb 18 2024 10:12 AM",
    },
    {
      id: 3,
      name: "Sports",
      createdAt: "Feb 18 2024 10:12 AM",
      updatedAt: "Feb 18 2024 10:12 AM",
    },
    {
      id: 5,
      name: "Economy",
      createdAt: "Feb 18 2024 10:12 AM",
      updatedAt: "Feb 18 2024 10:12 AM",
    },
    {
      id: 6,
      name: "Feature",
      createdAt: "Feb 18 2024 10:12 AM",
      updatedAt: "Feb 18 2024 10:12 AM",
    },
    {
      id: 7,
      name: "Politics",
      createdAt: "Feb 18 2024 10:12 AM",
      updatedAt: "Feb 18 2024 10:12 AM",
    },
    {
      id: 8,
      name: "Education",
      createdAt: "Feb 18 2024 10:12 AM",
      updatedAt: "Feb 18 2024 10:12 AM",
    },
  ];
  return (
    <div className="overflow-x-auto flex flex-col">
      <div className="inline-flex h-10 justify-between items-center px-4 py-2 w-full border-b">
        <Breadcrumb items={[{ name: "Categories" }]} />
        <span className="inline-flex gap-2">
          <input type="text" className="input-sm h-6" placeholder="Search" />
          <a href="categories/add" className="btn btn-outline btn-xs">
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
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.createdAt}</td>
              <td>{category.updatedAt}</td>
              <td className="flex flex-row justify-end gap-2">
                <EditAction />
                <DeleteAction />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
