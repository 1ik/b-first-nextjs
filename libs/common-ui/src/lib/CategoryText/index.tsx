import React from 'react';

type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface IProps {
  className: string;
  category: string;
  size: TSize;
}

export const CategoryText = ({
  className = '',
  category,
  size = 'md',
}: IProps) => {
  const sizeClasses = {
    xs: '',
    sm: 'font-semibold text-[13px] leading-[17.5px]',
    md: 'font-semibold text-[16px] leading-[21.5px]',
    lg: '',
    xl: 'font-semibold text-[48px] leading-[65px]',
  };

  return (
    <h5
      className={`uppercase ${sizeClasses[size]} text-SecondaryRed font-AvenirNextCondensed pt-1 ${className}`}
    >
      {category}
    </h5>
  );
};
