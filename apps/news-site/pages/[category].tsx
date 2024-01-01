import { CategoryPage } from '@bd-first/news-site-ui';
import {useParams} from "next/navigation";
import { useRouter } from 'next/router'

type Props = {
  params: { category: string };
}

export function Category() {

  return (
    <div className={''}>
      <CategoryPage />
    </div>
  );
}

export default Category;
