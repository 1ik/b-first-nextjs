import { useGet } from "@bfirst/api-client";
import { Loader } from "@bfirst/components-loader";
import { Button, Typography } from "@bfirst/material-tailwind";
import { useState } from "react";

export default function MediaLibrary() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isPending } = useGet(`api/v1/media-image-list?page=${currentPage}`);
  return (
    <div>
      {isPending ? (
        <div className="h-60 w-full">
          <Loader />
        </div>
      ) : (
        <div className="flex gap-5 flex-wrap justify-center md:justify-start  overflow-y-scroll md:overflow-auto md:h-60 h-48 w-full">
          {data?.media_images.data.map((item: { url: string }) => {
            return (
              <div>
                <img
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
          <div className="flex gap-2">
            <Button
              variant="outlined"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((cur) => cur - 1)}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              size="sm"
              disabled={currentPage === data?.media_images.last_page}
              onClick={() => setCurrentPage((cur) => cur + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
