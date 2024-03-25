import { useGet } from "@bfirst/api-client";
import { AutocompleteTag } from "@bfirst/components-autocomplete-tag";
import { HCF } from "@bfirst/components-layout";
import { Button, CardBody, Input, Textarea } from "@bfirst/material-tailwind";
import { useState } from "react";
import { useForm } from "react-hook-form";

export type Inputs = {
  shoulder?: string;
  headline: string;
  altheadline?: string;
  standfirst: string;
};

export interface StoryFormProps {
  onSubmit: (inputs: Inputs) => void;
  isError: boolean;
  loading: boolean;
  defaultData?: any;
}

export function StoryForm({ onSubmit, loading, isError, defaultData }: StoryFormProps) {
  const [authorsSearch, setAuthorsSearch] = useState("");

  const { data: authorsData, isPending: isAuthorsPending } = useGet(`api/v1/authors?name=${authorsSearch}`);

  const { register, handleSubmit } = useForm<Inputs>();

  if (isAuthorsPending) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full">
      <HCF>
        <HCF.Content>
          <CardBody className="flex flex-col gap-4">
            <Input defaultValue={defaultData && defaultData.name} {...register("shoulder")} label="Shoulder" />
            <Input
              defaultValue={defaultData && defaultData.name}
              {...register("headline", { required: "A headline is required" })}
              label="Headline*"
            />
            <Input
              defaultValue={defaultData && defaultData.name}
              {...register("altheadline")}
              label="Alternative Headline"
            />
            <AutocompleteTag
              label="Choose Authors"
              items={authorsData.data}
              onSearch={(search) => {
                setAuthorsSearch(search);
              }}
              itemsSelected={(items) => {
                console.log(items);
              }}
            />
            <Textarea
              defaultValue={defaultData && defaultData.name}
              {...register("standfirst", { required: "A stand first is required" })}
              label="Stand First*"
              variant="outlined"
            />
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
