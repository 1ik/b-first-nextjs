import { useGet, usePost } from "@bfirst/api-client";
import { HCF } from "@bfirst/components-layout";
import { MultiselectSearch } from "@bfirst/components-multiselect-search";
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
import { useNavigate } from "react-router-dom";

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
  btnLabel: string;
}

export function StoryForm({ btnLabel, onSubmit, loading, isError, defaultData }: StoryFormProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [error, setError] = useState({ authors: "", tags: "", categories: "", body: "", featuredImg: "" });
  const [body, setBody] = useState(defaultData?.story.content || "");
  const [featuredImg, setFeaturedImg] = useState<undefined | File>();
  const [featuredImgUrl, setFeaturedImgUrl] = useState(defaultData?.story.meta.featured_image || "");
  const [search, setSearch] = useState({ authors: "", tags: "", categories: "" });
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const { request, isSuccess, data: uploadImageData } = usePost(`api/v1/media-upload-image`);
  const { requestAsync: tagRequestAsync } = usePost(`api/v1/tags`);
  const { data: authorsData } = useGet(`api/v1/authors?name=${search.authors}`);
  const { data: tagsData } = useGet(`api/v1/tags?name=${search.tags}`);
  const { data: categoriesData } = useGet(`api/v1/categories?name=${search.categories}`);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleDialogOpen = () => setDialogOpen((cur) => !cur);
  const handleUploadFeaturedImg = () => {
    if (!featuredImgUrl && !featuredImg) {
      return;
    } else if (featuredImg) {
      const formData = new FormData();
      formData.append("image", featuredImg);
      request(formData);
    }
    setDialogOpen(false);
  };
  const handleAddTag = async (searchValue: string) => {
    const { data } = await tagRequestAsync({ name: searchValue });
    return data.data;
  };

  let debounce: string | number | NodeJS.Timeout | undefined;
  const debounceSearch = function (callback: () => void) {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      callback();
    }, 500);
  };

  const onValidate = function (data: Inputs) {
    if (!body) setError((cur) => ({ ...cur, body: "Body is required" }));
    if (!featuredImgUrl) return setError((cur) => ({ ...cur, featuredImg: "Featured Image is required" }));
    if (!selectedAuthors.length) return setError((cur) => ({ ...cur, authors: "Author is required" }));
    if (!selectedTags.length) return setError((cur) => ({ ...cur, tags: "Tag is required" }));
    if (!selectedCategories.length) return setError((cur) => ({ ...cur, categories: "Category is required" }));

    const story = {
      title: data.headline,
      meta: {
        featured_image: featuredImgUrl,
        shoulder: data.shoulder,
        imageCaption: data.imageCaption || defaultData?.story.meta.imageCaption,
        altheadline: data.altheadline,
        intro: data.standfirst,
      },
      authors: selectedAuthors.map((author) => (author as { id: number }).id),
      tags: selectedTags.map((tag) => (tag as { id: number }).id),
      categories: selectedCategories.map((category) => (category as { id: number }).id),
      content: body,
    };

    onSubmit(story);
  };

  useEffect(() => {
    if (isSuccess) {
      setFeaturedImgUrl(uploadImageData?.data.url);
      setDialogOpen(false);
    }
  }, [isSuccess, uploadImageData]);

  return (
    <form onSubmit={handleSubmit(onValidate)} className="h-full">
      <HCF>
        <HCF.Content>
          <CardBody className="flex flex-col gap-4">
            {/* ========== shoulder ========= */}
            <Input defaultValue={defaultData?.story.meta.shoulder} {...register("shoulder")} label="Shoulder" />

            {/* ========== headline ========== */}
            <div>
              <Input
                defaultValue={defaultData?.story.title}
                {...register("headline", { required: "A headline is required" })}
                label="Headline*"
              />
              <p className="text-xs p-1 font-light">{errors.headline && errors.headline.message}</p>
            </div>

            {/* ======== alt headline ======== */}
            <Input
              defaultValue={defaultData?.story.meta.altheadline}
              {...register("altheadline")}
              label="Alternative Headline"
            />

            {/* ========== authors ========== */}
            <div>
              <MultiselectSearch
                label="Authors*"
                items={authorsData?.data}
                onSearch={(s) => debounceSearch(() => setSearch((cur) => ({ ...cur, authors: s })))}
                itemsSelected={(i) => {
                  setSelectedAuthors(i as never);
                  setError((cur) => ({ ...cur, authors: "" }));
                }}
                defaultValue={defaultData?.story.authors}
              />
              <p className="text-xs p-1 font-light">{error.authors}</p>
            </div>

            {/* ========== stand first (intro) ========= */}
            <div>
              <Textarea
                defaultValue={defaultData && defaultData?.story.meta.intro}
                {...register("standfirst", { required: "A stand first is required" })}
                label="Stand First*"
                className="focus:ring-0"
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
                defaultValue={defaultData && defaultData.story.content}
              />
              <p className="text-xs p-1 font-light">{error.body}</p>
            </div>

            {/* ========== tags ========== */}
            <div>
              <MultiselectSearch
                label="Tags*"
                items={tagsData?.data}
                onSearch={(s) => debounceSearch(() => setSearch((cur) => ({ ...cur, tags: s })))}
                itemsSelected={(i) => {
                  setSelectedTags(i as never);
                  setError((cur) => ({ ...cur, tags: "" }));
                }}
                onAddItem={handleAddTag}
                defaultValue={defaultData && defaultData.story.tags}
              />
              <p className="text-xs p-1 font-light">{error.tags}</p>
            </div>

            {/* ========== categories ========== */}
            <div>
              <MultiselectSearch
                label="Categories*"
                items={categoriesData?.data}
                onSearch={(s) => debounceSearch(() => setSearch((cur) => ({ ...cur, categories: s })))}
                itemsSelected={(i) => {
                  setSelectedCategories(i as never);
                  setError((cur) => ({ ...cur, categories: "" }));
                }}
                defaultValue={defaultData && defaultData.story.categories}
              />
              <p className="text-xs p-1 font-light">{error.categories}</p>
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
                    <Input
                      {...register("imageCaption")}
                      defaultValue={defaultData?.story.meta.imageCaption}
                      label="Image Caption"
                    />
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
          <Button type="button" variant="outlined" onClick={() => navigate("/stories")}>
            Cancel
          </Button>
          <Button loading={loading} type="submit">
            {btnLabel}
          </Button>
        </HCF.Footer>
      </HCF>
    </form>
  );
}