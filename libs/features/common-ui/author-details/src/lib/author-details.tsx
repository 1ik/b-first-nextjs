import { getImageUrl } from "@bfirst/utilities";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

/* eslint-disable-next-line */
export interface AuthorDetailsProps {
  data: any;
}

export function AuthorDetails({ data }: AuthorDetailsProps) {
  return (
    <div className="pb-6 my-8 border-b-2 dark:border-dark-300">
      <div className="flex items-center gap-x-4 mb-4">
        <img
          className="w-24 sm:w-32 aspect-square object-cover rounded-full"
          src={
            data?.meta?.profile_image
              ? getImageUrl(data?.meta?.profile_image, 128, 128)
              : `https://avatar.iran.liara.run/username?username=${data.name}`
          }
          alt={data?.name}
        />
        <div className="[&>p]:text-xs sm:[&>p]:text-sm">
          <h1 className="text-lg sm:text-3xl font-semibold mb-2">{data?.name}</h1>
          <p>
            <a href={`mailto:${data?.meta?.email}`}>{data?.meta?.email}</a>
          </p>
          <p>
            <a href={`tel:${data?.meta?.phone_number}`}>{data?.meta?.phone_number}</a>
          </p>
          <div className="flex items-center gap-x-3 text-lg sm:text-xl mt-1">
            {data?.meta?.linkedin_account && (
              <a href={data?.meta?.linkedin_account}>
                <FaLinkedin />
              </a>
            )}
            {data?.meta?.facebook_account && (
              <a href={data?.meta?.linkedin_account}>
                <FaFacebook />
              </a>
            )}
            {data?.meta?.instagram_account && (
              <a href={data?.meta?.linkedin_account}>
                <FaInstagram />
              </a>
            )}
            {data?.meta?.twitter_account && (
              <a href={data?.meta?.linkedin_account}>
                <FaTwitter />
              </a>
            )}
          </div>
        </div>
      </div>
      {data?.meta?.description && (
        <div>
          <p>{data?.meta?.description}</p>
        </div>
      )}
    </div>
  );
}

export default AuthorDetails;
