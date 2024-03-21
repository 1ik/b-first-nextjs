import { HCF } from "@bfirst/components-layout";
import { Button, CardBody, Input } from "@bfirst/material-tailwind";
import { useForm } from "react-hook-form";

export type Inputs = {
  name: string;
};

export interface AuthorFormProps {
  onSubmit: (inputs: Inputs) => void;
  isError: boolean;
  loading: boolean;
}

export function AuthorForm({ onSubmit, loading, isError }: AuthorFormProps) {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full">
      <HCF>
        <HCF.Content>
          <CardBody className="flex flex-col gap-4">
            <Input {...register("name")} type="name" label="Author Name" />
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
