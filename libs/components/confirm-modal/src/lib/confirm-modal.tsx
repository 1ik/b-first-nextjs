import { Icon } from "@bfirst/components-icon";
import { Button, Input, Popover, PopoverContent, PopoverHandler, Typography } from "@bfirst/material-tailwind";
import { useState } from "react";

/* eslint-disable-next-line */
export interface ConfirmModalProps {
  type: "delete" | "update";
  message: string;
  handleAction: (input?: any) => void;
  initialValue?: string;
}

export function ConfirmModal({ type, message, handleAction, initialValue }: ConfirmModalProps) {
  const [isOpen, setIsOpen] = useState<undefined | boolean>();
  const [updateInput, setUpdateInput] = useState(initialValue);

  const handleSubmit = function (e: React.FormEvent) {
    e.preventDefault();
    handleAction(updateInput);
    setIsOpen(false);
  };

  return (
    <Popover placement="bottom" handler={setIsOpen} open={isOpen}>
      <PopoverHandler>
        <button>
          {type === "delete" && <Icon name="trash" />}
          {type === "update" && <Icon name="pencil" />}
        </button>
      </PopoverHandler>
      <PopoverContent className="w-96">
        <Typography variant="h6" color="blue-gray" className="mb-6">
          {message}
        </Typography>
        {type === "update" && (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={updateInput}
              onChange={(e) => setUpdateInput(e.target.value)}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Button type="submit" variant="gradient" className="flex-shrink-0">
              Save
            </Button>
          </form>
        )}
        {type === "delete" && (
          <div className="flex gap-x-6">
            <Button onClick={() => setIsOpen(false)} variant="outlined" className="flex-shrink-0">
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleAction();
                setIsOpen(false);
              }}
              variant="gradient"
              className="flex-shrink-0"
            >
              Delete
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

export default ConfirmModal;