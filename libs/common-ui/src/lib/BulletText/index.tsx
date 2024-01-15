type TSize = 'md';

interface IProps {
  className?: string;
  text?: string;
  size?: TSize;
}

export const BulletText = ({ className = '', text, size = 'md' }: IProps) => {
  const sizeClasses: any = {
    md: {
      text: `font-semibold text-SecondaryBlack text-[16px leading-[18.75px]`,
      image: `h-[8px] w-[8px] mt-1`,
    },
  };
  return (
    <div className={`flex gap-1 ${className}`}>
      <img
        className={`${sizeClasses[size].image}`}
        src={'/images/ellipse-8.png'}
        alt={'ellipse-8'}
      />
      <h3 className={`font-Roboto ${sizeClasses[size].text} tracking-[-.3px]`}>
        {text}
      </h3>
    </div>
  );
};
