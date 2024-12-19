import { Button } from "@material-tailwind/react";
import React from "react";
import { IconType } from "react-icons";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { FaFacebook, FaSquareInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoIosColorPalette, IoIosSearch } from "react-icons/io";
import { IoLogOutSharp, IoSettingsSharp } from "react-icons/io5";
import { MdAdd, MdContentCopy, MdRestore } from "react-icons/md";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

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
    | "leftArrow"
    | "rightArrow"
    | "copy"
    | "linkedin"
    | "facebook"
    | "instagram"
    | "twitter"
    | "close"
    | "tick";
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
      case "leftArrow":
        Icon = RiArrowLeftSLine;
        break;
      case "rightArrow":
        Icon = RiArrowRightSLine;
        break;
      case "copy":
        Icon = MdContentCopy;
        break;
      case "linkedin":
        Icon = FaLinkedin;
        break;
      case "facebook":
        Icon = FaFacebook;
        break;
      case "instagram":
        Icon = FaSquareInstagram;
        break;
      case "twitter":
        Icon = FaSquareXTwitter;
        break;
      case "tick":
        Icon = GiCheckMark;
        break;
      case "close":
        Icon = RiCloseFill;
        break;
    }

    return (
      <Button onClick={onClick} variant={variant} className="p-2">
        <Icon size={size} style={{ fontSize: "15px", borderRadius: undefined }} />
      </Button>
    );
  }
);
