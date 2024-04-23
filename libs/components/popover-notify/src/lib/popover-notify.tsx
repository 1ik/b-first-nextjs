import { Chip } from "@bfirst/material-tailwind";
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
import { ReactNode, useEffect, useId, useState } from "react";

/* eslint-disable-next-line */
export interface PopoverNotifyProps {
  trigger: ReactNode | boolean;
  message: string;
  duration?: number;
}

export function PopoverNotify({ trigger, message, duration = 1000 }: PopoverNotifyProps) {
  const [isOpen, setIsOpen] = useState<undefined | boolean>();

  const centeredStyles = {
    transform: "translate(-50%, 0)",
    top: "1rem",
    left: "50%",
  };
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

  useEffect(() => {
    if (typeof trigger === "boolean") {
      setIsOpen(trigger);
    }
  }, [trigger]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, duration);
    }
  }, [isOpen, setIsOpen, duration]);

  return (
    <>
      {typeof trigger === "object" && (
        <button ref={refs.setReference} {...getReferenceProps()}>
          {trigger}
        </button>
      )}
      {isOpen && (
        <FloatingFocusManager context={context} modal={true}>
          <div
            className="z-[999]"
            ref={refs.setFloating}
            style={{ ...floatingStyles, ...(typeof trigger === "boolean" ? centeredStyles : {}) }}
            aria-labelledby={headingId}
            {...getFloatingProps()}
          >
            <Chip value={message} />
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
export default PopoverNotify;
