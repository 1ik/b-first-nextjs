import { Input } from "@bfirst/material-tailwind";
import {
  FloatingFocusManager,
  FloatingPortal,
  autoUpdate,
  flip,
  size,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useListNavigation,
  useRole,
} from "@floating-ui/react";
import { forwardRef, useEffect, useRef, useState } from "react";

interface ItemProps {
  children: React.ReactNode;
  active: boolean;
}

type Entry = {
  id?: any;
  title: string;
  name: string;
};

export interface TypeAheadSearchProps {
  label: string;
  items: Entry[];
  onSearch: (search: string) => void;
  itemsSelected: (items: Entry | undefined) => void;
  displayValue: string;
  listHeight?: "available" | "contain";
}

const Item = forwardRef<HTMLDivElement, ItemProps & React.HTMLProps<HTMLDivElement>>(
  ({ children, active, ...rest }, ref) => {
    const id = useId();
    return (
      <div
        ref={ref}
        role="option"
        id={id}
        aria-selected={active}
        {...rest}
        style={{
          background: active ? "#E5E7EB" : "none",
          padding: 4,
          cursor: "pointer",
          ...rest.style,
        }}
      >
        {children}
      </div>
    );
  }
);

export function TypeAheadSearch({
  label,
  items,
  onSearch,
  itemsSelected,
  displayValue,
  listHeight = "available",
}: TypeAheadSearchProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<Entry>();
  const [height, setHeight] = useState<number | null>(null);

  const listRef = useRef<Array<HTMLElement | null>>([]);

  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
    middleware: [
      flip({ padding: 10 }),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${listHeight === "available" ? availableHeight : ""}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const role = useRole(context, { role: "listbox" });
  const dismiss = useDismiss(context);
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([role, dismiss, listNav]);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);
    onSearch(value);
    if (value) {
      setOpen(true);
      setActiveIndex(0);
    } else {
      setOpen(false);
    }
  }
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerHeight = (containerRef.current as { offsetHeight: number }).offsetHeight;
      setHeight(containerHeight);
    }
  }, []);

  useEffect(() => {
    itemsSelected(selectedItem);
  }, [selectedItem]);
  console.log(height);
  return (
    <div ref={containerRef} className="relative h-full">
      <Input
        label={label}
        {...getReferenceProps({
          ref: refs.setReference,
          onChange,
          value: inputValue,
          placeholder: "Type for suggestion",
          "aria-autocomplete": "list",
          onBlur() {
            setInputValue("");
          },
          onKeyDown(event) {
            if (event.key === "Enter" && activeIndex != null) {
              event.preventDefault();
              setSelectedItem(items[activeIndex]);
              setInputValue("");
              setActiveIndex(null);
              setOpen(false);
            }
          },
        })}
      />
      <FloatingPortal root={containerRef.current}>
        {open && (
          <FloatingFocusManager context={context} initialFocus={-1} visuallyHiddenDismiss>
            <div
              className="absolute left-0 top-full z-[9999] shadow-xl p-3 rounded-md"
              {...getFloatingProps({
                ref: refs.setFloating,
                style: {
                  ...floatingStyles,
                  background: "white",
                  color: "black",
                  overflowY: "auto",
                  maxHeight: height || 500,
                },
              })}
            >
              {items?.map((item: Entry, index: number) => (
                <Item
                  {...getItemProps({
                    key: item.id,
                    ref(node) {
                      listRef.current[index] = node;
                    },
                    onClick() {
                      setInputValue("");
                      setActiveIndex(null);
                      setOpen(false);
                      setSelectedItem(item);
                      refs.domReference.current?.focus();
                    },
                  })}
                  active={activeIndex === index}
                >
                  {item[displayValue]}
                </Item>
              ))}
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </div>
  );
}
