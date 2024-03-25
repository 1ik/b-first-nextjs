import { useGet, usePut } from "@bfirst/api-client";
import { useParams } from "react-router-dom";
import { AuthorForm } from "./components/AuthorForm";

interface FeatureAuthorEditProps {
  onSuccess?: () => void;
  onError: (error) => void;
}

export const FeatureAuthorEdit: React.FC<FeatureAuthorEditProps> = (props: FeatureAuthorEditProps) => {
  const { id } = useParams();
  const { request, isError, isPending, isSuccess, error } = usePut(`api/v1/authors/${id}`);
  const { data: authorData } = useGet(`api/v1/authors/${id}`);

  if (isError) {
    props.onError && props.onError(error);
  }

  if (isSuccess) {
    props.onSuccess && props.onSuccess();
  }

  return (
    <AuthorForm
      defaultData={authorData?.data}
      isError={false}
      loading={isPending}
      onSubmit={(data) => {
        request(data);
      }}
    />
  );
};
