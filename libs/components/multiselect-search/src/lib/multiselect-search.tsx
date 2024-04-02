import { Chip, Input } from "@bfirst/material-tailwind";
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
  name: string;
};

export interface MultiselectSearchProps {
  label: string;
  items: Entry[];
  onSearch: (search: string) => void;
  itemsSelected: (items: Entry[]) => void;
  onAddItem?: (itemName: string) => Promise<Entry>;
  defaultValue?: Entry[];
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
          cursor: "default",
          ...rest.style,
        }}
      >
        {children}
      </div>
    );
  }
);

export function MultiselectSearch({
  label,
  items,
  onSearch,
  itemsSelected,
  defaultValue,
  onAddItem,
}: MultiselectSearchProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedItems, setSelectedItems] = useState<Entry[]>(defaultValue || []);

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
            maxHeight: `${availableHeight}px`,
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

  const deleteChip = (entry: Entry) => {
    setSelectedItems(selectedItems.filter((sI) => sI.id !== entry.id));
  };

  useEffect(() => {
    itemsSelected(selectedItems);
  }, [selectedItems]);

  return (
    <div ref={containerRef} className="relative">
      <Input
        label={label}
        {...getReferenceProps({
          ref: refs.setReference,
          onChange,
          value: inputValue,
          placeholder: "Type for suggestion",
          "aria-autocomplete": "list",
          onKeyDown(event) {
            if (event.key === "Enter" && activeIndex != null) {
              event.preventDefault();
              if (activeIndex === items.length && onAddItem) {
                onAddItem(inputValue).then((newItem: Entry) => setSelectedItems([newItem, ...selectedItems]));
              } else if (items[activeIndex]) {
                setSelectedItems([items[activeIndex], ...selectedItems]);
              }
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
              className="absolute left-0 top-full z-[999]"
              {...getFloatingProps({
                ref: refs.setFloating,
                style: {
                  ...floatingStyles,
                  background: "white",
                  color: "black",
                  overflowY: "auto",
                },
              })}
            >
              {onAddItem && !items?.find(i => i.name.toLowerCase() === inputValue.toLowerCase()) && (
                <Item
                  {...getItemProps({
                    ref(node) {
                      listRef.current[items?.length] = node;
                    },
                    onClick() {
                      setInputValue("");
                      setActiveIndex(null);
                      setOpen(false);
                      onAddItem(inputValue).then((newItem: Entry) => setSelectedItems([newItem, ...selectedItems]));
                      refs.domReference.current?.focus();
                    },
                  })}
                  active={activeIndex === items?.length}
                >
                  Create "{inputValue}"
                </Item>
              )}

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
                      setSelectedItems([item, ...selectedItems]);
                      refs.domReference.current?.focus();
                    },
                  })}
                  active={activeIndex === index}
                >
                  {item.name}
                </Item>
              ))}
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
      <div className="flex flex-row gap-1">
        {selectedItems?.map((item, index) => (
          <Chip key={index} className="mt-2 w-fit" variant="ghost" value={item.name} onClose={() => deleteChip(item)} />
        ))}
      </div>
    </div>
  );
}

// import { Chip, Input, Menu, MenuHandler, MenuItem, MenuList } from "@bfirst/material-tailwind";

// import React, { useEffect } from "react";

// type Entry = {
//   id?: any;
//   name: string;
// };

// /* eslint-disable-next-line */
// export interface MultiselectSearchProps {
//   label: string;
//   items: Entry[];
//   onSearch: (search: string) => void;
//   itemsSelected: (items: Entry[]) => void;
//   onAddItem?: (itemName: string) => Promise<Entry>;
//   defaultValue?: Entry[];
// }

// export function MultiselectSearch(props: MultiselectSearchProps) {
//   const [openMenu, setOpenMenu] = React.useState(false);
//   const [selectedItems, setSelectedItems] = React.useState<Entry[]>([]);
//   const [searchValue, setSearchValue] = React.useState("");
//   const deleteChip = (entry: Entry) => {
//     setSelectedItems(selectedItems.filter((sI) => sI.id !== entry.id));
//   };

//   useEffect(() => {
//     props.defaultValue && setSelectedItems(props.defaultValue);
//   }, [props.defaultValue]);

