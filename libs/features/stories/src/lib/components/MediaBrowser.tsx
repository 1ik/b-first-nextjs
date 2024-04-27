import { useGet, usePost } from "@bfirst/api-client";
import { Loader } from "@bfirst/components-loader";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@bfirst/material-tailwind";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface MediaBrowserProps {
  defaultData?: any;
  dialogOpen: boolean;
  onDialogOpen: Dispatch<SetStateAction<boolean>>;
  featuredImgUrl: string;
  onFeaturedImgUrl: Dispatch<SetStateAction<string>>;
  register?: any;
}

export default function MediaBrowser({
  defaultData,
  dialogOpen,
  onDialogOpen,
  featuredImgUrl,
  onFeaturedImgUrl,
  register,
}: MediaBrowserProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: mediaImageData, isPending } = useGet(`api/v1/media-image-list?sort=desc&page=${currentPage}`);
  const { requestAsync, isSuccess } = usePost(`api/v1/media-upload-image`);

  const handleDialogOpen = () => onDialogOpen((cur) => !cur);
  const handleFeaturedImgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    const data = await requestAsync(formData);
    onFeaturedImgUrl(data.data.url);
  };
  const handleAddToNews = () => {
    if (!featuredImgUrl) return;
    onDialogOpen(false);
  };

  const data = [
    {
      label: "Upload",
      value: "upload",
    },
    {
      label: "Library",
      value: "library",
    },
  ];

  useEffect(() => {
    if (isSuccess) {
      toast.success("Image uploaded");
    }
  }, [isSuccess]);

  return (
    <Dialog open={dialogOpen} handler={handleDialogOpen} size="xl">
      <ToastContainer position="top-center" />
      <DialogHeader className="flex justify-between">
        <Typography>Media Browser</Typography>
      </DialogHeader>
      <DialogBody>
        {/*======== Tabs ======= */}
        <Tabs id="custom-animation" value="upload">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <div className="mx-4 my-4 md:my-1">
            <Input
              {...register("imageCaption")}
              defaultValue={defaultData?.story.meta.imageCaption}
              label="Image Caption"
            />
          </div>
          <TabsBody>
            {data.map(({ value }) => (
              <TabPanel className="h-[350px]" key={value} value={value}>
                {value === "upload" && (
                  <div className="flex gap-x-4">
                    <div className="flex flex-1 items-center justify-center flex-col gap-y-4">
                      <div className="md:mt-5 mb-4">
                        <label className="md:w-72 flex flex-col items-center px-4 py-6 bg-[#e1e2e4] rounded-lg shadow-lg cursor-pointer hover:bg-blue hover:shadow-xl">
                          <svg
                            fill="#b3b6bc"
                            height="100px"
                            width="100px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-2.8 -2.8 33.56 33.56"
                            stroke="#000000"
                            transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                            stroke-width="0.00027963"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke="#CCCCCC"
                              stroke-width="0.223704"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <g>
                                <g id="c140__x2B_">
                                  <path d="M13.98,0C6.259,0,0,6.26,0,13.982s6.259,13.981,13.98,13.981c7.725,0,13.983-6.26,13.983-13.981 C27.963,6.26,21.705,0,13.98,0z M21.102,16.059h-4.939v5.042h-4.299v-5.042H6.862V11.76h5.001v-4.9h4.299v4.9h4.939v4.299H21.102z "></path>
                                </g>
                                <g id="Capa_1_9_"> </g>
                              </g>
                            </g>
                          </svg>
                          <span>Upload Image</span>
                          <input className="hidden" onChange={handleFeaturedImgUpload} type="file" />
                        </label>
                        <Typography className="my-4">
                          Allowed file type: <span className="font-bold">png, jpg, jpeg, gif</span>
                        </Typography>
                      </div>
                      <div className="lg:w-2/3 md:my-16"></div>
                    </div>
                  </div>
                )}
                {value === "library" && (
                  <div>
                    <div>
                      {isPending ? (
                        <div className="h-72 w-full">
                          <Loader />
                        </div>
                      ) : (
                        <div className="flex gap-5 flex-wrap justify-center md:justify-between overflow-y-scroll md:overflow-auto md:h-72 h-48 w-full">
                          {mediaImageData?.media_images.data.map((item: { url: string }, index: number) => {
                            return (
                              <img
                                key={index}
                                onClick={() => onFeaturedImgUrl(item.url)}
                                className="w-[200px] aspect-video object-cover cursor-pointer"
                                src={`https://images.bangladeshfirst.com/resize?width=1600&height=900&format=webp&quality=85&path=${item.url}`}
                                alt={item.url}
                              />
                            );
                          })}
                        </div>
                      )}

                      <div className="border-b border-blue-gray-100 w-full">
                        <div className="p-3 w-full flex justify-between items-center">
                          <div>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              Page {currentPage} of {mediaImageData?.media_images.last_page}
                            </Typography>
                          </div>
                          <div className="flex gap-3">
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
                              disabled={currentPage === mediaImageData?.media_images.last_page}
                              onClick={() => setCurrentPage((cur) => cur + 1)}
                            >
                              Next
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </DialogBody>
      <DialogFooter>
        <Button onClick={handleAddToNews}>Add to News</Button>
        <Button className="ml-2" variant="outlined" onClick={() => onDialogOpen(false)}>
          Cancel
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
