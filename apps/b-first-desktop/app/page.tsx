import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
export default async function Index() {
  const data= await getData()
  return (
    <div className="desktop-container">
        <ItemCardVertical data= {data.data[0]} size = "md" showImageBorder = {true} ></ItemCardVertical>
    </div>
  );
}

async function getData() {
  const res = await fetch("https://backend.bangladeshfirst.com/api/v1/public/latest/stories");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
