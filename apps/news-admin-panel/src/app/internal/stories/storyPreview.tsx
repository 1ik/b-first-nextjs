import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Breadcrumb } from "../../components";
import TinyMceEditor from "../../components/TinyMceEditor";
import { token } from "../../token_utils";

const baseUrl = "https://backend.bangladeshfirst.com";

const fetchData = async function (storyId: any) {
  try {
    const [storyRes, authorsRes, categoriesRes, tagsRes, imagesRes] = await Promise.all([
      fetch(`${baseUrl}/api/v1/stories/${storyId}`, {
        headers: { Authorization: token },
      }),
      fetch(`${baseUrl}/api/v1/authors`, {
        headers: { Authorization: token },
      }),
      fetch(`${baseUrl}/api/v1/categories`, {
        headers: { Authorization: token },
      }),
      fetch(`${baseUrl}/api/v1/tags`, {
        headers: { Authorization: token },
      }),
      fetch(`${baseUrl}/api/v1/media-image-list`, {
        headers: { Authorization: token },
      }),
    ]);

    const storyData: any = await storyRes.json();
    const authorsData: any[] = await authorsRes.json();
    const categoriesData: any[] = await categoriesRes.json();
    const tagsData: any[] = await tagsRes.json();
    const imagesList: any[] = await imagesRes.json();

    return { storyData, authorsData, categoriesData, tagsData, imagesList };
  } catch (error) {
    console.log(error);
  }
};

