import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { Button, CardBody, Input, Typography } from "@bfirst/material-tailwind";
import { useForm } from "react-hook-form";

export type Inputs = {
  name: string;
  description?: string;
  email?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
};

export interface AuthorFormProps {
  onSubmit: (inputs: Inputs) => void;
  isError: boolean;
  loading: boolean;
  defaultData?: any;
}

export function AuthorForm({ onSubmit, loading, isError, defaultData }: AuthorFormProps) {
  const { register, handleSubmit } = useForm<Inputs>();

  const handleFormSubmit = function (data: Inputs) {
    const author = {
      name: data.name,
      meta: {
        description: data?.description,
        email: data?.email,
        linkedin_account: data?.linkedin,
        facebook_account: data?.facebook,
        instagram_account: data?.instagram,
        twitter_account: data?.twitter,
      },
    };

    onSubmit(author);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="h-full">
      <HCF>
        <HCF.Content>
          <CardBody className="flex flex-col gap-4">
            <Input defaultValue={defaultData?.name} {...register("name")} type="name" label="Author Name" />
            <Input
              defaultValue={defaultData?.meta?.description}
              {...register("description")}
              label="Author Description"
            />
            <Input defaultValue={defaultData?.meta?.email} {...register("email")} type="email" label="Author Email" />
            <Typography className="my-2">Social Accounts</Typography>
            <div className="flex items-center gap-x-1">
              <Icon name="linkedin" size={20} variant="text" />
              <Input
                defaultValue={defaultData?.meta?.linkedin_account}
                {...register("linkedin")}
                label="LinkedIn Account"
              />
            </div>

            <div className="flex items-center gap-x-1">
              <Icon name="facebook" size={20} variant="text" />
              <Input
                defaultValue={defaultData?.meta?.facebook_account}
                {...register("facebook")}
                label="Facebook Account"
              />
            </div>

            <div className="flex items-center gap-x-1">
              <Icon name="instagram" size={20} variant="text" />
              <Input
                defaultValue={defaultData?.meta?.instagram_account}
                {...register("instagram")}
                label="Instagram Account"
              />
            </div>

            <div className="flex items-center gap-x-1">
              <Icon name="twitter" size={20} variant="text" />
              <Input
                defaultValue={defaultData?.meta?.twitter_account}
                {...register("twitter")}
                label="Twitter Account"
              />
            </div>
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
