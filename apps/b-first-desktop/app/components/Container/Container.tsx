import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={`max-w-[1820px] px-[10px] mx-auto ${className}`}>{children}</div>;
}
