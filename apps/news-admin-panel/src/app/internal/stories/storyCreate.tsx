import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { FeatureStoryCreate } from "@bfirst/components-stories";
import { Breadcrumbs } from "@bfirst/material-tailwind";
import { Link, useNavigate } from "react-router-dom";

export default function StoryAdd() {
  const navigate = useNavigate();
  const added = () => {
    navigate("/stories");
  };

  const onError = (error: any) => {
    console.log("error", error);
  };

  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between">
          <Breadcrumbs>
            <Link to="/">
              <Icon name="home" variant="text" />
            </Link>
            <Link to="/stories">Stories</Link>
            <Link to="">Create Story</Link>
          </Breadcrumbs>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureStoryCreate onSuccess={added} onError={onError} />
      </HCF.Content>
    </HCF>
  );
}

// import { AutocompleteTag } from "@bfirst/components-autocomplete-tag";
// import Multiselect from "multiselect-react-dropdown";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { Breadcrumb } from "../../components";
// import TinyMceEditor from "../../components/TinyMceEditor";
// import { getImageUrl } from "../../image_utils";
// import { token } from "../../token_utils";

// const baseUrl = "https://backend.bangladeshfirst.com";

// const fetchData = async function () {
//   try {
//     const [authorsRes, categoriesRes, tagsRes, imagesRes] = await Promise.all([
//       fetch(`${baseUrl}/api/v1/authors`, {
//         headers: { Authorization: token },
//       }),
//       fetch(`${baseUrl}/api/v1/categories`, {
//         headers: { Authorization: token },
//       }),
//       fetch(`${baseUrl}/api/v1/tags`, {
//         headers: { Authorization: token },
//       }),
//       fetch(`${baseUrl}/api/v1/media-image-list`, {
//         headers: { Authorization: token },
//       }),
//     ]);

//     const authorsData: any[] = await authorsRes.json();
//     const categoriesData: any[] = await categoriesRes.json();
//     const tagsData: any[] = await tagsRes.json();
//     const imagesList: any[] = await imagesRes.json();

