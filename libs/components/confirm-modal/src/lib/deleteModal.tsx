import { Icon } from "@bfirst/components-icon";
import { Button, Popover, PopoverContent, PopoverHandler, Typography } from "@bfirst/material-tailwind";
import { useState } from "react";

interface DeleteModalProps {
  itemName: string;
  onClick?: () => void;
}

export function DeleteModal({ onClick, itemName }: DeleteModalProps) {
  const [open, setOpen] = useState<boolean | undefined>();
  return (
    <Popover placement="left" open={open} handler={setOpen}>
      <PopoverHandler>
        <button onClick={()=>setOpen(true)}>
          <Icon name="trash" />
        </button>
      </PopoverHandler>
      <PopoverContent className="w-96">
        <Typography variant="h6" color="blue-gray" className="mb-6 text-center">
          `Do you want to remove the {itemName} ?
        </Typography>
        <div className="flex gap-8 justify-center">
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="gradient"
            onClick={() => {
              onClick && onClick();
              setOpen(false);
            }}
          >
            Delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
