import { useState } from "react";
import { Breadcrumb } from "../../components";
import { useNavigate } from "react-router-dom";

export default function AddEdit() {
  const [tagName, setTagName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!tagName) return;

    try {
      const response = await fetch("https://backend.bangladeshfirst.com/api/v1/tags", {
        method: "POST",
        headers: {
          Authorization: "Bearer 3|KgHSFiBKye5bfM73JPi5VJDo6wNrHAKsUtys5Dme11e09b6a",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: tagName,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create tag");
      }
      setTagName(""), alert("Tag created successfully!");
    } catch (error) {
      console.error("Error creating tag:", error);
      alert("Failed to create tag. Please try again.");
    }
  };
  return (
    <div className="overflow-x-auto flex flex-col h-full">
      <div className="inline-flex h-10 justify-between items-center px-4 py-2 w-full border-b">
        <Breadcrumb items={[{ name: "Tags", link: "/tags" }, { name: "Add" }]} />
      </div>

      <form onSubmit={handleSubmit}>
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
                      placeholder="Tag Name"
                      value={tagName}
                      onChange={(event) => setTagName(event.target.value)}
                    />
                  </div>
                  <p className="mt-2 text-xs leading-6 text-gray-600">
                    Provide a name that is unique within the system
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-10 pt-5 flex items-center justify-end gap-x-6 w-full border-t border-gray-200">
            <button
              type="button"
              onClick={() => navigate("/tags")}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-sm btn-accent">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
