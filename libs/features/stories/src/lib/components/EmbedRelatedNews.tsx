import { useGet } from "@bfirst/api-client";
import { TypeAheadSearch } from "@bfirst/components-type-ahead-search";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@bfirst/material-tailwind";
import { getImageUrl, getNewsUrl } from "@bfirst/utilities";
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

  const handleEmbedNews = function (news: any) {
    if (!news) return;

    const content = ` <div id="embeded-related-news" style="display: flex; justify-content: space-between; align-items: center; gap: 10px; border-radius: 8px; padding: 10px 15px">
        <p style="font-size: 20px; font-weight: 700;">
          <a style="text-decoration: none" href="${getNewsUrl(news)}">
            ${news?.title}
          </a>
        </p>
        <a style="width: 250px; display: block;" href=${getNewsUrl(news)}>
          <img
          style="width: 100%; aspect-ratio: 16/9; object-fit: cover; border-radius: 6px;"
          src=${getImageUrl(news?.meta?.featured_image, 320, 180)}
          alt=${news?.title}
          />
        </a>
    </div>`;

    /* tinymce.activeEditor?.insertContent(
      `<iframe class="news-iframe" style="width: 100%; background: #F2F4F7; border-radius: 8px; padding: 8px 8px 0px 8px; box-sizing: border-box;" src="https://backend.bangladeshfirst.com/api/v1/public/preview-story/${id}" ></iframe>`
    ); */

    tinymce.activeEditor?.insertContent(content);

    onOpen(false);
  };

  return (
    <Dialog open={open} handler={handleOpen} size="lg">
      <DialogHeader>Search and embed news</DialogHeader>
      <DialogBody className="h-[60vh] relative overflow-hidden">
        <TypeAheadSearch
          displayValue="title"
          label="Type for News"
          items={searchedNews?.data}
          onSearch={(s) => debounceSearch(() => setSearch(s))}
          itemsSelected={(i) => {
            handleEmbedNews(i);
          }}
          listHeight="contain"
        />
        <p className="absolute w-full text-center top-1/2 -translate-y-1/2 text-xl opacity-80">
          Please search the news you want to embed.
        </p>
      </DialogBody>
      <DialogFooter className="mt-4">
        <Button onClick={() => onOpen(false)} className="ml-2" variant="outlined">
          Cancel
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
