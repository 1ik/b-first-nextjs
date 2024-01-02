/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryPage } from '@bd-first/news-site-ui';

interface IData {
  data: any;
}

export const getServerSideProps = async (context: any) => {
  const pathName = context?.req?.url ?? '';
  const res = await fetch(
    `https://panel.bangladeshfirst.com/api/v2/category/${pathName?.replace(
      '/',
      ''
    )}?page=1&size=100`
  );

  const data: IData = await res?.json();

  return { props: { items: data?.data ?? [] } };
};

export function Category({ items }: any) {
  return (
    <div className={''}>
      <CategoryPage items={items} />
    </div>
  );
}

export default Category;