export default function StoryPreview() {
  const handleStoryDelete = async function (id: any) {
    if (!window.confirm("Do you want to delete the story ?")) return;
    try {
      const response = await fetch(`https://backend.bangladeshfirst.com/api/v1/stories/${id}`, {
        method: "DELETE",
        headers: { Authorization: token },
      });
      if (!response.ok) throw new Error("Could not delete the story");
      navigate("/stories");
    } catch (error) {
      console.log(error);
    }
  };

  const { storyId } = useParams();
  const [mediaModalToShow, setMediaModalToShow] = useState("upload");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [story, setStory] = useState({});
  const [body, setBody] = useState("");

  const [featuredImg, setFeaturedImg] = useState<File | undefined>();
  const [featuredImgURL, setFeaturedImgURL] = useState("");
  const [imagesList, setImagesList] = useState([]);

  const [err, setErr] = useState({ body: "", tags: "", authors: "", categories: "", featuredImg: "" });

  const [searchTagInput, setSearchTagInput] = useState("");

  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  const [showAddTagBtn, setShowAddTagBtn] = useState(false);
  const [shwoModal, setShowModal] = useState(false);

  const handleSearch = function (searchValue: string) {
    setSearchTagInput(searchValue);
    const existingTag = tags.find((tag) => (tag as { name: string }).name === searchValue);
    if (!existingTag && searchValue.trim() !== "") {
      setShowAddTagBtn(true);
    } else {
      setShowAddTagBtn(false);
    }
  };

  const handleEditorChange = function (newContent: string) {
    setBody(newContent);
  };

  const handleOutsideClick = function (e: React.MouseEvent<HTMLElement>) {
    const clickedElement = e.target as HTMLElement;
    if (clickedElement.id !== "selectTags_input") setShowAddTagBtn(false);
  };

  const handleAddTag = async function () {
    try {
      const response = await fetch(`${baseUrl}/api/v1/tags`, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: searchTagInput }),
      });
      if (!response.ok) throw new Error("Could not create tag");
      const data = await response.json();
      setTags((cur) => [...cur, data.data] as never);
      setSelectedTags((cur) => [...cur, data.data] as never);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateStory = async function (data: any) {
    /* ======= updating story ======== */
    const updateStory = {
      title: data.headline,
      meta: {
        featured_image: featuredImgURL,
        /* newsType: data.newsType, */
        shoulder: data.shoulder,
        subhead: data.subhead,
        altheadline: data.altheadline,
        intro: data.intro,
      },
      authors: selectedAuthors.map((author: any) => author?.id),
      tags: selectedTags.map((tag: any) => tag.id),
      categories: selectedCategories.map((categroy: any) => categroy.id),
      content: body,
    };

    try {
      const response = await fetch(`${baseUrl}/api/v1/stories/${storyId}`, {
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateStory),
      });

      if (!response.ok) throw new Error("Could not update story");

      navigate("/stories");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFeaturedImgUpload = async function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!featuredImg) return setErr((cur) => ({ ...cur, featuredImg: "Featured Image is required" }));

    const formData = new FormData();
    formData.append("image", featuredImg);

    try {
      const response = await fetch(`${baseUrl}/api/v1/media-upload-image`, {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formData,
      });

      if (!response.ok) throw new Error("Could not upload image");

      const data = await response.json();

      setFeaturedImgURL(data.url);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async function () {
      const data = await fetchData(storyId);
      setStory((data as any).storyData);
      setAuthors((data as any).authorsData.data);
      setCategories((data as any).categoriesData.data);
      setTags((data as any).tagsData.data);
      setSelectedTags((data as any).storyData?.story.tags);
      setSelectedAuthors((data as any).storyData?.story.authors);
      setSelectedCategories((data as any).storyData?.story.categories);
      setImagesList((data as any).imagesList.media_images.data);
      setBody((data as any).storyData.story.content);
      setFeaturedImgURL((data as any).storyData.story.meta.featured_image);
      setLoading(false);
    })();
  }, []);

  if (loading) return <div>loading.........</div>;

  return (
    <div onClick={handleOutsideClick} className="overflow-x-auto flex flex-col h-full">
      <div className="inline-flex h-10 justify-between items-center px-4 py-2 w-full border-b">
        <Breadcrumb items={[{ name: "Stories", link: "/stories" }, { name: "Edit Story" }]} />
      </div>
      <div className="overflow-x-auto p-5 h-full w-full flex flex-col">
        {/* ====================== pop-up modal start ====================*/}
        {shwoModal && (
          <div className="absolute flex items-center justify-center h-screen w-screen bg-black/30 top-0 left-0 z-[999] backdrop-blur-sm">
            <div className="bg-white h-[90%] rounded-lg overflow-hidden w-[90%]">
              <div className="bg-gray-200 font-bold py-1 px-4">
                <div className="flex justify-between">
                  <h4>Media Browser</h4>
                  <button onClick={() => setShowModal(false)} type="button" className="text-xl">
                    x
                  </button>
                </div>
                <div className="text-right mt-2">
                  <button
                    onClick={() => setMediaModalToShow("upload")}
                    type="button"
                    className={`mr-4 px-2 py-1 rounded-lg ${
                      mediaModalToShow === "upload" ? "bg-gray-400" : "bg-gray-300"
                    }`}
                  >
                    Upload
                  </button>
                  <button
                    onClick={() => setMediaModalToShow("library")}
                    type="button"
                    className={`mr-4 px-2 py-1 rounded-lg ${
                      mediaModalToShow === "library" ? "bg-gray-400" : "bg-gray-300"
                    }`}
                  >
                    Library
                  </button>
                </div>
              </div>
              {mediaModalToShow === "upload" && (
                <div className="px-4 mt-4">
                  <form onSubmit={handleFeaturedImgUpload}>
                    <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="media">
                      Upload a new file*
                    </label>
                    <input
                      onChange={(e) => setFeaturedImg(e.target.files?.[0])}
                      className="mb-3 border-2"
                      id="media"
                      name="media"
                      type="file"
                    />
                    <p className="text-sm text-red-700">{err.featuredImg}</p>
                    <p>File must be less than 10 MB</p>
                    <p>
                      Allowed file type: <strong>png, jpg, jpeg, gif</strong>
                    </p>
                    <button className="px-3 py-1 bg-gray-300 mt-4 rounded-lg">Next</button>
                  </form>
                </div>
              )}

              {mediaModalToShow === "library" && <div>LIBRARY</div>}
            </div>
          </div>
        )}
        {/* ======================= pop-up modal end ===================== */}

        {/*content*/}
        <form onSubmit={handleSubmit(handleUpdateStory)}>
          <div className="flex-1 w-full pb-6">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* ==== news type ==== */}
              {/* <div className="col-span-full">
                <label htmlFor="news-type" className="block text-sm font-medium leading-6 text-gray-900">
                  News Type*
                </label>
                <select
                defaultValue= {(story as {story:any}).story.meta.newsType}
                 {...register("newsType")} className="block rounded-md border border-gray-300">
                  <option value="print">Print</option>
                  <option value="online">Online</option>
                </select>
                <p className="text-sm text-red-700">{errors.newsType && (errors.newsType.message as string)}</p>
              </div> */}

              {/* ==== shoulder ==== */}
              <div className="col-span-4">
                <label htmlFor="shoulder" className="block text-sm font-medium leading-6 text-gray-900">
                  Shoulder
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus:ring-gray-300 w-full pl-2">
                    <input
                      defaultValue={(story as { story: any }).story.meta.shoulder}
                      {...register("shoulder")}
                      type="text"
                      name="shoulder"
                      id="shoulder"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Shoulder"
                    />
                  </div>
                </div>
              </div>

              {/* ==== headline ==== */}
              <div className="col-span-4">
                <label htmlFor="headline" className="block text-sm font-medium leading-6 text-gray-900">
                  Headline*
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus:ring-gray-300 w-full pl-2">
                    <input
                      defaultValue={(story as { story: any }).story.title}
                      {...register("headline")}
                      type="text"
                      name="headline"
                      id="headline"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Headline"
                    />
                  </div>
                </div>
                <p className="text-sm text-red-700">{errors.headline && (errors.headline.message as string)}</p>
              </div>

              {/* ==== sub-head ==== */}
              <div className="col-span-4">
                <label htmlFor="subhead" className="block text-sm font-medium leading-6 text-gray-900">
                  Sub head
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus:ring-gray-300 w-full pl-2">
                    <input
                      defaultValue={(story as { story: any }).story.meta.subhead}
                      {...register("subhead")}
                      type="text"
                      name="subhead"
                      id="subhead"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Sub Head"
                    />
                  </div>
                </div>
              </div>

              {/* ==== alternative headline ==== */}
              <div className="col-span-4">
                <label htmlFor="altheadline" className="block text-sm font-medium leading-6 text-gray-900">
                  Alternative Headline
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus:ring-gray-300 w-full pl-2">
                    <input
                      defaultValue={(story as { story: any }).story.meta.altheadline}
                      {...register("altheadline")}
                      type="text"
                      name="altheadline"
                      id="altheadline"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Alternative Headline"
                    />
                  </div>
                </div>
              </div>

              {/* ==== author ==== */}
              <div className="col-span-4">
                <label htmlFor="author" className="block text-sm font-medium leading-6 text-gray-900">
                  Author*
                </label>
                <Multiselect
                  options={authors}
                  displayValue="name"
                  avoidHighlightFirstOption={true}
                  onSelect={(list) => {
                    setSelectedAuthors(list);
                    setErr((cur) => ({ ...cur, authors: "" }));
                  }}
                  onRemove={(list) => {
                    setSelectedAuthors(list);
                    setErr((cur) => ({ ...cur, authors: "" }));
                  }}
                  placeholder="Select Authors"
                  selectedValues={selectedAuthors}
                />
                <p className="text-sm text-red-700">{err.authors}</p>
              </div>

              {/* ==== intro ===== */}
              <div className="col-span-4 sm:col-span-full">
                <label htmlFor="intro" className="block text-sm font-medium leading-6 text-gray-900">
                  Intro*
                </label>
                <div className="mt-2">
                  <textarea
                    defaultValue={(story as { story: any }).story.meta.intro}
                    {...register("intro")}
                    id="intro"
                    name="intro"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="text-sm text-red-700">{errors.intro && (errors.intro.message as string)}</p>
              </div>

              {/* ==== text editor ==== */}
              <div className="col-span-4 sm:col-span-full">
                <label htmlFor="body" className="block text-sm font-medium leading-6 text-gray-900">
                  Body*
                </label>
                <div className="mt-2">
                  <div>
                    {/* <Editor
                    initialValue={(story as {story:any}).story.content}
                      apiKey="pi5pfn04bb6lqbsylq9ia36vjdpv9ffaedner0xk14tr0zl0"
                      onEditorChange={(newValue, editor) => {
                        setBody(newValue);
                        setText(editor.getContent({ format: "text" }));
                      }}
                      init={{
                        plugins:
                          "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
                        toolbar:
                          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                        file_picker_callback: (callback, value, meta) => {
                          const input = document.createElement("input");
                          input.setAttribute("type", "file");
                          input.setAttribute("accept", "image/*");

                          input.addEventListener("change", (e: any) => {
                            if (!e.target) return;
                            const file = e.target.files[0];

                            const reader = new FileReader();

                            reader.addEventListener("load", async function () {
                              const base64image = reader.result as string;
                              callback(base64image, {title: file.name})
                            });
                            reader.readAsDataURL(file);
                          });

                          input.click();
                        },
                        tinycomments_mode: "embedded",
                        tinycomments_author: "Author name",
                        mergetags_list: [
                          { value: "First.Name", title: "First Name" },
                          { value: "Email", title: "Email" },
                        ],
                      }}
                    /> */}
                    <TinyMceEditor onChange={handleEditorChange} initialValue={body} />
                  </div>
                </div>
                <p className="text-sm text-red-700">{err.body}</p>
              </div>

              {/* ==== tags ==== */}
              <div className="col-span-4 sm:col-span-full">
                <label htmlFor="tags" className="block text-sm font-medium leading-6 text-gray-900">
                  Tags*
                </label>
                <div className="grid grid-cols-6 gap-x-2 sm:gap-x-8">
                  <div className="col-span-5 sm:col-span-4">
                    <Multiselect
                      id="selectTags"
                      options={tags}
                      displayValue="name"
                      onSearch={handleSearch}
                      avoidHighlightFirstOption={true}
                      selectedValues={selectedTags}
                      onSelect={(list) => {
                        setSelectedTags(list);
                        setErr((cur) => ({ ...cur, tags: "" }));
                      }}
                      onRemove={(list) => {
                        setSelectedTags(list);
                        setErr((cur) => ({ ...cur, tags: "" }));
                      }}
                      placeholder="Select Tags"
                    />
                  </div>
                  {showAddTagBtn && (
                    <button
                      onClick={handleAddTag}
                      className="font-medium rounded-md col-span-1 p-1 border-2 bg-black/10"
                      type="button"
                    >
                      + <span className="hidden md:inline-block">Add Tag</span>
                    </button>
                  )}
                </div>
                <p className="text-sm text-red-700">{err.tags}</p>
              </div>

              {/* ==== category ==== */}
              <div className="col-span-4">
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                  Category*
                </label>
                <Multiselect
                  options={categories}
                  displayValue="name"
                  avoidHighlightFirstOption={true}
                  onSelect={(list) => {
                    setSelectedCategories(list);
                    setErr((cur) => ({ ...cur, categories: "" }));
                  }}
                  onRemove={(list) => {
                    setSelectedCategories(list);
                    setErr((cur) => ({ ...cur, categories: "" }));
                  }}
                  placeholder="Select Categories"
                  selectedValues={selectedCategories}
                />
                <p className="text-sm text-red-700">{err.categories}</p>
              </div>

              {/* ==== publish date ==== */}
              {/* <div className="col-span-full">
                <label htmlFor="publish-date" className="block text-sm font-medium leading-6 text-gray-900">
                  Publish Date*
                </label>
                <div>
                  <input
                    {...register("publishDate", { required: "Publish date is required" })}
                    className="rounded-md border border-gray-300"
                    type="datetime-local"
                  />
                </div>
                <p className="text-sm text-red-700">{errors.publishDate && (errors.publishDate.message as string)}</p>
              </div> */}

              {/* ==== news image ==== */}
              <div className="col-span-full">
                <label htmlFor="publish-date" className="block text-sm font-medium leading-6 text-gray-900">
                  Featured Image*
                </label>
                <button onClick={() => setShowModal(true)} type="button" className="px-2 py-1 rounded-md bg-black/10">
                  Browse
                </button>
                <p className="text-sm text-red-700">{err.featuredImg}</p>
                <img
                  className="md:w-1/2 w-full mt-4"
                  src={`https://bfirst.sgp1.cdn.digitaloceanspaces.com/${featuredImgURL}`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="h-10 pt-5 flex items-center justify-end gap-x-6 w-full border-t border-gray-200">
            <button
              onClick={() => navigate("/stories")}
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-sm btn-accent">
              Update
            </button>
            <button
              type="button"
              onClick={() => handleStoryDelete(storyId)}
              className="btn btn-sm text-white bg-red-600"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
