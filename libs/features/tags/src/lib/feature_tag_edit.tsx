import { useGet, usePut } from "@bfirst/api-client";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TagForm } from "./components/TagForm";

interface FeatureTagEditProps {
  onSuccess?: () => void;
  onError: (error) => void;
}

export const FeatureTagEdit: React.FC<FeatureTagEditProps> = (props: FeatureTagEditProps) => {
  const { id } = useParams();
  const { request, isError, isPending, isSuccess, error } = usePut(`api/v1/tags/${id}`);
  const { data: tagData, refetch } = useGet(`api/v1/tags/${id}`);

  useEffect(() => {
    if (isSuccess) refetch();
  }, [isSuccess, refetch]);

  if (isError) {
    props.onError && props.onError(error);
  }

  if (isSuccess) {
    props.onSuccess && props.onSuccess();
  }

  return (
    <TagForm
      defaultData={tagData?.data}
      isError={false}
      loading={isPending}
      onSubmit={(data) => {
        request(data);
      }}
    />
  );
};
