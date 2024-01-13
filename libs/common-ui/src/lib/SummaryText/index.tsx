type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface IProps {
  className?: string;
  text: string;
  size?: TSize;
}

export const CategoryText = ({ className = '', text, size = 'md' }: IProps) => {
  const sizeClasses = {
    xs: '',
    sm: '',
    md: 'font-normal text-[16px] leading-[19px] tracking-[-.5px]',
    lg: '',
    xl: '',
  };

  return (
    <p
      className={`font-HelveticaNeue text-PrimaryBlack ${sizeClasses[size]} ${className}`}
    >
      {text}
    </p>
  );
};
