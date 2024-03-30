import { useGet, usePut } from "@bfirst/api-client";
import { StoryForm } from "./components/StoryForm";
import { useEffect } from "react";

interface FeatureStoryUpdateProps {
  onSuccess?: () => void;
  onError: (error) => void;
  storyId: any;
}

export const FeatureStoryUpdate: React.FC<FeatureStoryUpdateProps> = (props: FeatureStoryUpdateProps) => {
  const { request, isError, isPending, isSuccess, error } = usePut(`api/v1/stories/${props.storyId}`);

  const { data: storyData, isPending: storyIsPending, refetch } = useGet(`api/v1/stories/${props.storyId}`);

  useEffect(() => {
    if (isSuccess) refetch();
  }, [isSuccess, refetch]);

  if (isError) {
    props.onError && props.onError(error);
  }

  if (isSuccess) {
    props.onSuccess && props.onSuccess();
  }

  if (storyIsPending) {
    return null;
  }

  return (
    <StoryForm
      btnLabel="Update"
      isError={false}
      loading={isPending}
      onSubmit={(data) => {
        request(data);
      }}
      defaultData={storyData}
    />
  );
};
