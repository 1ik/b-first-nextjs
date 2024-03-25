import { HCF } from "@bfirst/components-layout";
import { Button, CardBody, Input } from "@bfirst/material-tailwind";
import { useForm } from "react-hook-form";

export type Inputs = {
  name: string;
};

export interface TagFormProps {
  onSubmit: (inputs: Inputs) => void;
  isError: boolean;
  loading: boolean;
  defaultData?: any;
}

export function TagForm({ onSubmit, loading, isError, defaultData }: TagFormProps) {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full">
      <HCF>
        <HCF.Content>
          <CardBody className="flex flex-col gap-4">
            <Input defaultValue={defaultData && defaultData.name} {...register("name")} type="name" label="Tag Name" />
          </CardBody>
        </HCF.Content>
        <HCF.Footer className="flex w-full px-3 flex-row justify-end">
          <Button loading={loading} type="submit">
            Submit
          </Button>
        </HCF.Footer>
      </HCF>
    </form>
  );
}
