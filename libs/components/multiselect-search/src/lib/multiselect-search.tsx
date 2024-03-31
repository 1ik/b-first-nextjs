import { Chip, Input, Menu, MenuHandler, MenuItem, MenuList } from "@bfirst/material-tailwind";

import React, { useEffect } from "react";

type Entry = {
  id?: any;
  name: string;
};

/* eslint-disable-next-line */
export interface MultiselectSearchProps {
  label: string;
  items: Entry[];
  onSearch: (search: string) => void;
  itemsSelected: (items: Entry[]) => void;
  onAddItem?: (itemName: string) => Promise<Entry>;
  defaultValue?: Entry[];
}

export function MultiselectSearch(props: MultiselectSearchProps) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<Entry[]>([]);
  const [searchValue, setSearchValue] = React.useState("");
  const deleteChip = (entry: Entry) => {
    setSelectedItems(selectedItems.filter((sI) => sI.id !== entry.id));
  };

  useEffect(() => {
    props.defaultValue && setSelectedItems(props.defaultValue);
  }, [props.defaultValue]);

  useEffect(() => {
    props.itemsSelected(selectedItems);
  }, [selectedItems]);

  return (
    <div className="relative flex flex-col gap-3">
      <Menu open={openMenu} handler={setOpenMenu} allowHover placement="bottom-start">
        <MenuHandler>
          <Input
            value={searchValue}
            label={props.label}
            placeholder="Type for suggestions"
            className="pl-20 p-4"
            containerProps={{
              className: "min-w-0",
            }}
            onChange={(event) => {
              setSearchValue(event.target.value);
              props.onSearch(event.target.value);
            }}
          />
        </MenuHandler>

        <MenuList>
          {props.onAddItem &&
            searchValue &&
            !props.items?.find((i) => i.name.toLowerCase() === searchValue.toLowerCase()) && (
              <MenuItem
                onClick={() => {
                  props.onAddItem && props.onAddItem(searchValue).then((newItem) => setSelectedItems([newItem, ...selectedItems]));
                  setSearchValue("");
                }}
              >
                Create "{searchValue}"
              </MenuItem>
            )}
          {props.items
            ?.filter((i) => !selectedItems.find((sI) => sI.id === i.id))
            .map((item) => {
              return (
                <MenuItem
                  onClick={() => {
                    setSelectedItems([item, ...selectedItems]);
                    setSearchValue("");
                  }}
                  key={item.id}
                >
                  {item.name}
                </MenuItem>
              );
            })}
        </MenuList>
      </Menu>

      <div className="flex flex-row gap-1">
        {selectedItems.map((item, index) => (
          <Chip key={index} className="w-fit" variant="ghost" value={item.name} onClose={() => deleteChip(item)} />
        ))}
      </div>
    </div>
  );
}

export default MultiselectSearch;
