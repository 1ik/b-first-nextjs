import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

/* eslint-disable-next-line */
export interface BlockNewsMob3Props {
  data: any;
  className?: string;
  sectionHeader?: string;
  headerColor?: string;
  Link?: any;
}

export function BlockNewsMob3({ className, sectionHeader, headerColor, Link, data }: BlockNewsMob3Props) {
  return (
    <div className={`${className}`}>
      {sectionHeader && <AccentHeader className="mb-4" header={sectionHeader} color={headerColor} />}

      <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
        <div className="sm:col-span-3 border-b-2 mb-2 pb-4 dark:border-dark-300">
          <div className="sm:block hidden">
            <ItemCardHorizontal Link={Link} data={data?.[0]} showIntro size="lg" titleBold />
          </div>
          <div className="sm:hidden">
            <ItemCardVertical Link={Link} className="sm:col-span-3" data={data?.[0]} showIntro size="md" titleFontSize="24px" titleBold/>
          </div>
        </div>

        {data?.splice(1, 3).map((item: any) => {
          return <ItemCardVertical Link={Link} key={item.id} size="md" data={item} titleFontSize="18px"/>;
        })}
      </div>
    </div>
  );
}

export default BlockNewsMob3;
