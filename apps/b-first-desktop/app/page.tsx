import { ItemList } from "@bfirst/components-item-list";
export default async function Index() {
  const data = await getData()
  return (
    <div className="desktop-container">
      <div className="w-[400px]">
        <ItemList data={data.data.slice(0,7)} listType="number" />
      </div>
    </div>
  );
}


const baseUrl = "https://backend.bangladeshfirst.com/api/v1/public";
async function getData() {
  const res = await fetch(`${baseUrl}/latest/stories`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
