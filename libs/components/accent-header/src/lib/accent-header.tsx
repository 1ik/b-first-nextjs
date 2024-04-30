export interface AccentHeaderProps {
  header : string
}

export function AccentHeader({header}:AccentHeaderProps) {
  return (
    <div className="border-b border-[#00479B]">
      <h3 className="bg-[#00479B] inline px-4 py-1 font-montserrat font-bold text-white text-[22px] border-b border-[#00479B]">
        {header}
      </h3>
    </div>
  );
}
