import { useGet } from "@bfirst/api-client";
import { Icon } from "@bfirst/components-icon";
import { Loader } from "@bfirst/components-loader";
import { Button, Input, Typography } from "@bfirst/material-tailwind";
import { useState } from "react";

export default function MideaLibrary({ mediaUrlClick, dialogPopup }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isPending } = useGet(`api/v1/media-image-list?page=${currentPage}`);
  return (
    <div>
      <div className="w-full mb-4">
        <Input type="text" label="Image Caption" />
      </div>
      {isPending ? (
        <div className="h-60 w-full">
          <Loader />
        </div>
      ) : (
        <div className="flex gap-5 flex-wrap justify-center md:justify-start  overflow-y-scroll md:overflow-auto md:h-60 h-48 w-full">
          {data?.media_images.data.map((item: { url: string }, index: any) => {
            return (
              <div key={index}>
                <img
                  onClick={() => mediaUrlClick(item.url)}
                  className="w-[190px] aspect-video object-cover cursor-pointer"
                  src={`https://images.bangladeshfirst.com/resize?width=1600&height=900&format=webp&quality=85&path=${item.url}`}
                  alt={item.url}
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="border-b border-blue-gray-100 w-full">
        <div className="p-3 w-full flex justify-between items-center">
          <div>
            <Typography variant="small" color="blue-gray" className="font-normal">
              Page {currentPage} of {data?.media_images.last_page}
            </Typography>
          </div>
          <div className="flex">
            <Button variant="" disabled={currentPage === 1} onClick={() => setCurrentPage((cur) => cur - 1)}>
              <Icon variant="text" name="leftArrow" />
            </Button>
            <Button
              disabled={currentPage === data?.media_images.last_page}
              onClick={() => setCurrentPage((cur) => cur + 1)}
            >
              <Icon variant="text" name="rightArrow" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-2 justify-end mt-4">
        <Button type="button">Add News</Button>
        <Button variant="outlined" onClick={dialogPopup}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
