import { useRouter } from "next/router";
import { BackToTop, Footer, Header, SquareGrid } from ".";
import { useEffect, useState } from "react";

function fetchData(category) {
  return fetch(`https://panel.bangladeshfirst.com/api/v2/category/${category}?page=1&size=100`).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  });
}

export default function Component({ categoryData, category }) {
  const [visible, setVisible] = useState(12);

  const handleShowMore = () => {
    setVisible(visible + 12);
  };

  if (!categoryData) {
    return <div>Loading...</div>;
  }

  const className = "sm:w-1/4";

  return (
    <div className="text-gray-700 pt-9 sm:pt-10">
      <Header category={category}></Header>
      <div className="md-container mx-auto">
        <div className="flex">
          <div className="flex-shrink max-w-full w-full lg:w-[75%]">
            <SquareGrid
              showBannerAdd={true}
              items={categoryData.data?.slice(0, visible)}
              gridClass={className}
            ></SquareGrid>
          </div>
          <div className="flex-shrink max-w-full w-full lg:w-[25%] lg:pl-8 lg:pb-8 order-first lg:order-last">
            <div className="w-full bg-gray-50 h-full">
              <div className="text-sm py-6 sticky">
                <div className="w-full text-center">
                  <a className="uppercase" href="#">
                    Advertisement
                  </a>
                  <a href="#">
                    <img className="mx-auto" src="/img/ads/250.jpg" alt="advertisement area" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {visible < categoryData.data.length && (
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
      <Footer></Footer>
      <BackToTop></BackToTop>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const category = context.params.category;
    const categoryData = await fetchData(category);

    return { props: { categoryData, category } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { categoryData: null } };
  }
}
