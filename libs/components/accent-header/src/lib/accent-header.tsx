export interface AccentHeaderProps {
  header: string;
  color: string;
}

export function AccentHeader({ header, color }: AccentHeaderProps) {
  return (
    <div className={`border-b border-[${color}]`}>
      <h3 className={`bg-[${color}] inline px-4 py-1 font-montserrat font-bold text-white text-[22px]`}>
        {header}
      </h3>
    </div>
  );
}
