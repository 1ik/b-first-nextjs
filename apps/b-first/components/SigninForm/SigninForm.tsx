import { Alert, Button, Card, CardBody, CardFooter, CardHeader, Input, Typography } from "@bfirst/material-tailwind";
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
  onGoogleLogin?: () => void;
}

export default function SigninForm({ onSubmit, logoUrl, isError, loading, onGoogleLogin }: SigninFormProps) {
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
            <Alert icon={<ExclamationCircleIcon className="w-6 h-6" />} color="red">
              Invalid email or password
            </Alert>
          )}
          <div>
            <Button
              onClick={onGoogleLogin}
              fullWidth
              variant="outlined"
              className="flex items-center gap-x-3 justify-center"
            >
              <img className="w-5" src="/img/google-logo.png" />
              Google
            </Button>
          </div>
          <Typography variant="small" className="text-center">
            Or Continue with :
          </Typography>
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
