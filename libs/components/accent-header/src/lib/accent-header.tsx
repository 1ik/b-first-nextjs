export interface AccentHeaderProps {
  header: string;
  color?: string;
  className?: string;
}

export function AccentHeader({ header, color, className }: AccentHeaderProps) {
  return (
    <div style={{ borderColor: color || "#EB1923" }} className={`border-b mb-4 ${className}`}>
      <h3
        style={{ backgroundColor: color || "#EB1923" }}
        className={`inline px-2 py-1 montserrat-bold text-white text-base uppercase`}
      >
        {header}
      </h3>
    </div>
  );
}
