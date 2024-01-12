/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProps {
  siteLogoUrl: string;
  siteUrl: string;
}

export function Footer({ siteLogoUrl, siteUrl }: IProps) {
  return (
    <div className={''}>
      <div
        className="flex items-start justify-between w-full gap-12 px-24 pt-4 pb-8 bg-SecondaryGery"
        style={{
          fontFamily: "'Helvetica Neue', sans-serif",
        }}
      >
        <div className="w-2/6">
          <img className="h-13 w-42.5" src={siteLogoUrl} alt="site-icon" />
          <h6
            className="text-[18px] font-normal leading-[21.4px]"
            style={{ color: '#000000' }}
          >
            115 Kazi Nazrul Islam Avenue, Level 12, Banglamotor, Dhaka 1000,
            Bangladesh
          </h6>
        </div>
        <div className="flex flex-col items-center w-auto gap-1">
          <h5 className="flex flex-col text-[18px] font-bold leading-[22px] text-PrimaryBlack">
            Newsroom
          </h5>
          <SmallText text={'+880 123 456 7890'} />
          <SmallText text={'+880 123 456 7890'} />
          <SmallText text={'+880 123 456 7890'} />
        </div>
        <div className="flex flex-col items-center w-auto gap-1">
          <h5 className="flex flex-col text-[18px] font-bold leading-[22px] text-PrimaryBlack">
            Marketing & Sales
          </h5>
          <SmallText text={'+880 123 456 7890'} />
        </div>
        <div className="flex flex-col w-auto gap-1">
          <SmallText text={'Advertisement'} />
          <SmallText text={'Newsletter'} />
          <SmallText text={'Private Policy'} />
          <SmallText text={'Archives'} />
        </div>
        <div className="flex flex-col w-auto gap-1">
          <SmallText text={'About Us'} />
          <SmallText text={'Contact Us'} />
          <SmallText text={'Apps'} />
          <SmallText text={'Site Map'} />
        </div>
      </div>
      <div className="flex items-center justify-center w-full px-24 py-1 bg-PrimaryRed">
        <h6 className="text-xs font-normal text-PrimaryWhite leading-[14px] tracking-[-.3px]">
          {siteUrl}
        </h6>
      </div>
    </div>
  );
}

// Small Text
const SmallText = ({ text }: any) => (
  <h6 className="text-[18px] font-normal leading-[22px] text-PrimaryBlack">
    {text}
  </h6>
);

export default Footer;
