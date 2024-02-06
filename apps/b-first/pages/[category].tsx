import { BackToTop, Footer, Header, SquareGrid } from ".";
import { useState } from 'react';

const fetchData = async (category: string) => {
  const categoryResponse = await fetch(`https://panel.bangladeshfirst.com/api/v2/category/${category}?page=1&size=100`)
  console.log(categoryResponse);
  if (!categoryResponse.ok) {
    throw new Error('Failed to fetch data');
  }
  let categoryData: any[] = (await categoryResponse.json());

  return { props: { categoryData } };
};

export default function Component( categoryData: any ) {
  const [visible, setVisible] = useState(15);

  const handleShowMore = () => {
    setVisible(visible + 15);
  };

  if (!categoryData) {
    return <div>Loading...</div>;
  }

  const className = 'sm:w-1/5';

  const data = categoryData.categoryData.props.categoryData.data;

  return (
    <div className="text-gray-700 pt-9 sm:pt-10">
      <Header></Header>
      <div className="md-container mx-auto">
        <SquareGrid items={data.slice(0, visible)} gridClass={className}></SquareGrid>
        {visible < data.length && (
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

export const getServerSideProps = async (context: any) => {
  try {
    const category = context.params.category;
    const categoryData = await fetchData(category);

    return { props: { categoryData } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { categoryData: null } };
  }
}