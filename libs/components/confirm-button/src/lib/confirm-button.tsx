import { Button, Typography } from "@bfirst/material-tailwind";
import {
  FloatingFocusManager,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { ReactNode, useId, useState } from "react";

/* eslint-disable-next-line */
export interface ConfirmButtonProps {
  message: string;
  confirmHandler: ReactNode;
  onConfirm?: () => void;
  children: ReactNode;
}

export function ConfirmButton({ message, onConfirm, confirmHandler, children }: ConfirmButtonProps) {
  const [isOpen, setIsOpen] = useState<undefined | boolean>();

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip({ fallbackAxisSideDirection: "end" }), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

  const headingId = useId();

  return (
    <>
      <button ref={refs.setReference} {...getReferenceProps()}>
        {confirmHandler}
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={true}>
          <div
            className="Popover bg-white p-4 rounded-md shadow-2xl z-[999]"
            ref={refs.setFloating}
            style={floatingStyles}
            aria-labelledby={headingId}
            {...getFloatingProps()}
          >
            <Typography variant="h6" color="blue-gray" className="mb-6">
              {message}
            </Typography>
            <div className="flex gap-x-8">
              <Button onClick={() => setIsOpen(false)} variant="outlined" className="flex-grow">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  onConfirm && onConfirm();
                  setIsOpen(false);
                }}
                variant="gradient"
                className="flex-grow"
              >
                {children}
              </Button>
            </div>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
export default ConfirmButton;
