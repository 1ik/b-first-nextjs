import { Button, Popover, PopoverContent, PopoverHandler, Typography } from "@material-tailwind/react";
import { useState } from "react";

/* eslint-disable-next-line */
export interface ConfirmButtonProps {
  message: string;
  confirmHandler: any;
  onConfirm?: () => void;
  children: any;
}

export function ConfirmButton({ message, onConfirm, confirmHandler, children }: ConfirmButtonProps) {
  const [isOpen, setIsOpen] = useState<undefined | boolean>();

  return (
    <Popover placement="bottom-end" handler={setIsOpen} open={isOpen}>
      <PopoverHandler>
        <button>{confirmHandler}</button>
      </PopoverHandler>
      <PopoverContent className="w-96">
        <Typography variant="h6" color="blue-gray" className="mb-6">
          {message}
        </Typography>
        <div className="flex md:gap-x-8">
          <Button onClick={() => setIsOpen(false)} variant="outlined" className="flex-shrink-0">
            Cancel
          </Button>
          <Button
            onClick={() => {
              onConfirm && onConfirm();
              setIsOpen(false);
            }}
            variant="gradient"
            className="flex-shrink-0"
          >
            {children}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ConfirmButton;
