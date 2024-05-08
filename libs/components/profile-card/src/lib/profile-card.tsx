export interface ProfileCardProps {
  authorName: string;
  updatedTime: string;
  authorUrl: string;
  alt?: string;
}

export function ProfileCard({ authorName, updatedTime, authorUrl, alt }: ProfileCardProps) {
  return (
    <div className="w-[420px] bg-[#F2F2F2] p-8 rounded-xl">
      <img className="h-[120px] w-[120px] rounded-full   object-center" src={authorUrl} alt={`${alt}`} />
      <h3 className="text-2xl mt-4 mb-3">{`By ${authorName}`}</h3>
      <p className="font-montserrat text-lg">{`Updated ${updatedTime}`}</p>
    </div>
  );
}
