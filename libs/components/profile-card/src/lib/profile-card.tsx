import moment from "moment-timezone";

export interface ProfileCardProps {
  data: any;
  updatedTime: string;
}

export function ProfileCard({ data, updatedTime }: ProfileCardProps) {
  return (
    <div className="bg-[#F2F2F2] p-8">
      <img
        className="h-[120px] w-[120px] rounded-full object-center"
        src={"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"}
        alt="profile"
      />
      <h3 className="text-2xl mt-4 mb-3">{`By ${data.name}`}</h3>
      <p className="font-montserrat text-lg">{`Updated ${moment(updatedTime)
        .tz("Asia/Dhaka")
        .format("h:mm A, ddd MMM Do, YYYY")}`}</p>
    </div>
  );
}
