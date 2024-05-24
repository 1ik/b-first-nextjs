import { Fragment } from "react";

interface BreadCrumbProps {
  links: { name: string; href: string }[];
  className?: string;
  Link?: any;
}

export function BreadCrumb({ links, className, Link }: BreadCrumbProps) {
  return (
    <ul className={`font-montserrat text-lg sm:text-xl md:text-[26px] flex gap-x-1 items-center ${className}`}>
      <li className="font-semibold flex items-center">
        <span className="md:w-14 md:h-2 w-8 h-1 bg-accent block"></span>
        {Link ? (
          <Link className="p-1 hover:text-accent dark:hover:text-accent-light duration-200" href="/">
            B1st
          </Link>
        ) : (
          <a className="p-1 hover:text-accent dark:hover:text-accent-light duration-200" href="/">
            B1st
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
