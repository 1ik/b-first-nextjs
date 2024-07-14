import { useGet, usePost } from "@bfirst/api-client";

import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaRegEdit } from "react-icons/fa";
import { Icon } from "@bfirst/components-icon";
import { getAdsUrl } from "@bfirst/utilities";
const ad_items = [
  {
    page: "home",
    ads: [
      {
        title: "Top news top banner",
        position: "banner1",
      },
      {
        title: "Top news middle banner",
        position: "banner2",
      },
      {
        title: "Top news bottom banner",
        position: "banner3",
      },
      {
        title: "Economy news top banner",

        position: "banner4",
      },
      {
        title: "Economy news bottom banner",
        position: "banner5",
      },
      {
        title: "Lifestyle news top banner",
        position: "banner6",
      },
      {
        title: "Lifestyle news bottom banner",
        position: "banner7",
      },
      {
        title: "Entertianment news bottom banner",
        position: "banner8",
      },
      {
        title: "Footer top banner",
        position: "banner9",
      },
      {
        title: "Top news right square 1",
        position: "square1",
      },
      {
        title: "Top news right square 2",
        position: "square2",
      },
      {
        title: "Latest news bottom square",
        position: "square3",
      },
      {
        title: "On this day news bottom square 1",
        position: "square4",
      },
      {
        title: "On this day news bottom square 2",
        position: "square5",
      },
      {
        title: "Entertainment news right square 1",
        position: "square6",
      },
      {
        title: "Entertainment news right square 2",
        position: "square7",
      },
    ],
  },
  {
    page: "category",
    ads: [
      {
        title: "Top news top banner",
        position: "banner1",
      },
      {
        title: "Top news bottom banner",
        position: "banner2",
      },
      {
        title: "Latest news top square 1",
        position: "square1",
      },
      {
        title: "Latest news bottom square 2",
        position: "square2",
      },
      {
        title: "Top news bottom square 2",
        position: "square3",
      },
    ],
  },
  {
    page: "latest",
    ads: [
      {
        title: "Top news top banner",
        position: "banner1",
      },
      {
        title: "Top news top square 1",
        position: "square1",
      },
      {
        title: "Top news bottom square 2",
        position: "square2",
      },
    ],
  },
  {
    page: "topic ",
    ads: [
      {
        title: "Top news top banner",
        position: "banner1",
      },
      {
        title: "Latest news top square 1",
        position: "square1",
      },
      {
        title: "Latest news bottom square 2",
        position: "square2",
      },
      {
        title: "Top news bottom square",
        position: "square3",
      },
    ],
  },
  {
    page: "news_details",
    ads: [
      {
        title: "Top news top banner",
        position: "banner1",
      },
      {
        title: "Related news top banner",
        position: "banner2",
      },
      {
        title: "More from economy top square 1",
        position: "square1",
      },
      {
        title: "More from economy bottom square 2",
        position: "square2",
      },
      {
        title: "Latest news top square 1",
        position: "square3",
      },
      {
        title: "Latest news bottom square 2",
        position: "square4",
      },
    ],
  },
];

export function AdsList() {
  const [page, setpage] = useState("home");
  const [imageFile, setImageFile] = useState<any>(null);
  const [selectedUploadImage, setSelectedUploadImage] = useState({});
  const { request, isSuccess } = usePost(`api/v1/ads`);
  const { data } = useGet(`api/v1/public/ads?page=${page}`);
  const [updateStatus, setUpdateStatus] = useState({});

  const handlePageChange = (e: any) => {
    setSelectedUploadImage({});
    setpage(e.target.value);
    setUpdateStatus({});
  };

  const handleFileChange = (e: any, position: any) => {
    const file = e.target.files[0];
    setImageFile((prev: any) => ({ ...prev, [position]: file }));
    setSelectedUploadImage((prev) => ({
      ...prev,
      [position]: URL.createObjectURL(file),
    }));
    setUpdateStatus((prev: any) => ({ ...prev, [position]: true }));
  };

  const handleSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("image", imageFile[data.position]);
    formData.append("page", page);
    formData.append("position", data.position);
    request(formData);
    setUpdateStatus((prev) => ({ ...prev, [data.position]: false }));
  };

  const handleCancel = (ad: any) => {
    setUpdateStatus((prev) => ({ ...prev, [ad.position]: false }));
    setSelectedUploadImage({});
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Ad update succesfully", {
        position: "top-center",
      });
    }
  }, [isSuccess]);

  return (
    <div className="m-5">
      <ToastContainer />
      <div>
        <select onChange={handlePageChange}>
          {ad_items.map((item, index) => (
            <option key={index} value={item.page}>
              {item.page}
            </option>
          ))}
        </select>
      </div>

      <div>
        <div className="mt-4">
          {ad_items.map(
            (item) =>
              item.page === page &&
              item.ads.map((ad, index) => (
                <div key={index} className="mb-4">
                  <p className="text-lg font-medium">{ad.title}</p>
                  <div className="flex items-end gap-4">
                    <div className="md:w-[600px] flex flex-col items-center p-4 bg-[#e1e2e4] rounded-lg">
                      {selectedUploadImage[ad.position] ? (
                        <img src={selectedUploadImage[ad.position]} alt="selected file" />
                      ) : data?.ads?.find((d: any) => d.position === ad.position) ? (
                        <img
                          src={getAdsUrl(`${data.ads.find((d: any) => d.position === ad.position).image_path}`)}
                          alt="ads"
                        />
                      ) : null}
                    </div>

                    <div>
                      {updateStatus[ad.position] ? (
                        <div className="flex gap-2">
                          <Icon name="tick" variant="gradient" onClick={() => handleSubmit(ad)} />
                          <Icon name="close" variant="gradient" onClick={() => handleCancel(ad)} />
                        </div>
                      ) : (
                        <>
                          <input
                            id={`file-input-${ad.position}`}
                            type="file"
                            className="hidden"
                            onChange={(e) => handleFileChange(e, ad.position)}
                          />

                          <label htmlFor={`file-input-${ad.position}`}>
                            <div className="cursor-pointer">
                              <FaRegEdit size={22} />
                            </div>
                          </label>
                        </>
                      )}
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
