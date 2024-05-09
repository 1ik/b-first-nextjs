import moment from "moment-timezone";

export interface ProfileCardProps {
  data: any;
  updatedTime: string;
}

export function ProfileCard({ data, updatedTime }: ProfileCardProps) {
  return (
    <div className="bg-[#F2F2F2] p-8 dark:bg-dark-300">
      <img
        className="h-[120px] w-[120px] rounded-full object-center"
        src="https://placehold.co/120x120"
        alt="profile"
      />
      <h3 className="text-2xl mt-4 mb-3">{`By ${data?.name}`}</h3>
      <p className="font-montserrat text-lg">{`Updated ${moment(updatedTime)
        .tz("Asia/Dhaka")
        .format("h:mm A, ddd MMM Do, YYYY")}`}</p>
    </div>
  );
}
