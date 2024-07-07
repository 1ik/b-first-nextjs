import { SocialShare } from "@bfirst/components-social-share";
import { getAuthorProfileUrl } from "@bfirst/utilities";
import moment from "moment-timezone";

export interface ProfileCardProps {
  className?: string;
  data: any;
  createdTime: string;
  shareLink: string;
}

export function ProfileCard({ data, createdTime, shareLink, className }: ProfileCardProps) {
  return (
    <div className={`flex gap-y-[2px] rounded-lg overflow-hidden flex-col ${className}`}>
      {/* <div className="col-span-2">
        <img
          className="h-[100px] w-[100px] rounded-full object-center"
          src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
          alt="profile"
        />
      </div> */}
      <div className="montserrat-regular p-4 bg-[#F2F2F2] dark:bg-dark-300">
        {data?.map((item: { name: string }, index: number) => (
          <h3 key={index} className="text-lg">
            <a href={getAuthorProfileUrl(item)}>
              {item?.name} {!(index >= data.length - 1) && <span>,</span>}
            </a>
          </h3>
        ))}

        <p className="text-sm mt-2 montserrat-regular">{`Publisted at ${moment(createdTime)
          .tz("Asia/Dhaka")
          .format("h:mm A, ddd MMM Do, YYYY")}`}</p>
      </div>
      <div className="px-4 py-3 bg-[#F2F2F2] dark:bg-dark-300">
        <SocialShare shareLink={shareLink} />
      </div>
    </div>
  );
}
