import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

/* eslint-disable-next-line */
export interface SquareGridProps {
  data: any;
  className?: string;
  showAccentHeader?: boolean;
  Link?: any;
}

export function SquareGrid({ data, Link, className, showAccentHeader = false }: SquareGridProps) {
  return (
    <div className={`grid grid-cols-4 gap-8 ${className}`}>
      {data?.map((item: any, index: any) => (
        <div key={index}>
          {showAccentHeader && (
            <AccentHeader header={item.categories[0].name} color={item.categories[0].color_code} className="mb-[7px]" />
          )}
          <ItemCardVertical Link={Link} data={item} size={"md"} />
        </div>
      ))}
    </div>
  );
}

export default SquareGrid;
