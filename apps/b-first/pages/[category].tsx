import { useState } from "react";
import BackToTop from "../components/BackToTop/BackToTop";
import CustomError from "../components/CustomError/CustomError";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import SquareGrid from "../components/SquareGrid/SquareGrid";

export default function Component({ categoryData }: any) {
  const [visible, setVisible] = useState(15);

  const handleShowMore = () => {
    setVisible(visible + 15);
  };

  /*   if (!Object.keys(categoryData).length) {
    return <CustomError />;
  } */

  if (!categoryData) {
    return <CustomError />;
  }

  const className = "sm:w-1/5";
  const data = categoryData.data;

  return (
    <div className="text-gray-700 pt-9 sm:pt-10">
      <Header category={data[0].categories[0]?.name} />
      <MobileMenu />
      <div className="md-container mx-auto">
        <SquareGrid items={data.slice(0, visible)} gridClass={className} />
        {visible < data.length && (
          <div className="flex justify-center items-center w-full">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-5"
              onClick={handleShowMore}
            >
              Show more
            </button>
          </div>
        )}
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

const baseUrl = "https://backend.bangladeshfirst.com/api/v1/public";

export const getServerSideProps = async ({ params }: any) => {
  try {
    const { category } = params;
    /* const categoryResponse = await fetch(`https://panel.bangladeshfirst.com/api/v2/category/${category}?page=1&size=100`); */
    const categoryResponse = await fetch(`${baseUrl}/categories/${category}/stories?size=100`);

    if (!categoryResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const categoryData = await categoryResponse.json();

    return { props: { categoryData } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { categoryData: null } };
  }
};
