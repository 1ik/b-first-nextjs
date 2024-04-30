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

      <ItemCardHorizontal
        itemsWidth="w-[392px]"
        itemLeftWidth="w-[230px]"
        itemRightWidth="w-[150px]"
        flexDirection="flex-row-reverse"
        title="US rate setter tells BBC 'no hurry' to cut interest rates"
        titleBorder={true}
      />
    </div>
  );
  return <div className="desktop-container bg-red-500">Index page</div>;
}
