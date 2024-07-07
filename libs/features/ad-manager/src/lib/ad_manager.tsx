import { Button } from "@bfirst/material-tailwind";
import { useState } from "react";

const items = [
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

  const handleSubmit = (data: any) => {
    console.log({ iamge: imageFile[data.position], page: page, position: data.position });
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
        <select onChange={(e) => setpage(e.target.value)}>
          {items.map((item, index) => (
            <option key={index} value={item.page}>
              {item.page}
            </option>
          ))}
        </select>
      </div>

      <div>
        <div className="mt-4">
          {items.map(
            (item) =>
              item.page === page &&
              item.ads.map((item2, index) => (
                <div key={index}>
                  <p>{item2.position}</p>
                  <div className="flex items-end">
                    <label className="md:w-80 flex flex-col items-center p-4 bg-[#e1e2e4] rounded-lg shadow-lg cursor-pointer hover:bg-blue hover:shadow-xl">
                      {selectedUploadImage[item2.position] ? (
                        <img src={selectedUploadImage[item2.position]} alt="selected file" />
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
                      <input className="hidden" onChange={(e) => handleFileChange(e, item2.position)} type="file" />
                    </label>
                    <div>
                      <Button onClick={() => handleSubmit(item2)}>Submit</Button>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}
