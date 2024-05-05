/* eslint-disable-next-line */
export interface FooterProps {
  logo: string;
}

const links = [
  {
    name: "Terms of Use",
    href: "/#",
  },
  {
    name: "Privacy Policy",
    href: "/#",
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

export function Footer({ logo }: FooterProps) {
  return (
    <div className="font-montserrat py-20 text-white">
      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo" className="mb-14 w-[400px]" />
      </div>
      <ul className="flex font-semibold items-center justify-center">
        {links.map((link, index) => (
          <li
            key={index}
            className={`relative ${
              links.length !== index + 1
                ? "before:content-[''] before:absolute before:h-2/5 before:w-[2px] before:bg-white before:right-0 before:top-1/2 before:-translate-y-1/2"
                : ""
            } after:content-[''] after:absolute after:h-[3px]
            after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:bg-white after:w-0 hover:after:w-1/3 after:duration-300`}
          >
            <a className="px-5 py-2 block" href={link.href}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <hr className="my-10" />
      <div className="text-center">
        <p>© 2024 Cable News Network. A Warner Bros. Discovery Company. All Rights Reserved.</p>
        <p>CNN Sans ™ & © 2016 Cable News Network</p>
      </div>
    </div>
  );
}

export default Footer;
