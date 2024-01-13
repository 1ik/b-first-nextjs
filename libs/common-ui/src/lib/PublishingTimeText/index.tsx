type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface IProps {
  className?: string;
  text: string;
  size?: TSize;
}

export const PublishingTimeText = ({
  className = '',
  text,
  size = 'md',
}: IProps) => {
  const sizeClasses = {
    xs: '',
    sm: '',
    md: 'font-normal text-[14px] leading-[16.5px] tracking-[-.3px]',
    lg: '',
    xl: '',
  };

  return (
    <span
      className={`font-HelveticaNeue text-BlackL3 ${sizeClasses[size]} ${className}`}
    >
      {text}
    </span>
  );
};
