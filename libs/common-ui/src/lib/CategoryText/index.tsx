import React from 'react';

type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface IProps {
  className?: string;
  category: string;
  size?: TSize;
  color?: 'red' | 'black';
}

export const CategoryText = ({
  className = '',
  category,
  size = 'md',
  color = 'red',
}: IProps) => {
  const sizeClasses = {
    xs: '',
    sm: 'font-semibold text-[13px] leading-[17.5px]',
    md: 'font-semibold text-[16px] leading-[21.5px]',
    lg: '',
    xl: 'font-semibold text-[48px] leading-[65px]',
  };

  const colorClasses: any = {
    red: 'text-SecondaryRed',
    black: 'text-SecondaryBlack',
  };

  return (
    <h5
      className={`uppercase ${sizeClasses[size]} ${colorClasses[color]} font-AvenirNextCondensed pt-1 ${className} tracking-[1.5px]`}
    >
      {category}
    </h5>
  );
};
