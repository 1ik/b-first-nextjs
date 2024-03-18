import { Button, Card, CardBody, CardFooter, CardHeader, Input, Typography } from "@bfirst/material-tailwind";
import { ExclamationCircleIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

export type Inputs = {
  email: string;
  password: string;
};

export interface SigninFormProps {
  onSubmit: (inputs: Inputs) => void;
  logoUrl: string;
  isError: boolean;
  loading: boolean;
}

export function SigninForm({ onSubmit, loading, isError, logoUrl }: SigninFormProps) {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="w-96">
        <CardHeader variant="gradient" className="mb-4 grid h-28 place-items-center">
          <img className="mx-auto h-10 w-auto" src={logoUrl} alt="Bangladesh First Logo" />
          <Typography variant="h6">Sign in to your account</Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          {isError && (
            <div role="alert" className="alert alert-error mt-4">
              <ExclamationCircleIcon className="w-6 h-6" />
              <span>Invalid email or password</span>
            </div>
          )}
          <Input {...register("email")} type="email" autoComplete="email" label="Email Address" icon={<UserIcon />} />
          <Input {...register("password")} type="password" label="Password" icon={<LockClosedIcon />} />
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="flex justify-center" loading={loading} type="submit" variant="gradient" fullWidth>
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
