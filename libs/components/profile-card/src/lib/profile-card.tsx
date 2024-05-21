import moment from "moment-timezone";

export interface ProfileCardProps {
  data: any;
  createdTime: string;
}

export function ProfileCard({ data, createdTime }: ProfileCardProps) {
  return (
    <div className="bg-[#F2F2F2] pl-4 py-4 dark:bg-dark-300">
      <img
        className="h-[100px] w-[100px] rounded-full object-center"
        src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
        alt="profile"
      />
      <h3 className="text-[22px] mt-4 mb-3">{`By ${data?.name}`}</h3>
      <p className="font-montserrat text-sm">{`Created at ${moment(createdTime)
        .tz("Asia/Dhaka")
        .format("h:mm A, ddd MMM Do, YYYY")}`}</p>
    </div>
  );
}
