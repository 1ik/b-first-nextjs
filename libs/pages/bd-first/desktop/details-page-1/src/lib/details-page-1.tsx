/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image } from '@bd-first/common-ui';
import { CategoryText } from '@bd-first/common-ui';
import { TitleText, BulletText } from '@bd-first/common-ui';
import { Divider } from '@bd-first/components/common/divider';
import { PublishingTimeText } from '@bd-first/common-ui';

const dummyData1 = [
  {
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/Rectangle 3168.png',
    title: 'BNP, police clash in Natore, 4 including three cops hurt',
  },
  {
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/Rectangle 3169.png',
    title: 'PM joins last campaign rally in Narayanganj',
  },
  {
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/Rectangle 3170.png',
    title: 'Indian EC observers to monitor Bangladesh polls',
  },
  {
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/Rectangle 3171.png',
    title: 'Vote as you will but don’t cause trouble',
  },
  {
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/Rectangle 3172.png',
    title: 'More worried about making ends meet',
  },
  {
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/Rectangle 3173.png',
    title: 'Irregularities: HC orders withdrawal of 4 polls officials',
  },
];

const socials = [
  {
    src: '/icons/social-1/facebook.png',
    className: 'w-[32px] h-[32px]',
    alt: 'facebook',
  },
  {
    src: '/icons/social-1/Whatsapp.png',
    className: 'w-[32px] h-[32px]',
    alt: 'Whatsapp',
  },
  {
    src: '/icons/social-1/twitter.png',
    className: 'w-[32px] h-[32px]',
    alt: 'twitter',
  },
  {
    src: '/icons/social-1/Linkedin.png',
    className: 'w-[32px] h-[32px]',
    alt: 'Linkedin',
  },
];

export function DetailsPage1() {
  return (
    <div className={'px-[96px] md:px-[128px] lg:px-[160px] xl:px-[224px] py-2'}>
      <div className="flex gap-6">
        {/* Left Section */}
        <div className="flex flex-col w-1/4 gap-2 pt-1">
          <div className="pb-4 bg-GrayL3">
            <Divider color="red" size="lg" />
            <div className="flex flex-col px-2">
              <CategoryText category="SUMMARY" className="my-1" />
              <div className="flex flex-col gap-2">
                <BulletText
                  text={`No matter how many conspiracies are made, the elections will be heldon time.`}
                />
                <BulletText
                  text={`It is up to someone to participate in the election or not`}
                />
                <BulletText
                  text={`Give victory to those whom I gave the boat symbol in Sylhet.`}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <PublishingTimeText text="Published on Dec 18, 2024 at 12:58PM (GMT+6)" />
            <PublishingTimeText
              className="[&&]:font-semibold"
              text="by Alamgir Hossain, Editor-in-chief"
            />
            <PublishingTimeText text="Last Updated on Dec 19, 2024 at 08:58AM (GMT+6)" />
          </div>
          <div className="flex flex-col gap-2">
            <PublishingTimeText
              className="[&&]:font-semibold"
              text="Share On"
            />
            <div className="flex gap-2">
              {socials?.map((s: any, idx: number) => (
                <img
                  key={idx}
                  src={s?.src ?? ''}
                  className="w-[32px] h-[32px]"
                  alt={s?.alt ?? ''}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Middle Section */}
        <div className="flex flex-col w-2/4 pb-8">
          {/* News Details Start */}
          <div className="flex flex-col gap-1">
            <CategoryText category="Bangladesh Election" />
            <TitleText
              size="xl"
              title="Taiwan elections: mainland Chinese reporters on short-term permits can ‘only observe’ as island votes for new president"
            />
            <Image src={'/images/sheikh-hasina.png'} alt={'sheikh-hasina'} />
            <span className="font-Merriweather font-normal text-[13px] leading-[16.5px] pt-1.5 pb-2.5">
              Pic: Sheikh Hasina during her speech in Sunamgang sylhet.
            </span>
            <div className="flex flex-col gap-4">
              <p className="font-normal text-[19.2px] leading-[24px] tracking-[-.5px]">
                Awami League President and Prime Minister Sheikh Hasina has
                commented that 'voting is the constitutional right of the people
                and no one has the right to prevent them from voting'.
              </p>
              <p className="font-normal text-[19.2px] leading-[24px] tracking-[-.5px]">
                Awami League President and Prime Minister Sheikh Hasina has
                commented that 'voting is the constitutional right of the people
                and no one has the right to prevent them from voting'.
              </p>
            </div>
          </div>
          {/* News Details End */}
          <Divider color="gray" className="mt-2 mb-1" />
          <div className="flex flex-col gap-1">
            <CategoryText category="Most REaD on National" />
            <div className="flex flex-col gap-2">
              {dummyData1?.map((d: any, idx: number) => (
                <div key={idx} className="flex items-center gap-3">
                  <TitleText
                    title={`${idx + 1}`}
                    size="lg"
                    className={'[&&]:leading-[50px] [&&]:text-PrimaryBlack'}
                  />
                  <Image
                    src={d?.imageUrl ?? ''}
                    alt={d?.imageAlt ?? ''}
                    className="[&&]:h-[48px] [&&]:max-w-[48px] [&&]:min-w-[48px]"
                  />
                  <TitleText
                    title={d?.title ?? ''}
                    className="[&&]:text-[16px] [&&]:leading-[20.11px]"
                  />
                </div>
              ))}
            </div>
          </div>
          <Divider color="gray" className="mt-2 mb-1" />
        </div>
        {/* Right Section */}
        <div className="flex flex-col w-1/4 pt-2">
          <Image src={'/images/rectangle-17.png'} alt={'add-image'} />
        </div>
      </div>
    </div>
  );
}

export default DetailsPage1;
