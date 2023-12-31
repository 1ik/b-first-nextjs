import NextImage from 'next/image';

interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export const Image = ({ src, alt, width, height, className }: any) => {
  return (
    <div className={`min-w-full flex w-full ${className}`}>
      <img
        src={src}
        alt={alt ?? ''}
        width={width ?? 360}
        height={height ?? 212}
        style={{ width: '100%' }}
      />
    </div>
  );
};
