import React from 'react';

type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface IProps {
  className?: string;
  title: string;
  size?: TSize;
}

export const TitleText = ({ className = '', title, size = 'md' }: IProps) => {
  const sizeClasses = {
    xs: 'font-black text-[18px] leading-[23px] tracking-[-.3px]',
    sm: 'font-black text-[21px] leading-[26px] tracking-[-.3px]',
    md: 'font-black text-[28px] leading-[35px] tracking-[-.3px]',
    lg: 'font-black text-[33px] leading-[40px] tracking-[-.3px]',
    xl: 'font-black text-[33px] leading-[46px] tracking-[-.3px]',
  };

  return (
    <h1
      className={`${className} ${sizeClasses[size]} font-Merriweather text-SecondaryBlack`}
    >
      {title}
    </h1>
  );
};