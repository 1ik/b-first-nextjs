import { useState } from "react";
import { Breadcrumb } from "../../components";
import { useNavigate } from "react-router-dom";
import { token } from "../../token_utils";

export default function AddEdit() {
  const [categoryName, setCategoryName] = useState("");
  const [about, setAboutText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!categoryName) return;

    try {
      const response = await fetch("https://backend.bangladeshfirst.com/api/v1/categories", {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: categoryName,
          metadata: {
            about: about,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create category");
      }
      setCategoryName(""), setAboutText("");
      alert("Category created successfully!");
    } catch (error) {
      console.error("Error creating category:", error);
      alert("Failed to create category. Please try again.");
    }
  };

  return (
    <div className="overflow-x-auto flex flex-col h-full">
      <div className="inline-flex h-10 justify-between items-center px-4 py-2 fixed bg-white z-10 w-[90.5%] border-b">
        <Breadcrumb items={[{ name: "Categories", link: "/categories" }, { name: "Add" }]} />
      </div>

      <form onSubmit={handleSubmit} className="mt-10">
        <div className="overflow-x-auto p-5 h-full w-full flex flex-col">
          {/*content*/}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus:ring-gray-300  sm:max-w-md pl-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Category Name"
                      value={categoryName}
                      onChange={(event) => setCategoryName(event.target.value)}
                    />
                  </div>
                  <p className="mt-2 text-xs leading-6 text-gray-600">
                    Provide a name that is unique within the system
                  </p>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                    value={about}
                    onChange={(event) => setAboutText(event.target.value)}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about this category.</p>
              </div>
            </div>
          </div>
          <div className="h-10 pt-5   flex items-center gap-x-6 w-full">
            <button
              type="button"
              onClick={() => navigate("/categories")}
              className="text-sm font-semibold btn btn-sm  rounded-[5px] bg-white leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button type="submit" className="btn text-black text-white btn-sm rounded-[5px] bg-black btn-accent">
              Save
            </button>
          
          </div>
        </div>
      </form>
    </div>
  );
}
