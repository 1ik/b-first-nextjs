import { Fragment } from "react";
import { IoMdHome } from "react-icons/io";
import "../../../../fonts/montserrat/index.css";

interface BreadCrumbProps {
  links: { name: string; href: string }[];
  className?: string;
}

export function BreadCrumb({ links, className }: BreadCrumbProps) {
  return (
    <ul className={`text-base montserrat-regular sm:text-lg md:text-[22px] flex gap-x-1 items-center ${className}`}>
      <li className="montserrat-semibold">
        <a
          className="p-1 hover:text-accent dark:hover:text-accent-light duration-200 flex gap-x-2 items-center"
          href="/"
        >
          <IoMdHome /> <span>BFirst</span>
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
