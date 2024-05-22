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
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import tinymce from "tinymce";
import { StateInterface } from "./StoryForm";

interface MediaBrowserProps {
  defaultData?: any;
  state: StateInterface;
  dispatch: any;
  featuredImgUrl: string;
  onFeaturedImgUrl: Dispatch<SetStateAction<string>>;
  register?: any;
}

export default function MediaBrowser({
  defaultData,
  state,
  dispatch,
  featuredImgUrl,
  onFeaturedImgUrl,
  register,
}: MediaBrowserProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("upload");
  const [selectedImageFile, setSelectedImageFile] = useState<any>(null);
  const [selectedUploadImage, setSelectedUploadImage] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [imageUploadTitle, setImageUploadTitle] = useState("");
  const [searchImageTitle, setSearchImageTitle] = useState("");
  const [imageCaption, setImageCaption] = useState("");

  const { data: mediaImageData, isPending } = useGet(
    `api/v1/media-image-list?title=${searchImageTitle}&sort=desc&page=${currentPage}`
  );
  const { requestAsync, isSuccess } = usePost(`api/v1/media-upload-image`);

  const handleDialogOpen = () => {
    dispatch({ type: "setDialogOpen" });
  };

  const handleImageSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => setSearchImageTitle(e.target.value), 500);
  };

  const handleAddToNews = async () => {
    if (!imageUploadTitle) {
      toast.error("image title is required");
    }
    if (selectedImage) {
      handleImageSelect(selectedImage);
    } else {
      if (!selectedImageFile || !imageUploadTitle) return;

      // image size should be less than or equal to 2 MB
      if (selectedImageFile.size > 2 * 1024 * 1024) return toast.error("Image size exceeds the maximum limit of 2MB");

      const formData = new FormData();
      formData.append("image", selectedImageFile);
      formData.append("title", imageUploadTitle);
      const data = await requestAsync(formData);
      handleImageSelect(data.data.url);
    }
  };

  const handleImageSelect = function (path: string) {
    if (state.openFrom === "storyForm") onFeaturedImgUrl(path);
    if (state.openFrom === "textEditor") {
      tinymce.activeEditor?.insertContent(
        `<div>
          <img width="100%" src="https://images.bangladeshfirst.com/smartcrop?width=1600&height=900&format=webp&quality=85&path=${path}" alt=""/>
          <h4>${imageCaption && imageCaption}</h4>
        </div>`
      );
    }
    dispatch({ type: "setDialogOpen", payload: false });
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
    if (state.dialogOpen) {
      setActiveTab("upload");
      setSearchImageTitle("");
    }
  }, [state.dialogOpen]);

  useEffect(() => {
    if (!selectedImageFile) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      setSelectedUploadImage(e.target?.result as string);
    };
    reader.readAsDataURL(selectedImageFile);
  }, [selectedImageFile]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Image uploaded");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (!state.dialogOpen) {
      setImageUploadTitle("");
      setSelectedImage("");
      setSelectedImageFile(null);
      setSelectedUploadImage("");
    }
  }, [state.dialogOpen]);

  useEffect(() => {
    if (activeTab === "library") {
      setSelectedImageFile(null);
      setImageUploadTitle("");
      setSelectedUploadImage("");
    }
  }, [activeTab]);

  return (
    <Dialog open={state.dialogOpen} handler={handleDialogOpen} size="xl">
      <ToastContainer position="top-center" />
      <DialogHeader className="flex justify-between">
        <Typography>Media Browser</Typography>
      </DialogHeader>
      <DialogBody>
        {/*======== Tabs ======= */}
        <Tabs id="custom-animation" value="upload">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab onClick={() => setActiveTab(value)} key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <div className="h-12 mx-4 my-4 md:my-1 flex gap-2 flex-col md:flex-row">
            {state.openFrom === "storyForm" && (
              <Input
                {...register("imageCaption")}
                defaultValue={defaultData?.story.meta.imageCaption}
                label="Image Caption"
              />
            )}

            {state.openFrom === "textEditor" && (
              <Input onChange={(e) => setImageCaption(e.target.value)} label="Image Caption" />
            )}

            {activeTab === "library" && <Input onChange={handleImageSearch} label="Search" />}
          </div>
          <TabsBody>
            {data.map(({ value }) => (
              <TabPanel className="h-[400px]" key={value} value={value}>
                {value === "upload" && (
                  <div className="flex gap-x-4">
                    <div className="flex flex-1 items-center justify-center flex-col gap-y-4">
                      <div className="md:mt-5 md:mb-4">
                        <label className="md:w-80 flex flex-col items-center p-4 bg-[#e1e2e4] rounded-lg shadow-lg cursor-pointer hover:bg-blue hover:shadow-xl">
                          {selectedUploadImage ? (
                            <img src={selectedUploadImage} alt="selected file" />
                          ) : (
                            <div className="py-4">
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
                            </div>
                          )}

                          <input
                            className="hidden"
                            onChange={(e) => setSelectedImageFile(e.target.files?.[0])}
                            type="file"
                          />
                        </label>
                        <Typography className="my-2 md:my-4">
                          Allowed file type: <span className="font-bold">png, jpg, jpeg, gif</span>
                        </Typography>
                        <Typography className="my-2 md:my-4">
                          Max allowed image size: <span className="font-bold">2 MB</span>
                        </Typography>
                        {selectedImageFile && (
                          <Input onChange={(e) => setImageUploadTitle(e.target.value)} label="Image title" />
                        )}
                      </div>
                      <div className="lg:w-2/3 md:my-16"></div>
                    </div>
                  </div>
                )}
                {value === "library" && (
                  <div className="mt-4">
                    <div>
                      {isPending ? (
                        <div className="md:h-72 h-[250px] w-full">
                          <Loader />
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-5 md:h-72 h-[250px] w-full overflow-y-scroll md:overflow-auto">
                          {mediaImageData?.media_images.data.map((item: { url: string }, index: number) => {
                            return (
                              <img
                                key={index}
                                onClick={() => setSelectedImage((cur) => (cur === item.url ? "" : item.url))}
                                className={`w-full aspect-video object-cover cursor-pointer ${
                                  selectedImage === item.url ? "border-[3px] border-red-500" : ""
                                }`}
                                src={`https://images.bangladeshfirst.com/smartcrop?width=1600&height=900&format=webp&quality=85&path=${item.url}`}
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
        <Button className="ml-2" variant="outlined" onClick={() => dispatch({ type: "setDialogOpen", payload: false })}>
          Cancel
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
