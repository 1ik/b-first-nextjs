import { HomePage } from '@bd-first/news-site-ui';
import SlideOver from "../../../libs/components/slide-over/src/lib/slide-over";

export const getServerSideProps = async () => {
  const [featuredRes, latestNewsRes] = await Promise.all([
    fetch('https://panel.bangladeshfirst.com/api/v2/featured'),
    fetch('https://panel.bangladeshfirst.com/api/v2/latest'),
  ]);

  const featured: unknown = await featuredRes.json();
  const latestNews: unknown = await latestNewsRes.json();

  return { props: { featured, latestNews } };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Index({ featured, latestNews }: any) {
  return (
    <div data-theme="light" className={''}>
      <SlideOver />
      <HomePage featured={featured} latestNews={latestNews} />
    </div>
  );
}

export default Index;
