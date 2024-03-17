import { IoHome } from "react-icons/io5";
import { HiMiniChevronRight, HiPhoto } from "react-icons/hi2";
import { BiUserCircle } from "react-icons/bi";

export interface IconProps {
  name: "home" | "photo" | "userCircle" | "right";
}
export const Icon = (props: IconProps) => {
  let iconcomp: any;
  switch (props.name) {
    case "home":
      iconcomp = <IoHome />;
      break;
    case "photo":
      iconcomp = <HiPhoto />;
      break;
    case "userCircle":
      iconcomp = <BiUserCircle />;
    case "right":
      iconcomp = <HiMiniChevronRight />;
      break;
  }
  return iconcomp;
};
