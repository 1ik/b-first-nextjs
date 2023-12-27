import Image from 'next/image';

interface UIImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export const UIImage = ({ src, alt, width, height, className }: any) => {
  return (
    <div className={`min-w-full flex w-full ${className}`}>
      <Image
        src={src}
        alt={alt ?? ''}
        width={width ?? 360}
        height={height ?? 212}
        style={{ width: '100%' }}
      />
    </div>
  );
};
