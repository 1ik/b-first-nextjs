export interface AdsProps {
  showHeader?: boolean;
  src: any;
  alt: string;
  className?: string;
}
export function Ads({ src, alt, className, showHeader = false }: AdsProps) {
  return (
    <div className={`text-center ${className}`}>
      {showHeader && <p className="mb-2 text-[10px] montserrat-regular">Advertisement</p>}
      <img className="mx-auto" src={src} alt={alt} />
    </div>
  );
}
