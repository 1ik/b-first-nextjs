import { Icon } from "./icons";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  items: { name: string; icon?: any; link?: string }[];
}

export function Breadcrumb(props: BreadcrumbProps) {
  const menuItems = [
    {
      name: "Home",
      icon: <Icon name={"home"} />,
      link: "/",
      classNames: "text-sm font-semibold",
    },
  ];

  props.items.forEach((item) => {
    menuItems.push({
      name: item.name,
      icon: item.icon,
      link: item.link || "",
      classNames: "text-sm font-semibold" + (item.link ? " text-accent" : " text-gray-500"),
    });
  });

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {menuItems.map((item, index) => {
          return (
            <span key={index + item.name}>
              <li>
                <Link to={item.link} className="inline-flex gap-2 items-center">
                  {item.icon}
                  <span className={item.classNames}>{item.name}</span>
                  {index < menuItems.length - 1 && (
                    <span className="mr-2">
                      <Icon name="right" />
                    </span>
                  )}
                </Link>
              </li>
            </span>
          );
        })}
      </ul>
    </div>
  );
}
