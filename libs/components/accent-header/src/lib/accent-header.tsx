export interface AccentHeaderProps {
  header: string;
  color: string;
}

export function AccentHeader({ header, color }: AccentHeaderProps) {
  return (
    <div style={{borderColor:color}} className="border-b">
      <h3 style={{backgroundColor:color}} className={`inline px-4 py-1 font-montserrat font-bold text-white text-[22px]`}>
        {header}
      </h3>
    </div>
  );
}
