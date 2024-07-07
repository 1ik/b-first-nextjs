import { usePost } from "@bfirst/api-client";
import { AuthorForm } from "./components/AuthorForm";

interface FeatureAuthorAddProps {
  onSuccess?: () => void;
  onError: (error) => void;
}

export const FeatureAuthorAdd: React.FC<FeatureAuthorAddProps> = (props: FeatureAuthorAddProps) => {
  const { request, isError, isPending, isSuccess, error } = usePost("api/v1/authors");

  if (isError) {
    props.onError && props.onError(error);
  }

  if (isSuccess) {
    props.onSuccess && props.onSuccess();
  }

  return (
    <AuthorForm
      isError={false}
      loading={isPending}
      onSubmit={(data) => {
        console.log(data);
        // request(data);
      }}
    />
  );
};
