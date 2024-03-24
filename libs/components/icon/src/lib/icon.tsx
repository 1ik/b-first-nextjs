import { Button } from "@material-tailwind/react";
import React from "react";
import { IconType } from "react-icons";
import { BiSolidTrashAlt } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { HiOutlinePencilSquare } from "react-icons/hi2";

/* eslint-disable-next-line */
export interface IconProps {
  name: "trash" | "pencil" | "home";
  variant?: "filled" | "gradient" | "outlined" | "text";
}

export const Icon = React.forwardRef<HTMLButtonElement, IconProps>(({ name, variant = "outlined" }, ref) => {
  let Icon: IconType;
  switch (name) {
    case "trash":
      Icon = BiSolidTrashAlt;
      break;
    case "pencil":
      Icon = HiOutlinePencilSquare;
      break;
    case "home":
      Icon = HiHome;
      break;
  }

  return (
    <Button variant={variant} className="p-2">
      <Icon style={{ fontSize: "15px", borderRadius: undefined }} />
    </Button>
  );
});
