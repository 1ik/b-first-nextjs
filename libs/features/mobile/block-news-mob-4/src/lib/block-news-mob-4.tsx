import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { ItemList } from "@bfirst/components-item-list";

/* eslint-disable-next-line */
export interface BlockNewsMob4Props {
  data: any;
  className?: string;
  sectionHeader?: string;
  headerColor?: string;
  Link?: any;
}

export function BlockNewsMob4({ data, className, sectionHeader, headerColor, Link }: BlockNewsMob4Props) {
  return (
    <div className={className}>
      {sectionHeader && <AccentHeader header={sectionHeader} color={headerColor} />}

      <ItemCardVertical
        Link={Link}
        className="border-b dark:border-dark-300 mb-3 mt-3"
        data={data?.[0]}
        size="md"
        titlePosition="inset"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8">
        <div className="sm:col-span-2 border-r dark:border-dark-300 pr-3 mr-3">
          <ItemCardVertical Link={Link} data={data?.[1]} size="lg" />
        </div>
        <ItemList Link={Link} data={data?.slice(2, 7)} listType="circle" />
      </div>
    </div>
  );
}

export default BlockNewsMob4;
