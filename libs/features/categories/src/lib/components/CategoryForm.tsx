import { HCF } from "@bfirst/components-layout";
import { Button, CardBody, Input } from "@bfirst/material-tailwind";
import { useForm } from "react-hook-form";

export type Inputs = {
  name: string;
};

export interface SigninFormProps {
  onSubmit: (inputs: Inputs) => void;
  isError: boolean;
  loading: boolean;
  defaultData?: any;
}

export function CategoryForm({ onSubmit, loading, isError, defaultData }: SigninFormProps) {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full">
      <HCF>
        <HCF.Content>
          <CardBody className="flex flex-col gap-4">
            <Input defaultValue={defaultData && defaultData.name} {...register("name")} type="name" label="Category Name" />
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
