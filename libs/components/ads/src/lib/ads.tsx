export interface AdsProps {
  showHeader?: boolean;
  src: any;
  alt: string;
  className?: string;
}
export function Ads({ src, alt, className, showHeader = true }: AdsProps) {
  return (
    <div className={`text-center mt-4 ${className}`}>
      {showHeader && <p className="mb-2">Advertisement</p>}
      <img className="mt-4 mx-auto" src={src} alt={alt} />
    </div>
  );
}
