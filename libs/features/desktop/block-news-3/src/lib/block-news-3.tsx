import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

export interface BlockNews3Props {
  data: any;
  sectionHeader?: string;
  headerColor?: string;
  className?: string;
  Link?: any;
}

export function BlockNews3({ data, Link, sectionHeader, headerColor, className }: BlockNews3Props) {
  return (
    <div className={`${className}`}>
      {sectionHeader && <AccentHeader className="mb-4" header={sectionHeader} color={headerColor} />}

      <div className="grid grid-cols-3 gap-5">
        <ItemCardHorizontal
          Link={Link}
          className="col-span-3"
          data={data?.[0]}
          showIntro
          introFontSize="14px"
          titleBold
          titleFontSize="30px"
        />

        {data?.splice(1, 3).map((item: any) => {
          return <ItemCardVertical Link={Link} key={item.id} size="md" data={item} titleFontSize="16px" />;
        })}
      </div>
    </div>
  );
}
