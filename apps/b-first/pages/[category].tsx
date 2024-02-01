import { useRouter } from "next/router";
import { Header, SquareGrid } from ".";
import { useEffect, useState } from 'react';


export default function Component() {

  const router = useRouter();

  const { category } = router.query;
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    const categoryRes = async () => {
      try {
        const response = await fetch(`https://panel.bangladeshfirst.com/api/v2/category/${category}?page=1&size=100`);
        const data = await response.json();
        setCategoryData(data);
      }
      catch (error) {
        console.log(error);
      }
    };

    if (category) {
      categoryRes();
    }
  }, [category]);

  if (!categoryData) {
    return <div>Loading...</div>;
  }

  // console.log(categoryData);

  return (
    <div className="text-gray-700 pt-9 sm:pt-10">
      <Header></Header>
      <SquareGrid items={categoryData.data.slice(0, 15)}></SquareGrid>
      
    </div>
  );
}



// export default function Component(data) {



//   return (
//     <div className="text-gray-700 pt-9 sm:pt-10">
//       {/* <Header></Header>
//       <SquareGrid items={data.data.slice(0, 15)}></SquareGrid> */}
//     </div>
//   );

// }




// export const getServerSideProps = async () => {

//   const [categoryRes] = await Promise.all([
//     fetch('https://panel.bangladeshfirst.com/api/v2/category/Politics?page=1&size=10')
//   ]);


//   const data = await categoryRes.json();

//   console.log(data);

//   return { props: { data } };
// };