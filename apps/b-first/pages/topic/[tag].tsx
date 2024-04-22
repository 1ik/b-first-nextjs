import BackToTop from "apps/b-first/components/BackToTop/BackToTop";
import Footer from "apps/b-first/components/Footer/Footer";
import Header from "apps/b-first/components/Header/Header";
import MobileMenu from "apps/b-first/components/MobileMenu/MobileMenu";
import TopicItem from "apps/b-first/components/TopicItem/TopicItem";

function Topic({ tag }: any) {
  console.log(tag);

  return (
    <div>
      <Header />
      <MobileMenu />
      <TopicItem tagName={tag}/>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default Topic;

export const getServerSideProps = async ({ params }: any) => {
  const { tag } = params;

  return { props: { tag } };
};
