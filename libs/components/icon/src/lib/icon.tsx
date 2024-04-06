import { Button } from "@material-tailwind/react";
import React from "react";
import { IconType } from "react-icons";
import { BiSolidTrashAlt } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { MdAdd, MdRestore } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";

/* eslint-disable-next-line */
export interface IconProps {
  name: "trash" | "pencil" | "home" | "restore" | "search" | "create"|"user"|"settings"| "logout"|"theam";
  variant?: "filled" | "gradient" | "outlined" | "text";
  size?: number;
}

export const Icon = React.forwardRef<HTMLButtonElement, IconProps>(({ name, variant = "outlined", size }, ref) => {
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
    case "restore":
      Icon = MdRestore;
      break;
    case "search":
      Icon = IoIosSearch;
      break;
    case "create":
      Icon = MdAdd;
      break;
    case "user":
      Icon = FaUserCircle;
      break;
    case "settings":
      Icon = IoSettingsSharp;
      break;
    case "logout":
      Icon = IoLogOutSharp;
      break;
    case "theam":
      Icon = IoIosColorPalette;
      break;
  }

  return (
    <Button variant={variant} className="p-2">
      <Icon size={size} style={{ fontSize: "15px", borderRadius: undefined }} />
    </Button>
  );
});
