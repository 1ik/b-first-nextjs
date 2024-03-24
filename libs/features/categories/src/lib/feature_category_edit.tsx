import { useGet, usePut } from "@bfirst/api-client";
import { CategoryForm } from "./components/CategoryForm";
import { useParams } from "react-router-dom";

interface FeatureCategoryEditProps {
  onSuccess?: () => void;
  onError: (error) => void;
}

export const FeatureCategoryEdit: React.FC<FeatureCategoryEditProps> = (props: FeatureCategoryEditProps) => {
  const { id } = useParams();
  const { request, isError, isPending, isSuccess, error } = usePut(`api/v1/categories/${id}`);
  const { data: categoryData } = useGet(`api/v1/categories/${id}`);

  if (isError) {
    props.onError && props.onError(error);
  }

  if (isSuccess) {
    props.onSuccess && props.onSuccess();
  }

  return (
    <CategoryForm
      defaultData={categoryData?.data}
      isError={false}
      loading={isPending}
      onSubmit={(data) => {
        request(data);
      }}
    />
  );
};
