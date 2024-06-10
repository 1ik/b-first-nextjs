import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { ItemList } from "@bfirst/components-item-list";

/* eslint-disable-next-line */
export interface BlockNewsMob4Props {
  data: any;
  className?: string;
  sectionHeader?: string;
  headerColor?: string;
}

export function BlockNewsMob4({ data, className, sectionHeader, headerColor }: BlockNewsMob4Props) {
  return (
    <div className={className}>
      {sectionHeader && <AccentHeader header={sectionHeader} color={headerColor} />}

      <div className="hidden sm:block">
        <ItemCardVertical
          className="border-b dark:border-dark-300 my-3"
          data={data?.[0]}
          size="lg"
          titlePosition="inset"
          titleBold
        />
      </div>
      <div className="sm:hidden">
        <ItemCardVertical
          className="border-b dark:border-dark-300 my-3 pb-3"
          data={data?.[0]}
          size="lg"
          titleFontSize="30px"
          titleBold
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 mt-4">
        <div className="sm:col-span-2 sm:border-r dark:border-dark-300 sm:pr-3 sm:mr-3">
          <div className="sm:hidden">
            <ItemCardVertical data={data?.[1]} size="md" />
          </div>
          <div className="sm:block hidden">
            <ItemCardVertical data={data?.[1]} size="md" showIntro />
          </div>
        </div>
        <ItemList data={data?.slice(2, 7)} listType="circle" titleFontSize="16px" />
      </div>
    </div>
  );
}

export default BlockNewsMob4;
