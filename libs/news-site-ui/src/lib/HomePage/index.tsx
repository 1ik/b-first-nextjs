import { NewsCard } from '../NewsCard';

export const HomePage = () => {
  return (
    <div className="w-full flex flex-col pb-6 gap-2">
      <NewsCard
        title="Awami League develops, BNP burns people: Sheikh Hasina"
        category="Bangladesh Election"
        summary="She said, “Those who are burning innocent people in the name of blockade are the ones who want to disrupt the elections”"
        image="/images/sheikh-hasina.png"
        imageAlt="sheikh-hasina"
        showImage
        showCategory
        showDivider
        showPublishedAt
        showSummary
        publishedAt="28 minutes ago"
        size="lg"
      />
      <NewsCard
        title="BKMEA's letter to buyers asking for increased price on ready-made garments"
        category="BUSINESS"
        showCategory
        showDivider
        showPublishedAt
        publishedAt="56 minutes ago"
        size="md"
      />
      <NewsCard
        title="Foreign debt has increased by 39 thousand crores in one year"
        category="Economics"
        showCategory
        showPublishedAt
        publishedAt="59 minutes ago"
        size="md"
      />
    </div>
  );
};
