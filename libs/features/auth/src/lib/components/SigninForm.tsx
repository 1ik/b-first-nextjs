import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography } from "@bfirst/material-tailwind";
import { useForm } from "react-hook-form";

export type Inputs = {
  email: string;
  password: string;
};

export interface SigninProps {
  onSubmit: (inputs: Inputs) => void;
  loading: boolean;
}

export function SigninForm({ onSubmit, loading }: SigninProps) {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="w-96">
        <CardHeader variant="gradient" className="mb-4 grid h-28 place-items-center">
          <img className="mx-auto h-10 w-auto" src="/img/logo.svg" alt="Bangladesh First Logo" />
          <Typography variant="h6">Sign in to your account</Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input {...register("email")} label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button loading={loading} type="submit" variant="gradient" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Forgot your password?
          </Typography>
        </CardFooter>
      </Card>
    </form>
  );
}
