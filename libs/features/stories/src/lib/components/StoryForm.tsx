import { usePost } from "@bfirst/api-client";
import { HCF } from "@bfirst/components-layout";
import { TinymceEditor } from "@bfirst/components-tinymce-editor";
import {
  Button,
  CardBody,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
  Typography,
} from "@bfirst/material-tailwind";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export type Inputs = {
  shoulder?: string;
  headline: string;
  altheadline?: string;
  standfirst: string;
  imageCaption?: string;
};

export type StoryInputs = {
  title: string;
  meta: {
    featured_image: string;
    shoulder?: string;
    imageCaption?: string;
    altheadline?: string;
    intro: string;
  };
  content: string;
};

export interface StoryFormProps {
  onSubmit: (inputs: StoryInputs) => void;
  isError: boolean;
  loading: boolean;
  defaultData?: any;
}

export function StoryForm({ onSubmit, loading, isError, defaultData }: StoryFormProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [error, setError] = useState({ body: "", featuredImg: "" });
  const [body, setBody] = useState("");
  const [featuredImg, setFeaturedImg] = useState<undefined | File>();
  const [featuredImgUrl, setFeaturedImgUrl] = useState("");

  const { request, isSuccess, data } = usePost(`api/v1/media-upload-image`);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleDialogOpen = () => setDialogOpen((cur) => !cur);
  const handleUploadFeaturedImg = () => {
    if (!featuredImg) return;

    const formData = new FormData();
    formData.append("image", featuredImg);
    request(formData);
  };

  const onValidate = function (data: Inputs) {
    if (!body) setError((cur) => ({ ...cur, body: "Body is required" }));
    if (!featuredImgUrl) return setError((cur) => ({ ...cur, featuredImg: "Featured Image is required" }));

    const story = {
      title: data.headline,
      meta: {
        featured_image: featuredImgUrl,
        shoulder: data.shoulder,
        imageCaption: data.imageCaption,
        altheadline: data.altheadline,
        intro: data.standfirst,
      },
      content: body,
    };

    onSubmit(story);
  };

  useEffect(() => {
    if (isSuccess) {
      setFeaturedImgUrl(data?.data.url);
      setDialogOpen(false);
    }
  }, [isSuccess, data]);

  return (
    <form onSubmit={handleSubmit(onValidate)} className="h-full">
      <HCF>
        <HCF.Content>
          <CardBody className="flex flex-col gap-4">
            {/* ========== shoulder ========= */}
            <Input defaultValue={defaultData && defaultData.name} {...register("shoulder")} label="Shoulder" />

            {/* ========== headline ========== */}
            <div>
              <Input
                defaultValue={defaultData && defaultData.name}
                {...register("headline", { required: "A headline is required" })}
                label="Headline*"
              />
              <p className="text-xs p-1 font-light">{errors.headline && errors.headline.message}</p>
            </div>

            {/* ======== alt headline ======== */}
            <Input
              defaultValue={defaultData && defaultData.name}
              {...register("altheadline")}
              label="Alternative Headline"
            />

            {/* ========== stand first (intro) ========= */}
            <div>
              <Textarea
                defaultValue={defaultData && defaultData.name}
                {...register("standfirst", { required: "A stand first is required" })}
                label="Stand First*"
                variant="outlined"
              />
              <p className="text-xs p-1 font-light">{errors.standfirst && errors.standfirst.message}</p>
            </div>

            {/* ======== text editor (body) ========= */}
            <div>
              <TinymceEditor
                label="Body*"
                onChange={(content) => {
                  setBody(content);
                  setError((cur) => ({ ...cur, body: "" }));
                }}
              />
              <p className="text-xs p-1 font-light">{error.body}</p>
            </div>

            {/* ========== featured image ========= */}
            <div>
              <p>Featured Image*</p>
              <Button onClick={handleDialogOpen} variant="gradient">
                Browse
              </Button>
              <p className="text-xs p-1 font-light">{error.featuredImg}</p>
            </div>
            <div>
              {featuredImgUrl && (
                <img
                  src={`https://images.bangladeshfirst.com/resize?width=1600&height=900&format=webp&quality=85&path=${featuredImgUrl}`}
                  alt="Featured_Image"
                />
              )}
            </div>

            {/* ========== media browser ======= */}
            <Dialog open={dialogOpen} handler={handleDialogOpen} size="xl">
              <DialogHeader className="flex justify-between">
                <Typography>Media Browser</Typography>
              </DialogHeader>
              <DialogBody>
                <div className="flex flex-col gap-y-4">
                  <div className="lg:w-2/3">
                    <Input
                      onChange={(e) => setFeaturedImg(e.target.files?.[0])}
                      variant="standard"
                      label="Featured Image*"
                      type="file"
                    />
                    <Typography className="my-2">
                      Allowed file type: <span className="font-bold">png, jpg, jpeg, gif</span>
                    </Typography>
                  </div>
                  <div className="lg:w-2/3">
                    <Input {...register("imageCaption")} label="Image Caption" />
                  </div>
                </div>
              </DialogBody>
              <DialogFooter>
                <Button onClick={handleUploadFeaturedImg}>Add to News</Button>
                <Button className="ml-2" variant="outlined" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
              </DialogFooter>
            </Dialog>
          </CardBody>
        </HCF.Content>
        <HCF.Footer className="flex w-full px-3 flex-row justify-end">
          <Button loading={loading} type="submit">
            Submit
          </Button>
        </HCF.Footer>
      </HCF>
    </form>
  );
}
