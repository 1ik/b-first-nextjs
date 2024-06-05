import { useGet, usePost } from "@bfirst/api-client";
import { HCF } from "@bfirst/components-layout";
import { MultiselectSearch } from "@bfirst/components-multiselect-search";
import { TinymceEditor } from "@bfirst/components-tinymce-editor";
import { Button, CardBody, Input, Textarea } from "@bfirst/material-tailwind";
import { useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EmbedRelatedNews from "./EmbedRelatedNews";
import MediaBrowser from "./MediaBrowser";
import EmbedLink from "./EmbedLink";
import { getImageUrl } from "@bfirst/utilities";

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

export interface StateInterface {
  dialogOpen: boolean;
  openFrom: string;
}

const initialState: StateInterface = {
  dialogOpen: false,
  openFrom: "",
};

const reducer = function (curState: StateInterface, action: { type: string; payload?: string | boolean }) {
  switch (action.type) {
    case "setDialogOpen":
      return { ...curState, dialogOpen: (action.payload as boolean) || !curState.dialogOpen };
    case "setOpenFrom":
      return { ...curState, openFrom: action.payload as string };
    default:
      return { ...curState };
  }
};

export function StoryForm({ btnLabel, onSubmit, loading, isError, defaultData }: StoryFormProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [isOpenEmbed, setIsOpenEmbed] = useState(false);
  const [isOpenEmbedLink, setIsOpenEmbedLink] = useState(false);
  const [error, setError] = useState({ authors: "", tags: "", categories: "", body: "", featuredImg: "" });
  const [body, setBody] = useState(defaultData?.story.content || "");
  const [featuredImgUrl, setFeaturedImgUrl] = useState(defaultData?.story.meta.featured_image || "");
  const [search, setSearch] = useState({ authors: "", tags: "", categories: "" });
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

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
                dispatch={dispatch}
                onOpenEmbed={setIsOpenEmbed}
                onOpenEmbedLink={setIsOpenEmbedLink}
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

            {/* ========== media browser ======= */}
            <div>
              <Button
                variant="gradient"
                onClick={() => {
                  dispatch({ type: "setDialogOpen" });
                  dispatch({ type: "setOpenFrom", payload: "storyForm" });
                }}
              >
                Browse
              </Button>
            </div>
            <MediaBrowser
              defaultData={defaultData}
              register={register}
              state={state}
              dispatch={dispatch}
              featuredImgUrl={featuredImgUrl}
              onFeaturedImgUrl={setFeaturedImgUrl}
            />

            <div>{featuredImgUrl && <img src={`${getImageUrl(featuredImgUrl)}`} alt="Featured_Image" />}</div>

            {/* ============== modal for related news embed ============ */}
            <EmbedRelatedNews open={isOpenEmbed} onOpen={setIsOpenEmbed} />
            <EmbedLink open={isOpenEmbedLink} onOpen={setIsOpenEmbedLink} />
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
