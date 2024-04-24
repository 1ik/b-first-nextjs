import { usePost } from "@bfirst/api-client";
import { CategoryForm } from "./components/CategoryForm";

interface FeatureCategoryAddProps {
  onSuccess?: () => void;
  onError: (error) => void;
}

export const FeatureCategoryAdd: React.FC<FeatureCategoryAddProps> = (props: FeatureCategoryAddProps) => {
  const { request, isError, isPending, isSuccess, error } = usePost("api/v1/categories");

  if (isError) {
    props.onError && props.onError(error);
  }

  if (isSuccess) {
    props.onSuccess && props.onSuccess();
  }

  return (
    <CategoryForm
      isError={false}
      loading={isPending}
      onSubmit={(data) => {
        request(data);
      }}
    />
  );
};
