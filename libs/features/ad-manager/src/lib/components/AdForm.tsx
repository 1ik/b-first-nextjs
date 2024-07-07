import { HCF } from "@bfirst/components-layout";
import { CardBody, Input, Button } from "@bfirst/material-tailwind";
import { useState } from "react";
import { useForm } from "react-hook-form";
export type Inputs = {
  file?: any;
  category: string;
  position?: string;
};
const items = [
  {
    page: "Home page",
    ads: [
      {
        position: "banner 1",
      },
      {
        position: "banner 2",
      },
      {
        position: "banner 3",
      },
      {
        position: "banner 4",
      },
      {
        position: "banner 5",
      },
      {
        position: "banner 6",
      },
      {
        position: "banner 7",
      },
      {
        position: "banner 8",
      },
      {
        position: "square 1",
      },
    ],
  },
  {
    page: "Categoy page",
    ads: [
      {
        position: "banner 1",
      },
      {
        position: "square 1",
      },
      {
        position: "square 2",
      },
      {
        position: "square 3",
      },
    ],
  },
  {
    page: "Latest page",
    ads: [
      {
        position: "banner 1",
      },
      {
        position: "banner 1",
      },
      {
        position: "square 1",
      },
      {
        position: "banner 1",
      },
    ],
  },
  {
    page: "Trending page",
    ads: [
      {
        position: "banner 1",
      },
      {
        position: "banner 1",
      },
      {
        position: "banner 1",
      },
    ],
  },
];

export function AdForm() {
  const [page, setpage] = useState("");
  const [selectedImageFile, setSelectedImageFile] = useState<any>(null);
  const [error, setError] = useState({ location: "", positon: "", file: "" });
  const [selectedUploadImage, setSelectedUploadImage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleFileChange = (event) => {
    console.log(event);

    const file = event.target.files[0];

    if (file) {
      setSelectedImageFile(file);
      setSelectedUploadImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    if (!selectedImageFile) setError((cur) => ({ ...cur, body: "File is required" }));

    console.log({
      category: data.category,
      position: data.position,
      iamge_url: selectedImageFile,
    });
  };

  const handleChange = (e) => {
    setpage(e.target.value);
  };

  return (
    <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
      <HCF>
        <HCF.Content>
          <CardBody className="flex flex-col gap-4">
            <div>
              <select className="w-full" {...register("category")} onChange={handleChange}>
                <option></option>
                {items.map((item) => (
                  <option value={item.page}>{item.page}</option>
                ))}
              </select>
            </div>
            <div>
              <select className="w-full" {...register("position")}>
                <option></option>
                {items.map(
                  (item) =>
                    item.page === page &&
                    item.ads.map((item2) => <option value={item2.position}>{item2.position}</option>)
                )}
              </select>
            </div>

            <label className="md:w-80 flex flex-col items-center p-4 bg-[#e1e2e4] rounded-lg shadow-lg cursor-pointer hover:bg-blue hover:shadow-xl">
              {selectedUploadImage ? (
                <img src={selectedUploadImage} alt="selected file" className="rounded-lg" />
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
                    strokeWidth="0.00027963"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="0.223704"
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
                  <span>Upload Ad</span>
                </div>
              )}
              <Input
                className="hidden"
                type="file"
                {...register("file", { required: "File is required" })}
                onChange={handleFileChange}
              />
            </label>
          </CardBody>
        </HCF.Content>
        <HCF.Footer className="flex w-full px-3 flex-row justify-end">
          <Button type="submit">Submit</Button>
        </HCF.Footer>
      </HCF>
    </form>
  );
}
