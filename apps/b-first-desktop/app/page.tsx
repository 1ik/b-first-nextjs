import { ItemCardHorizontal } from "@bfirst/components-itemCardHorizontal";
export default function Index() {
  return (
    <div className="desktop-container">
      <ItemCardHorizontal
        src="https://images.bangladeshfirst.com/resize?width=1600&height=900&format=webp&quality=85&path=mediaImages/2024-Apr-30_66308f2115ef0_1714458401.jpg"
        alt="test img"
        itemsWidth="w-[1340px]"
        itemLeftWidth="w-[420px]"
        itemRightWidth="w-[880px]"
        title="Volkswagen workers vote to unionize in major win for organised labour"
        titleBorder={false}
        description="Volkswagen workers in the US have voted to join the United Autoworkers Union (UAW) in a massive victory for
            organised labour in the US."
      />
    </div>
  );
  return <div className="desktop-container bg-red-500">Index page</div>;
}
