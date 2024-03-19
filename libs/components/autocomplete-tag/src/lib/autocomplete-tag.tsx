/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chip, Input, Menu, MenuHandler, MenuItem, MenuList } from "@bfirst/material-tailwind";
import React, { useEffect } from "react";

type Entry = {
  id?: any;
  name: string;
};

/* eslint-disable-next-line */
export interface AutocompleteTagProps {
  label: string;
  items: Entry[];
  onSearch: (search: string) => void;
  itemsSelected: (items: Entry[]) => void;
  onAddTag?: (tagName: string) => void;
}

export function AutocompleteTag(props: AutocompleteTagProps) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<Entry[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const deleteChip = (entry: Entry) => {
    setSelectedItems(selectedItems.filter((sI) => sI.id !== entry.id));
  };

  // useEffect(() => {
  //   props.onSearch(searchValue);
  // }, [searchValue]);

  useEffect(() => {
    props.itemsSelected(selectedItems);
  }, [selectedItems]);

  return (
    <div className="relative flex flex-col gap-3">
      <Menu open={openMenu} handler={setOpenMenu} allowHover placement="bottom-start">
        <MenuHandler>
          <Input
            label={props.label}
            placeholder="Type for suggestions"
            className="pl-20 p-4"
            containerProps={{
              className: "min-w-0",
            }}
            onChange={(event) => {
              // setSearchValue(event.target.value);
              props.onSearch(event.target.value);
            }}
          />
        </MenuHandler>

        <MenuList>
          {props.items
            .filter((i) => !selectedItems.find((sI) => sI.id === i.id))
            .map((item) => {
              return (
                <MenuItem
                  onClick={() => {
                    setSelectedItems([item, ...selectedItems]);
                    // setSearchValue("");
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

export default AutocompleteTag;
