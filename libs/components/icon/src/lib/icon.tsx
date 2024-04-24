import { Button } from "@material-tailwind/react";
import React from "react";
import { IconType } from "react-icons";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoIosColorPalette, IoIosSearch } from "react-icons/io";
import { IoLogOutSharp, IoSettingsSharp } from "react-icons/io5";
import { MdAdd, MdContentCopy, MdRestore } from "react-icons/md";

/* eslint-disable-next-line */
export interface IconProps {
  name:
    | "trash"
    | "pencil"
    | "home"
    | "restore"
    | "search"
    | "create"
    | "user"
    | "settings"
    | "logout"
    | "theme"
    | "copy";
  variant?: "filled" | "gradient" | "outlined" | "text";
  size?: number;
  onClick?: () => void;
}

export const Icon = React.forwardRef<HTMLButtonElement, IconProps>(
  ({ name, variant = "outlined", size, onClick }, ref) => {
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
      case "theme":
        Icon = IoIosColorPalette;
        break;
      case "copy":
        Icon = MdContentCopy;
        break;
    }

    return (
      <Button onClick={onClick} variant={variant} className="p-2">
        <Icon size={size} style={{ fontSize: "15px", borderRadius: undefined }} />
      </Button>
    );
  }
);
