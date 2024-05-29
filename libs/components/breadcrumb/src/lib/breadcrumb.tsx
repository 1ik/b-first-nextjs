import { Fragment } from "react";
import { IoMdHome } from "react-icons/io";
import "../../../../fonts/montserrat/index.css";

interface BreadCrumbProps {
  links: { name: string; href: string }[];
  className?: string;
  Link?: any;
}

export function BreadCrumb({ links, className, Link }: BreadCrumbProps) {
  return (
    <ul className={`text-lg montserrat-regular sm:text-xl md:text-[26px] flex gap-x-1 items-center ${className}`}>
      <li className="montserrat-semibold">
        {Link ? (
          <Link
            className="p-1 hover:text-accent dark:hover:text-accent-light duration-200 flex gap-x-2 items-center"
            href="/"
          >
            <IoMdHome /> <span>BFirst</span>
          </Link>
        ) : (
          <a
            className="p-1 hover:text-accent dark:hover:text-accent-light duration-200 flex gap-x-2 items-center"
            href="/"
          >
            <IoMdHome /> <span>BFirst</span>
          </a>
        )}
      </li>
      {links.map((item, index) => (
        <Fragment key={index}>
          <span className="text-[20px] font-semibold">/</span>
          <li>
            {Link ? (
              <Link
                className="p-1 capitalize hover:text-accent dark:hover:text-accent-light duration-200"
                href={item.href}
              >
                {item.name}
              </Link>
            ) : (
              <a
                className="p-1 capitalize hover:text-accent dark:hover:text-accent-light duration-200"
                href={item.href}
              >
                {item.name}
              </a>
            )}
          </li>
        </Fragment>
      ))}
    </ul>
  );
}
