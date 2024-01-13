import {
  CategoryText,
  TitleText,
  SummaryText,
  PublishingTimeText,
  Image,
} from '@bd-first/common-ui';

interface IProps {
  category?: string;
  title?: string;
  summary1?: string;
  publishedAt?: string;
  imageUrl?: string;
  imageAlt?: string;
  summary2?: string;
}

export function Card1({
  category,
  title,
  summary1,
  publishedAt,
  imageUrl,
  imageAlt,
  summary2,
}: IProps) {
  return (
    <div className={'flex flex-col justify-start'}>
      <CategoryText category={category ?? ''} />
      <TitleText
        size="lg"
        title="Awami League develops, BNP burns people: Sheikh Hasina"
        className="py-1"
      />
      <SummaryText text="She said, “Those who are burning innocent people in the name of blockade are the ones who want to disrupt the elections”" />
      <PublishingTimeText text="28 minutes ago" className="py-2" />
      <Image src="/images/sheikh-hasina.png" alt="sheikh-hasina" />
      <SummaryText
        text="Picture: She said, “Those who are burning innocent people in the name of blockade are the ones who want to disrupt the elections”"
        className="py-1"
      />
    </div>
  );
}

export default Card1;
