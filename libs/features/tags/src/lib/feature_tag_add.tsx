import { usePost } from "@bfirst/api-client";
import { TagForm } from "./components/TagForm";

interface FeatureTagAddProps {
  onSuccess?: () => void;
  onError: (error) => void;
}

export const FeatureTagAdd: React.FC<FeatureTagAddProps> = (props: FeatureTagAddProps) => {
  const { request, isError, isPending, isSuccess, error } = usePost("api/v1/tags");

  if (isError) {
    props.onError && props.onError(error);
  }

  if (isSuccess) {
    props.onSuccess && props.onSuccess();
  }

  return (
    <TagForm
      isError={false}
      loading={isPending}
      onSubmit={(data) => {
        request(data);
      }}
    />
  );
};
