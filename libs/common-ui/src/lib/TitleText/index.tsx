import React from 'react';

type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface IProps {
  className?: string;
  title: string;
  size?: TSize;
}

export const CategoryText = ({
  className = '',
  title,
  size = 'md',
}: IProps) => {
  const sizeClasses = {
    xs: 'font-black text-[18px] leading-[23px] tracking-[-.3px]',
    sm: 'font-black text-[22px] leading-[26px] tracking-[-.3px]',
    md: 'font-black text-[28px] leading-[35px] tracking-[-.3px]',
    lg: 'font-black text-[33px] leading-[40px] tracking-[-.3px]',
    xl: 'font-black text-[33px] leading-[46px] tracking-[-.3px]',
  };

  return (
    <h1
      className={`font-Merriweather text-SecondaryBlack ${sizeClasses[size]} ${className}`}
    >
      {title}
    </h1>
  );
};
