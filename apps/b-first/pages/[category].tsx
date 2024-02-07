import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import Header from "../components/Header/Header";
import SquareGrid from "../components/SquareGrid/SquareGrid";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";



function fetchData(category) {
  return fetch(`https://panel.bangladeshfirst.com/api/v2/category/${category}?page=1&size=100`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    });
}

export default function Component({ categoryData }) {
  const [visible, setVisible] = useState(15);

  const handleShowMore = () => {
    setVisible(visible + 15);
  };

  if (!categoryData) {
    return <div>Loading...</div>;
  }

  const className = 'sm:w-1/5';

  return (
    <div className="text-gray-700 pt-9 sm:pt-10">
      <Header></Header>
      <div className="md-container mx-auto">
        <SquareGrid items={categoryData.data.slice(0, visible)} gridClass={className}></SquareGrid>
        {visible < categoryData.data.length && (
          <div className="flex justify-center items-center w-full">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-5" onClick={handleShowMore}>Show more</button>
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

    return { props: { categoryData } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { categoryData: null } };
  }
}