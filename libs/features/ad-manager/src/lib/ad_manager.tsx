import { useGet, usePost } from "@bfirst/api-client";
import { Button } from "@bfirst/material-tailwind";
import { useState } from "react";

const ad_items = [
  {
    page: "home",
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
        position: "banner 9",
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
      {
        position: "square 4",
      },
      {
        position: "square 5",
      },
      {
        position: "square 6",
      },
      {
        position: "square 7",
      },
    ],
  },
  {
    page: "categoy ",
    ads: [
      {
        position: "banner 1",
      },
      {
        position: "banner 2",
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
    page: "latest",
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
    ],
  },
  {
    page: "topic ",
    ads: [
      {
        position: "banner 1",
      },
      {
        position: "banner 2",
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
    page: "news_details",
    ads: [
      {
        position: "banner 1",
      },
      {
        position: "banner 2",
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
      {
        position: "square 4",
      },
    ],
  },
];

export function AdManager() {
  const [page, setpage] = useState("home");
  const [imageFile, setImageFile] = useState<any>(null);
  const [selectedUploadImage, setSelectedUploadImage] = useState({});
  const { requestAsync } = usePost(`api/v1/ads`);
  const { data } = useGet(`api/v1/public/ads?page=${page}`);

  const handlePageChange = (e: any) => {
    setSelectedUploadImage({});
    setpage(e.target.value);
  };

  const handleSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("image", imageFile[data.position]);
    formData.append("page", page);
    formData.append("position", data.position);
    const datas = await requestAsync(formData);
  };

  const handleFileChange = (e: any, position: any) => {
    const file = e.target.files[0];
    setImageFile((prev) => ({ ...prev, [position]: file }));
    setSelectedUploadImage((prev) => ({
      ...prev,
      [position]: URL.createObjectURL(file),
    }));
  };

  return (
    <div className="m-5">
      <div>
        <select onChange={handlePageChange} value={page}>
          {ad_items.map((item, index) => (
            <option key={index} value={item.page}>
              {item.page}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        {ad_items
          .find((item) => item.page === page)
          ?.ads.map((ad, index) => (
            <div key={`${ad.position}-${index}`}>
              <p>{ad.position}</p>
              <div className="flex items-end">
                <label className="md:w-80 flex flex-col items-center p-4 bg-[#e1e2e4] rounded-lg shadow-lg cursor-pointer hover:bg-blue hover:shadow-xl">
                  {selectedUploadImage[ad.position] ? (
                    <img src={selectedUploadImage[ad.position]} alt="selected file" />
                  ) : data?.ads?.find((d) => d.position === ad.position) ? (
                    <img
                      src={`https://backend.bangladeshfirst.com/${
                        data.ads.find((d) => d.position === ad.position).image_path
                      }`}
                      alt="ads"
                    />
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
                      <span>Upload Image</span>
                    </div>
                  )}
                  <input className="hidden" onChange={(e) => handleFileChange(e, ad.position)} type="file" />
                </label>
                <div>
                  <Button onClick={() => handleSubmit(ad)}>Submit</Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
