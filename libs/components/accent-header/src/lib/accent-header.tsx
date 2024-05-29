export interface AccentHeaderProps {
  header: string;
  color?: string;
  className?:string
}

export function AccentHeader({ header, color,className }: AccentHeaderProps) {
  return (
    <div style={{ borderColor: color || "#EB1923" }} className={`overflow-hidden border-b mb-4 ${className}`}>
      <h3
        style={{ backgroundColor: color || "#EB1923" }}
        className={`inline px-2 py-2 font-montserrat font-bold text-white text-base uppercase`}
      >
        {header}
      </h3>
    </div>
  );
}