//     return { authorsData, categoriesData, tagsData, imagesList };
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default function StoryCreate() {
//   const [mediaModalToShow, setMediaModalToShow] = useState("upload");
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   // const [text, setText] = useState("");
//   const [body, setBody] = useState("");

//   const [featuredImg, setFeaturedImg] = useState<File | undefined>();
//   const [featuredImgURL, setFeaturedImgURL] = useState("");
//   const [imagesList, setImagesList] = useState([]);

//   const [err, setErr] = useState({ body: "", tags: "", authors: "", categories: "", featuredImg: "" });

//   const [searchTagInput, setSearchTagInput] = useState("");

//   const [tags, setTags] = useState([]);
//   const [selectedTags, setSelectedTags] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [authors, setAuthors] = useState([]);
//   const [selectedAuthors, setSelectedAuthors] = useState([]);

//   const [showAddTagBtn, setShowAddTagBtn] = useState(false);
//   const [shwoModal, setShowModal] = useState(false);
//   const [imgCaption, setImgCation] = useState("");

//   const [lastSearchTime, setLastSearchTime] = useState(0);
//   const debounceDelay = 300;

//   const handleSearch = async function (searchValue: string, searchFor: string) {
//     if (searchFor === "tags") setSearchTagInput(searchValue);

//     const currentTime = Date.now();

//     if (currentTime - lastSearchTime >= debounceDelay) {
//       setLastSearchTime(currentTime);
//       try {
//         const res = await fetch(`${baseUrl}/api/v1/${searchFor}?name=${searchValue}`, {
//           headers: { Authorization: token },
//         });
//         const data = await res.json();
//         if (searchFor === "tags") {
//           const filteredTags = data.data.filter(
//             (item: never) => (item as { name: string }).name.toLowerCase() == searchValue.toLowerCase()
//           );
//           setTags(data.data);

//           if (!filteredTags.length) {
//             setShowAddTagBtn(true);
//           } else {
//             setShowAddTagBtn(false);
//           }
//         }
//         if (searchFor === "authors") setAuthors(data.data);
//         if (searchFor === "categories") setCategories(data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   const handleOutsideClick = function (e: React.MouseEvent<HTMLElement>) {
//     const clickedElement = e.target as HTMLElement;
//     if (clickedElement.id !== "selectTags_input") setShowAddTagBtn(false);
//   };

//   const handleAddTag = async function () {
//     if (!searchTagInput) return;
//     try {
//       const response = await fetch(`${baseUrl}/api/v1/tags`, {
//         method: "POST",
//         headers: {
//           Authorization: token,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name: searchTagInput }),
//       });
//       if (!response.ok) throw new Error("Could not create tag");
//       const data = await response.json();
//       setTags((cur) => [...cur, data.data] as never);
//       setSelectedTags((cur) => [...cur, data.data] as never);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleAddStory = async function (data: any) {
//     /* ==== errors handling ==== */
//     if (!body) {
//       return setErr((cur) => ({ ...cur, body: "Body is required" }));
//     } else {
//       setErr((cur) => ({ ...cur, body: "" }));
//     }
//     if (!selectedTags.length) {
//       return setErr((cur) => ({ ...cur, tags: "Tag is required" }));
//     } else {
//       setErr((cur) => ({ ...cur, tags: "" }));
//     }
//     if (!selectedAuthors.length) {
//       return setErr((cur) => ({ ...cur, authors: "Author is required" }));
//     } else {
//       setErr((cur) => ({ ...cur, authors: "" }));
//     }
//     if (!selectedCategories.length) {
//       return setErr((cur) => ({ ...cur, categories: "Category is required" }));
//     } else {
//       setErr((cur) => ({ ...cur, categories: "" }));
//     }
//     if (!featuredImg) {
//       return setErr((cur) => ({ ...cur, featuredImg: "Featured Image is required" }));
//     } else {
//       setErr((cur) => ({ ...cur, featuredImg: "" }));
//     }

//     /* ======= creating story ======== */
//     const newStory = {
//       title: data.headline,
//       meta: {
//         featured_image: featuredImgURL,
//         /* newsType: data.newsType, */
//         shoulder: data.shoulder,
//         /* subhead: data.subhead, */
//         imageCaption: imgCaption,
//         altheadline: data.altheadline,
//         intro: data.intro,
//       },
//       authors: selectedAuthors.map((author: any) => author?.id),
//       tags: selectedTags.map((tag: any) => tag.id),
//       categories: selectedCategories.map((categroy: any) => categroy.id),
//       content: body,
//     };

//     try {
//       const response = await fetch(`${baseUrl}/api/v1/stories`, {
//         method: "POST",
//         headers: {
//           Authorization: token,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newStory),
//       });

//       if (!response.ok) throw new Error("Could not create story");

//       navigate("/stories");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleEditorChange = function (newContent: string) {
//     setBody(newContent);
//   };

//   const handleFeaturedImgUpload = async function (e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     if (!featuredImg) return setErr((cur) => ({ ...cur, featuredImg: "Featured Image is required" }));

//     const formData = new FormData();
//     formData.append("image", featuredImg);

//     try {
//       const response = await fetch(`${baseUrl}/api/v1/media-upload-image`, {
//         method: "POST",
//         headers: {
//           Authorization: token,
//         },
//         body: formData,
//       });

//       if (!response.ok) throw new Error("Could not upload image");

//       const data = await response.json();

//       setFeaturedImgURL(data.url);
//       setShowModal(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     (async function () {
//       const data = await fetchData();
//       setAuthors((data as any).authorsData.data);
//       setCategories((data as any).categoriesData.data);
//       setTags((data as any).tagsData.data);
//       setImagesList((data as any).imagesList.media_images.data);
//     })();
//   }, []);

//   /* ============ tag creation with enter keypress =========== */
//   // useEffect(() => {
//   //   const handleKeypress = function (e: React.KeyboardEvent) {
//   //     if (e.key === "Enter" && searchTagInput) {
//   //       e.preventDefault();
//   //       handleAddTag();
//   //       (document.querySelector("#selectTags_input") as HTMLInputElement)?.blur();
//   //       setShowAddTagBtn(false);
//   //     }
//   //   };

//   //   window.addEventListener("keypress", handleKeypress as any);
//   //   return function () {
//   //     window.removeEventListener("keypress", handleKeypress as any);
//   //   };
//   // }, [searchTagInput]);

//   return (
//     <div onClick={handleOutsideClick} className="overflow-x-auto flex flex-col h-full">
//       <div className="inline-flex h-10 justify-between items-center px-4 py-2 w-full border-b">
//         <Breadcrumb items={[{ name: "Stories", link: "/stories" }, { name: "Create Story" }]} />
//       </div>
//       <div className="overflow-x-auto p-5 h-full w-full flex flex-col">
//         {/* ====================== pop-up modal start ====================*/}
//         {shwoModal && (
//           <div className="absolute flex items-center justify-center h-screen w-screen bg-black/30 top-0 left-0 z-[999] backdrop-blur-sm">
//             <div className="bg-white h-[90%] rounded-lg overflow-hidden w-[90%]">
//               <div className="bg-gray-200 font-bold py-1 px-4">
//                 <div className="flex justify-between">
//                   <h4>Media Browser</h4>
//                   <button onClick={() => setShowModal(false)} type="button" className="text-xl">
//                     x
//                   </button>
//                 </div>
//                 <div className="text-right mt-2">
//                   <button
//                     onClick={() => setMediaModalToShow("upload")}
//                     type="button"
//                     className={`mr-4 px-2 py-1 rounded-lg ${
//                       mediaModalToShow === "upload" ? "bg-gray-400" : "bg-gray-300"
//                     }`}
//                   >
//                     Upload
//                   </button>
//                   <button
//                     onClick={() => setMediaModalToShow("library")}
//                     type="button"
//                     className={`mr-4 px-2 py-1 rounded-lg ${
//                       mediaModalToShow === "library" ? "bg-gray-400" : "bg-gray-300"
//                     }`}
//                   >
//                     Library
//                   </button>
//                 </div>
//               </div>
//               {mediaModalToShow === "upload" && (
//                 <div className="px-4 mt-4">
//                   <form onSubmit={handleFeaturedImgUpload}>
//                     <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="media">
//                       Upload a new file*
//                     </label>
//                     <input
//                       onChange={(e) => setFeaturedImg(e.target.files?.[0])}
//                       className="mb-3 border-2"
//                       id="media"
//                       name="media"
//                       type="file"
//                     />
//                     <p className="text-sm text-red-700">{err.featuredImg}</p>
//                     <p>File must be less than 10 MB</p>
//                     <p>
//                       Allowed file type: <strong>png, jpg, jpeg, gif</strong>
//                     </p>
//                     <div className="md:w-1/2">
//                       <label htmlFor="imageCaption" className="block text-sm font-medium leading-6 text-gray-900">
//                         Image caption
//                       </label>
//                       <div className="mt-2">
//                         <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus:ring-gray-300 w-full pl-2">
//                           <input
//                             type="text"
//                             name="imageCaption"
//                             id="imageCaption"
//                             className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                             placeholder="Image caption"
//                             onChange={(e) => setImgCation(e.target.value)}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <button type="submit" className="px-3 py-1 bg-gray-300 mt-4 rounded-lg">
//                       Add To Story
//                     </button>
//                   </form>
//                 </div>
//               )}

//               {mediaModalToShow === "library" && <div>LIBRARY</div>}
//             </div>
//           </div>
//         )}
//         {/* ======================= pop-up modal end ===================== */}

//         {/*content*/}
//         <form onSubmit={handleSubmit(handleAddStory)}>
//           <div className="flex-1 w-full pb-6">
//             <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//               {/* ==== shoulder ==== */}
//               <div className="col-span-4">
//                 <label htmlFor="shoulder" className="block text-sm font-medium leading-6 text-gray-900">
//                   Shoulder
//                 </label>
//                 <div className="mt-2">
//                   <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus:ring-gray-300 w-full pl-2">
//                     <input
//                       {...register("shoulder")}
//                       type="text"
//                       name="shoulder"
//                       id="shoulder"
//                       className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                       placeholder="Shoulder"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* ==== headline ==== */}
//               <div className="col-span-4">
//                 <label htmlFor="headline" className="block text-sm font-medium leading-6 text-gray-900">
//                   Headline*
//                 </label>
//                 <div className="mt-2">
//                   <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus:ring-gray-300 w-full pl-2">
//                     <input
//                       {...register("headline", { required: "Headline is required" })}
//                       type="text"
//                       name="headline"
//                       id="headline"
//                       className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                       placeholder="Headline"
//                     />
//                   </div>
//                 </div>
//                 <p className="text-sm text-red-700">{errors.headline && (errors.headline.message as string)}</p>
//               </div>

//               {/* ==== alternative headline ==== */}
//               <div className="col-span-4">
//                 <label htmlFor="altheadline" className="block text-sm font-medium leading-6 text-gray-900">
//                   Alternative Headline
//                 </label>
//                 <div className="mt-2">
//                   <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus:ring-gray-300 w-full pl-2">
//                     <input
//                       {...register("altheadline")}
//                       type="text"
//                       name="altheadline"
//                       id="altheadline"
//                       className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                       placeholder="Alternative Headline"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* ==== author ==== */}
//               <div className="col-span-4">
//                 <label htmlFor="author" className="block text-sm font-medium leading-6 text-gray-900">
//                   Author*
//                 </label>
//                 <Multiselect
//                   options={authors}
//                   displayValue="name"
//                   avoidHighlightFirstOption={true}
//                   onSearch={(searchValue) => handleSearch(searchValue, "authors")}
//                   onSelect={(list) => {
//                     setSelectedAuthors(list);
//                     setErr((cur) => ({ ...cur, authors: "" }));
//                   }}
//                   onRemove={(list) => {
//                     setSelectedAuthors(list);
//                     setErr((cur) => ({ ...cur, authors: "" }));
//                   }}
//                   placeholder="Select Authors"
//                 />
//                 <p className="text-sm text-red-700">{err.authors}</p>
//               </div>

//               {/* ==== intro ===== */}
//               <div className="col-span-4 sm:col-span-full">
//                 <label htmlFor="intro" className="block text-sm font-medium leading-6 text-gray-900">
//                   Stand first*
//                 </label>
//                 <div className="mt-2">
//                   <textarea
//                     {...register("intro", { required: "Intro is required" })}
//                     id="intro"
//                     name="intro"
//                     rows={3}
//                     placeholder="Stand first"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//                 <p className="text-sm text-red-700">{errors.intro && (errors.intro.message as string)}</p>
//               </div>

//               {/* ==== text editor ==== */}
//               <div className="col-span-4 sm:col-span-full">
//                 <label htmlFor="body" className="block text-sm font-medium leading-6 text-gray-900">
//                   Body*
//                 </label>
//                 <div className="mt-2">
//                   <div>
//                     <TinyMceEditor initialValue="" onChange={handleEditorChange} />
//                   </div>
//                 </div>
//                 <p className="text-sm text-red-700">{err.body}</p>
//               </div>

//               {/* ==== tags ==== */}
//               <div className="col-span-4 sm:col-span-full">
//                 <div className="grid grid-cols-6 gap-x-2 sm:gap-x-8">
//                   <div className="col-span-5 sm:col-span-4">
//                     {/* <Multiselect
//                       id="selectTags"
//                       options={tags}
//                       displayValue="name"
//                       onSearch={(searchValue) => handleSearch(searchValue, "tags")}
//                       avoidHighlightFirstOption={true}
//                       selectedValues={selectedTags}
//                       onSelect={(list) => {
//                         setSelectedTags(list);
//                         setErr((cur) => ({ ...cur, tags: "" }));
//                       }}
//                       onRemove={(list) => {
//                         setSelectedTags(list);
//                         setErr((cur) => ({ ...cur, tags: "" }));
//                       }}
//                       placeholder="Select Tags"
//                       closeOnSelect={true}
//                     /> */}

//                     <AutocompleteTag
//                       label="Choose Tag"
//                       items={tags}
//                       onSearch={(search) => {
//                         handleSearch(search, "tags");
//                       }}
//                       itemsSelected={(items) => {
//                         console.log(items);
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <p className="text-sm text-red-700">{err.tags}</p>
//               </div>

//               {/* ==== category ==== */}
//               <div className="col-span-4">
//                 <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
//                   Category*
//                 </label>
//                 <Multiselect
//                   options={categories}
//                   displayValue="name"
//                   avoidHighlightFirstOption={true}
//                   onSearch={(searchValue) => handleSearch(searchValue, "categories")}
//                   onSelect={(list) => {
//                     setSelectedCategories(list);
//                     setErr((cur) => ({ ...cur, categories: "" }));
//                   }}
//                   onRemove={(list) => {
//                     setSelectedCategories(list);
//                     setErr((cur) => ({ ...cur, categories: "" }));
//                   }}
//                   placeholder="Select Categories"
//                   closeOnSelect={true}
//                 />
//                 <p className="text-sm text-red-700">{err.categories}</p>
//               </div>

//               {/* ==== publish date ==== */}
//               {/* <div className="col-span-full">
//                 <label htmlFor="publish-date" className="block text-sm font-medium leading-6 text-gray-900">
//                   Publish Date*
//                 </label>
//                 <div>
//                   <input
//                     {...register("publishDate", { required: "Publish date is required" })}
//                     className="rounded-md border border-gray-300"
//                     type="datetime-local"
//                   />
//                 </div>
//                 <p className="text-sm text-red-700">{errors.publishDate && (errors.publishDate.message as string)}</p>
//               </div> */}

//               {/* ==== news image ==== */}
//               <div className="col-span-full">
//                 <label htmlFor="publish-date" className="block text-sm font-medium leading-6 text-gray-900">
//                   Featured Image*
//                 </label>
//                 <button onClick={() => setShowModal(true)} type="button" className="px-2 py-1 rounded-md bg-black/10">
//                   Browse
//                 </button>
//                 <p className="text-sm text-red-700">{err.featuredImg}</p>
//                 <img className="md:w-1/2 w-full mt-4" src={getImageUrl(featuredImgURL)} alt="" />
//               </div>
//             </div>
//           </div>
//           <div className="h-10 pt-5 flex items-center justify-end gap-x-6 w-full border-t  fixed bottom-0 pb-5 bg-white z-40 right-10">
//             <button
//               onClick={() => navigate("/stories")}
//               type="button"
//               className="text-sm font-semibold bg-white leading-6 text-gray-900"
//             >
//               Cancel
//             </button>
//             <button type="submit" className="btn btn-sm btn-accent">
//               Publish
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
