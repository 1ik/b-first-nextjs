/* eslint-disable-next-line */
export interface FooterProps {
  logo: string;
  className?: string;
  Link?: any;
}

const links = [
  {
    name: "Terms of Use",
    href: "/#",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Comments Policy",
    href: "/comments-policy",
  },
  {
    name: "Cookie Settings",
    href: "/#",
  },
  {
    name: "Accessibility & CC",
    href: "/#",
  },
  {
    name: "About",
    href: "/#",
  },
  {
    name: "Newsletters",
    href: "/#",
  },
  {
    name: "Contact",
    href: "/#",
  },
];

export function Footer({ logo, Link, className }: FooterProps) {
  return (
    <div className={`font-montserrat py-20 text-white ${className}`}>
      <div className="flex items-center justify-center">
        {Link ? (
          <Link href="/">
            <img src={logo} alt="Logo" className="mb-14 w-[200px] md:w-[400px]" />
          </Link>
        ) : (
          <a href="/">
            <img src={logo} alt="Logo" className="mb-14 w-[200px] md:w-[400px]" />
          </a>
        )}
      </div>
      <ul className="flex font-semibold items-center justify-center flex-wrap">
        {links.map((link, index) => (
          <li
            key={index}
            className={`relative ${
              links.length !== index + 1
                ? "before:content-[''] before:absolute before:h-2/5 before:w-[2px] before:bg-white dark:before:bg-dark-300  before:right-0 before:top-1/2 before:-translate-y-1/2"
                : ""
            } after:content-[''] after:absolute after:h-[3px]
            after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:bg-white after:w-0 hover:after:w-1/3 after:duration-300`}
          >
            {Link ? (
              <Link className="px-5 py-2 block" href={link.href}>
                {link.name}
              </Link>
            ) : (
              <a className="px-5 py-2 block" href={link.href}>
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ul>
      <hr className="my-10 dark:border-dark-300" />
      <div className="text-center">
        <p>© 2024 Bangladesh First. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
