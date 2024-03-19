import { useGet } from "@bfirst/api-client";
import { CategoryList } from "./components/category_list";

interface PagedCategoryListProps {
  currentPage: number;
  totalPage: number;
}

const PagedCategoryList: React.FC<PagedCategoryListProps> = ({ currentPage, totalPage }) => {
  const { isPending, isError, isSuccess, data } = useGet(`/api/v1/categories?page=${currentPage}&size=20`);

  return <CategoryList />;
};

/**
 * Feature component that displays list of categories.
 */
export function FeatureCategoryList() {
  return <PagedCategoryList />;
}
