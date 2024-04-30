import { ItemCardHorizontal } from "@bfirst/components-itemCardHorizontal";
export default function Index() {
  return (
    <div className="desktop-container">
      <ItemCardHorizontal
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
