type TSize = 'sm' | 'md' | 'lg';
type TOrientation = 'vertical' | 'horizontal';
type TColor = 'black' | 'gray' | 'red';

interface IProps {
  className?: string;
  size?: TSize;
  orientation?: TOrientation;
  color?: TColor;
}

export function Divider({
  className = '',
  size = 'md',
  orientation = 'vertical',
  color = 'black',
}: IProps) {
  const colorClass =
    color === 'red'
      ? 'border-PrimaryRed'
      : color === 'black'
      ? 'border-PrimaryBlack'
      : 'border-PrimaryGery';

  const sizeClass =
    size === 'lg'
      ? 'border-[2px]'
      : size === 'md'
      ? 'border-[1px]'
      : 'border-[.5px]';

  return (
    <hr
      className={`${
        orientation === 'vertical' ? 'h-auto' : 'w-full'
      } ${colorClass} ${sizeClass} mt-1 ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
}

export default Divider;