//   useEffect(() => {
//     props.itemsSelected(selectedItems);
//   }, [selectedItems]);

//   return (
//     <div className="relative flex flex-col gap-3">
//       <Menu open={openMenu} handler={setOpenMenu} allowHover placement="bottom-start">
//         <MenuHandler>
//           <Input
//             value={searchValue}
//             label={props.label}
//             placeholder="Type for suggestions"
//             className="pl-20 p-4"
//             containerProps={{
//               className: "min-w-0",
//             }}
//             /*             onKeyDownCapture={(e) => {
//               if (e.key === " ") {
//                 setSearchValue((cur) => cur + " ");
//               }
//             }} */
//             onChange={(event) => {
//               setSearchValue(event.target.value);
//               props.onSearch(event.target.value);
//             }}
//           />
//         </MenuHandler>

//         <MenuList>
//           {props.onAddItem &&
//             searchValue &&
//             !props.items?.find((i) => i.name.toLowerCase() === searchValue.toLowerCase()) && (
//               <MenuItem
//                 onClick={() => {
//                   props.onAddItem && props.onAddItem(searchValue).then((newItem) => setSelectedItems([newItem, ...selectedItems]));
//                   setSearchValue("");
//                 }}
//               >
//                 Create "{searchValue}"
//               </MenuItem>
//             )}
//           {props.items
//             ?.filter((i) => !selectedItems.find((sI) => sI.id === i.id))
//             .map((item) => {
//               return (
//                 <MenuItem
//                   onClick={() => {
//                     setSelectedItems([item, ...selectedItems]);
//                     setSearchValue("");
//                   }}
//                   key={item.id}
//                 >
//                   {item.name}
//                 </MenuItem>
//               );
//             })}
//         </MenuList>
//       </Menu>

//       <div className="flex flex-row gap-1">
//         {selectedItems.map((item, index) => (
//           <Chip key={index} className="w-fit" variant="ghost" value={item.name} onClose={() => deleteChip(item)} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MultiselectSearch;

// // <div className="relative flex flex-col gap-3">
// //   <Input
// //     onBlur={() => setSearchValue("")}
// //     label={props.label}
// //     placeholder="Type for suggestions"
// //     className="pl-20 p-4"
// //     containerProps={{
// //       className: "min-w-0",
// //     }}
// //     value={searchValue}
// //     onKeyDown={(e) => {
// //       if (e.key === "Enter") {
// //         e.preventDefault();
// //         if (!props.items.find((i) => i.name.toLowerCase() === searchValue.toLowerCase())) {
// //           if (props.onAddItem) {
// //             props.onAddItem(searchValue).then((newItem) => setSelectedItems([newItem, ...selectedItems]));
// //           }
// //         } else if (props.items.find((i) => i.name.toLowerCase() === searchValue.toLowerCase())) {
// //           const item = props.items.find((i) => i.name.toLowerCase() === searchValue.toLowerCase());
// //           setSelectedItems([item as Entry, ...selectedItems]);
// //         }
// //         setSearchValue("");
// //       }
// //     }}
// //     onChange={(event) => {
// //       setSearchValue(event.target.value);
// //       props.onSearch(event.target.value);
// //     }}
// //   />
// //   {searchValue && (
// //     <List className="absolute z-[99] bg-white top-full shadow-lg">
// //       {props.onAddItem && !props.items?.find((i) => i.name.toLowerCase() === searchValue.toLowerCase()) && (
// //         <ListItem className="bg-gray-200">Create "{searchValue}"</ListItem>
// //       )}
// //       {props.items
// //         ?.filter((i) => !selectedItems.find((sI) => sI.id === i.id))
// //         .map((item) => {
// //           return (
// //             <ListItem
// //               onClick={() => {
// //                 setSelectedItems([item, ...selectedItems]);
// //                 setSearchValue("");
// //               }}
// //               key={item.id}
// //             >
// //               {item.name}
// //             </ListItem>
// //           );
// //         })}
// //     </List>
// //   )}

// //   <div className="flex flex-row gap-1">
// //     {selectedItems.map((item, index) => (
// //       <Chip key={index} className="w-fit" variant="ghost" value={item.name} onClose={() => deleteChip(item)} />
// //     ))}
// //   </div>
// // </div>;
