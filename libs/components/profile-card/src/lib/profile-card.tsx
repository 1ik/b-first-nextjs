import { SocialShare } from "@bfirst/components-social-share";
import moment from "moment-timezone";

export interface ProfileCardProps {
  className?: string;
  data: any;
  createdTime: string;
  shareLink: string;
}

export function ProfileCard({ data, createdTime, shareLink, className }: ProfileCardProps) {
  return (
    <div className={`bg-[#F2F2F2] p-4 dark:bg-dark-300 grid grid-cols-5 gap-x-2 gap-y-6 items-center ${className}`}>
      <div className="col-span-2">
        <img
          className="h-[100px] w-[100px] rounded-full object-center"
          src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
          alt="profile"
        />
      </div>
      <div className="col-span-3 montserrat-regular">
        <h3 className="text-[22px]">{`By ${data?.name}`}</h3>
        <p className="text-sm mt-2 montserrat-regular">{`Publisted at ${moment(createdTime)
          .tz("Asia/Dhaka")
          .format("h:mm A, ddd MMM Do, YYYY")}`}</p>
      </div>
      <div className="col-span-5 border-t dark:border-dark-300 pt-2">
        <SocialShare title="Share News" shareLink={shareLink} />
      </div>
    </div>
  );
}
