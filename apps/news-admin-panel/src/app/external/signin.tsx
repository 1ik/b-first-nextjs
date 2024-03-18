import { usePost } from "@bfirst/api-client";
import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography } from "@bfirst/material-tailwind";
import { ExclamationCircleIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AppContext } from "../app.context";

export type Inputs = {
  email: string;
  password: string;
};

export function Signin() {
  const { setUser, setToken } = useContext(AppContext);
  // const { mutate, isError, isSuccess, isPending, data, error } = useMutation({
  //   mutationFn: (input) => {
  //     return axios.post(`${baseUrl}/api/v1/login`, input);
  //   },
  // });
  const { request, isError, isSuccess, isPending, data } = usePost("api/v1/login");

  if (isSuccess) {
    const { name, email, token } = data.data;
    setUser && setUser({ name, email });
    setToken && setToken(token);
    localStorage.setItem("userInfo", JSON.stringify({ name, email }));
    localStorage.setItem("token", JSON.stringify({ token }));
  }

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.stopPropagation();
    request(data as any);
  };

  function LoginCard() {
    return (
      <div className="flex w-full h-full flex-col items-center justify-center">
        <Card className="w-96">
          <CardHeader variant="gradient" className="mb-4 grid h-28 place-items-center">
            <img className="mx-auto h-10 w-auto" src="/img/logo.svg" alt="Bangladesh First Logo" />
            <Typography variant="h6">Sign in to your account</Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Forgot your password?
            </Typography>
          </CardFooter>
        </Card>
      </div>
    );
  }

  // return LoginCard();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="/img/logo.svg" alt="Bangladesh First Logo" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        {/* ==== error msg ==== */}
        {isError && (
          <div role="alert" className="alert alert-error mt-4">
            <ExclamationCircleIcon className="w-6 h-6" />
            <span>Invalid email or password</span>
          </div>
        )}
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("email")} type="email" autoComplete="email" label="Email Address" icon={<UserIcon />} />
          <Input {...register("password")} type="password" label="Password" icon={<LockClosedIcon />} />

          <Button type="submit" loading={isPending} className={"w-full flex justify-center text-center"}>
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
