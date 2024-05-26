import { Fragment } from "react";

interface BreadCrumbProps {
  links: { name: string; href: string }[];
  className?: string;
}

export default function BreadCrumb({ links, className }: BreadCrumbProps) {
  return (
    <ul className={`font-montserrat text-[26px] flex gap-x-1 items-center ${className}`}>
      <li className="font-semibold flex items-center">
        <span className="w-14 h-2 bg-accent block"></span>
        <a className="p-1 hover:text-accent dark:hover:text-accent-light duration-200" href="/">
          B1st
        </a>
      </li>
      {links.map((item, index) => (
        <Fragment key={index}>
          <span className="text-[20px] font-semibold">/</span>
          <li>
            <a className="p-1 capitalize hover:text-accent dark:hover:text-accent-light duration-200" href={item.href}>
              {item.name}
            </a>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}
