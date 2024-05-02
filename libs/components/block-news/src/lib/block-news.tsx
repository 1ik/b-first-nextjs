import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
export interface BlockNewsProps {}

export async function BlockNews(props: BlockNewsProps) {
  const data = await getData();
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {data.data.map((item: any, index: number) => {
          if (index < 1) {
            return (
              <div className="col-span-3" key={index}>
                <AccentHeader header={item.categories[1].name} color="blue" />
                <ItemCardHorizontal data={item} size="lg" showIntro imageSide="right" />
              </div>
            );
          }
          if (index > 1 && index < 8) {
            return (
              <div className="col-span-1" key={index}>
                <ItemCardHorizontal data={item} showTitleBorder size="sm" />;
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

async function getData() {
  const res = await fetch(`${baseUrl}/categories/economy/stories`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const baseUrl = "https://backend.bangladeshfirst.com/api/v1/public";
