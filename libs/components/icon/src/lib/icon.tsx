import { Button } from "@material-tailwind/react";
import React from "react";
import { IconType } from "react-icons";
import { BiSolidTrashAlt } from "react-icons/bi";
import { HiOutlinePencilSquare } from "react-icons/hi2";

/* eslint-disable-next-line */
export interface IconProps {
  name: "trash" | "pencil";
}

export const Icon = React.forwardRef<HTMLButtonElement, IconProps>(({ name }, ref) => {
  let Icon: IconType;
  switch (name) {
    case "trash":
      Icon = BiSolidTrashAlt;
      break;
    case "pencil":
      Icon = HiOutlinePencilSquare;
      break;
  }

  return (
    <Button variant="outlined" className="p-2">
      <Icon style={{ fontSize: "15px", borderRadius: undefined }} />
    </Button>
  );
});