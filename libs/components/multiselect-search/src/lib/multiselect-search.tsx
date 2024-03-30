import { Chip, Input, List, ListItem } from "@bfirst/material-tailwind";
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
}

export function MultiselectSearch(props: MultiselectSearchProps) {
  const [selectedItems, setSelectedItems] = React.useState<Entry[]>([]);
  const [searchValue, setSearchValue] = React.useState("");
  const deleteChip = (entry: Entry) => {
    setSelectedItems(selectedItems.filter((sI) => sI.id !== entry.id));
  };

  useEffect(() => {
    props.itemsSelected(selectedItems);
  }, [selectedItems]);

  return (
    <div className="relative flex flex-col gap-3">
      <Input
        label={props.label}
        placeholder="Type for suggestions"
        className="pl-20 p-4"
        containerProps={{
          className: "min-w-0",
        }}
        onKeyDown={(e)=> {
          if(e.key === "Enter"){
            e.preventDefault();
            if(!props.items.find(i => i.name.toLowerCase() === searchValue.toLowerCase())){
              if (props.onAddItem) {
                props.onAddItem(searchValue).then((newItem) => setSelectedItems([newItem, ...selectedItems]));
              }
            }
            else if(props.items.find(i => i.name.toLowerCase() === searchValue.toLowerCase())){
              const item = props.items.find(i => i.name.toLowerCase() === searchValue.toLowerCase());
              setSelectedItems([item as Entry, ...selectedItems])
            }
          }
        }}
        onChange={(event) => {
          setSearchValue(event.target.value);
          props.onSearch(event.target.value);
        }}
      />
      {searchValue && (
        <List className="absolute z-[99] bg-white top-full shadow-lg">
          {props.items
            ?.filter((i) => !selectedItems.find((sI) => sI.id === i.id))
            .map((item) => {
              return (
                <ListItem
                  onClick={() => {
                    setSelectedItems([item, ...selectedItems]);
                    setSearchValue("");
                  }}
                  key={item.id}
                >
                  {item.name}
                </ListItem>
              );
            })}
        </List>
      )}

      <div className="flex flex-row gap-1">
        {selectedItems.map((item, index) => (
          <Chip key={index} className="w-fit" variant="ghost" value={item.name} onClose={() => deleteChip(item)} />
        ))}
      </div>
    </div>
  );
}

export default MultiselectSearch;
