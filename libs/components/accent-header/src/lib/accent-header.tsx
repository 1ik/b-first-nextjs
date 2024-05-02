export interface AccentHeaderProps {
  header: string;
  color: string;
}

export function AccentHeader({ header, color }: AccentHeaderProps) {
  return (
    <div style={{ borderColor: color || "#EB1923" }} className="border-b">
      <h3
        style={{ backgroundColor: color || "#EB1923" }}
        className={`inline px-4 py-1 font-montserrat font-bold text-white text-xl`}
      >
        {header}
      </h3>
    </div>
  );
}
