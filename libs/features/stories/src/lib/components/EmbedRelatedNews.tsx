import { useGet } from "@bfirst/api-client";
import { TypeAheadSearch } from "@bfirst/components-type-ahead-search";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@bfirst/material-tailwind";
import { Dispatch, SetStateAction, useState } from "react";
import tinymce from "tinymce";

interface EmbedRelatedNewsProps {
  open: boolean;
  onOpen: Dispatch<SetStateAction<boolean>>;
}

export default function EmbedRelatedNews({ open, onOpen }: EmbedRelatedNewsProps) {
  const [search, setSearch] = useState("");

  const { data: searchedNews } = useGet(`api/v1/stories?title=${search}`);

  let debounce: string | number | NodeJS.Timeout | undefined;
  const debounceSearch = function (callback: () => void) {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      callback();
    }, 500);
  };

  const handleOpen = function () {
    onOpen((cur) => !cur);
  };

  const handleEmbedNews = function (id: number) {
    if (!id) return;

    tinymce.activeEditor?.insertContent(
      `<iframe class="news-iframe" style="width: 100%; background: #F2F4F7; border-radius: 8px; padding: 8px 8px 0px 8px; box-sizing: border-box;" src="https://backend.bangladeshfirst.com/api/v1/public/preview-story/${id}" ></iframe>`
    );
    onOpen(false);
  };

  return (
    <Dialog open={open} handler={handleOpen} size="lg">
      <DialogHeader>Search and embed news</DialogHeader>
      <DialogBody className="h-[60vh] relative overflow-hidden">
        <TypeAheadSearch
          label="Type for News"
          items={searchedNews?.data}
          onSearch={(s) => debounceSearch(() => setSearch(s))}
          itemsSelected={(i) => {
            handleEmbedNews(i?.id);
          }}
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl opacity-80">
          Please search the news you want to embed.
        </p>
      </DialogBody>
      <DialogFooter>
        <Button onClick={() => onOpen(false)} className="ml-2" variant="outlined">
          Cancel
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
