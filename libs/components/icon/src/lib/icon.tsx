import { Button } from "@material-tailwind/react";
import React from "react";
import { IconType } from "react-icons";
import { BiSolidTrashAlt } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoCreateSharp } from "react-icons/io5";

/* eslint-disable-next-line */
export interface IconProps {
  name: "trash" | "pencil" | "home"|"search"|"create";
  variant?: "filled" | "gradient" | "outlined" | "text";
  size? : number
}

export const Icon = React.forwardRef<HTMLButtonElement, IconProps>(({ name, variant = "outlined" ,size}, ref) => {
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
    case "search":
      Icon = IoIosSearch;
      break;
    case "create":
      Icon = IoCreateSharp;
      break;
  }

  return (
    <Button variant={variant} className="p-2">
      <Icon size={size}  style={{ fontSize: "15px", borderRadius: undefined }} />
    </Button>
  );
});
