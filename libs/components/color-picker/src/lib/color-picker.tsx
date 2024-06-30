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
import { Dispatch, SetStateAction, useId, useState } from "react";
import { PhotoshopPicker } from "react-color";

/* eslint-disable-next-line */
export interface ColorPickerProps {
  title?: string;
  className?: string;
  color: string;
  onColorChange: Dispatch<SetStateAction<string>>;
}

export function ColorPicker({ title, className, color = "#5F5FB7", onColorChange }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState<undefined | boolean>();

  const closeColorPicker = function () {
    setIsOpen(false);
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

  return (
    <>
      <button
        className="flex text-sm items-center w-fit gap-x-2 p-2 bg-gray-200 rounded-md"
        type="button"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <span style={{ backgroundColor: color }} className="h-5 w-12 block border border-red-500/40"></span> Shoulder
        Color
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={true}>
          <div
            className={`Popover z-[999] ${className}`}
            ref={refs.setFloating}
            style={floatingStyles}
            aria-labelledby={headingId}
            {...getFloatingProps()}
          >
            <PhotoshopPicker
              header={title || "Color Picker"}
              color={color}
              onChangeComplete={(newColor) => {
                onColorChange && onColorChange(newColor.hex);
              }}
              onAccept={closeColorPicker}
              onCancel={closeColorPicker}
            />
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}

export default ColorPicker;
