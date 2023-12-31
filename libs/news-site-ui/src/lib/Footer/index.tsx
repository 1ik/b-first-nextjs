export const Footer = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 px-6 pt-4 pb-8"
      style={{ backgroundColor: '#EDEDED' }}
    >
      <img
        className="h-13 w-42.5"
        src="/icons/bangladesh-first-logo.png"
        alt="bangladesh-first-site-icon"
      />
      <h6
        className="text-sm font-normal leading-4"
        style={{ color: '#000000' }}
      >
        115 Kazi Nazrul Islam Avenue, Level 12, Banglamotor, Dhaka 1000,
        Bangladesh
      </h6>
      <div className="flex flex-col items-center gap-1">
        <h5
          className="flex flex-col text-base font-bold"
          style={{ color: '#000000' }}
        >
          Newsroom
        </h5>
        <SmallText text={'+880 123 456 7890'} />
        <SmallText text={'+880 123 456 7890'} />
        <SmallText text={'+880 123 456 7890'} />
        <SmallText text={'newsdesk@bangladeshfirst.com'} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h5
          className="flex flex-col text-base font-bold"
          style={{ color: '#000000' }}
        >
          Marketing & Sales
        </h5>
        <SmallText text={'+880 123 456 7890'} />
      </div>
      <SmallText text={'www.bangladeshfirst.com'} />
    </div>
  );
};

// Small Text
const SmallText = ({ text }: any) => (
  <h6 className="text-sm font-normal leading-4" style={{ color: '#000000' }}>
    {text}
  </h6>
);
