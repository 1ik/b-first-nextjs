import { usePost } from "@bfirst/api-client";
import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { Button, CardBody, Input, Typography } from "@bfirst/material-tailwind";
import { getImageUrl } from "@bfirst/utilities";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

export type Inputs = {
  name: string;
  description?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
};

export interface AuthorFormProps {
  onSubmit: (inputs: Inputs) => void;
  isError: boolean;
  loading: boolean;
  defaultData?: any;
}

export function AuthorForm({ onSubmit, loading, isError, defaultData }: AuthorFormProps) {
  const [profileImage, setProfileImage] = useState<any>(
    defaultData?.meta?.profile_image ? getImageUrl(defaultData?.meta?.profile_image, 128, 128) : undefined
  );
  const [profileImageFile, setProfileImageFile] = useState<any>();
  const { register, handleSubmit } = useForm<Inputs>();

  const { requestAsync } = usePost(`api/v1/media-upload-image`);

  const handleFormSubmit = async function (data: Inputs) {
    let profileImageUrl: undefined | string;

    if (profileImageFile) {
      const formData = new FormData();
      formData.append("image", profileImageFile);
      profileImageUrl = (await requestAsync(formData)).data.url;
    } else if (defaultData?.meta?.profile_image) {
      profileImageUrl = defaultData?.meta?.profile_image;
    }

    const author = {
      name: data.name,
      meta: {
        profile_image: profileImageUrl,
        description: data?.description,
        email: data?.email,
        phone_number: data?.phone,
        linkedin_account: data?.linkedin,
        facebook_account: data?.facebook,
        instagram_account: data?.instagram,
        twitter_account: data?.twitter,
      },
    };

    onSubmit(author);
  };

  useEffect(() => {
    if (!profileImageFile) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      setProfileImage(e.target?.result as string);
    };
    reader.readAsDataURL(profileImageFile);
  }, [profileImageFile]);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="h-full">
      <HCF>
        <HCF.Content>
          <CardBody className="flex flex-col gap-4">
            <ToastContainer position="top-center" />
            <Input defaultValue={defaultData?.name} {...register("name")} type="name" label="Author Name" />
            <Input
              defaultValue={defaultData?.meta?.description}
              {...register("description")}
              label="Author Description"
            />

            <Typography className="my-2">Profile Image</Typography>
            <label className="relative group overflow-hidden md:w-48 aspect-square flex flex-col items-center justify-center p-4 bg-[#e1e2e4] rounded-lg shadow-lg cursor-pointer hover:shadow-xl">
              {profileImage ? (
                <div>
                  <img
                    className="w-full aspect-square rounded-full object-cover"
                    src={profileImage}
                    alt="selected file"
                  />
                  <div className="pointer-events-none absolute opacity-0 group-hover:opacity-100 h-full w-full flex items-center justify-center top-0 left-0 bg-gray-400/20 duration-100">
                    Edit
                  </div>
                </div>
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

              <input className="hidden" onChange={(e) => setProfileImageFile(e.target.files?.[0])} type="file" />
            </label>
            <Typography className="text-sm font-semibold">*Square Image is preferred</Typography>

            <Typography className="my-2">Contacts</Typography>
            <Input defaultValue={defaultData?.meta?.email} {...register("email")} type="email" label="Author Email" />
            <Input defaultValue={defaultData?.meta?.phone_number} {...register("phone")} label="Author Phone Number" />

            <Typography className="my-2">Social Accounts</Typography>
            <div className="flex items-center gap-x-1">
              <Icon name="linkedin" size={20} variant="text" />
              <Input
                defaultValue={defaultData?.meta?.linkedin_account}
                {...register("linkedin")}
                label="LinkedIn Account"
              />
            </div>

            <div className="flex items-center gap-x-1">
              <Icon name="facebook" size={20} variant="text" />
              <Input
                defaultValue={defaultData?.meta?.facebook_account}
                {...register("facebook")}
                label="Facebook Account"
              />
            </div>

            <div className="flex items-center gap-x-1">
              <Icon name="instagram" size={20} variant="text" />
              <Input
                defaultValue={defaultData?.meta?.instagram_account}
                {...register("instagram")}
                label="Instagram Account"
              />
            </div>

            <div className="flex items-center gap-x-1">
              <Icon name="twitter" size={20} variant="text" />
              <Input
                defaultValue={defaultData?.meta?.twitter_account}
                {...register("twitter")}
                label="Twitter Account"
              />
            </div>
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
