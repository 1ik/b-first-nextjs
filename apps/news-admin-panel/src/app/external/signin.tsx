import { Button } from "@bfirst/material-tailwind";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AppContext } from "../app.context";

type Inputs = {
  email: string;
  password: string;
};

export function Signin() {
  const { baseUrl, setUser, setToken } = useContext(AppContext);
  const { mutate, isError, isSuccess, isPending, data, error } = useMutation({
    mutationFn: (input) => {
      return axios.post(`${baseUrl}/api/v1/login`, input);
    },
  });

  if (isSuccess) {
    const { name, email, token } = data.data;
    setUser && setUser({ name, email });
    setToken && setToken(token);
    localStorage.setItem("userInfo", JSON.stringify({ name, email }));
    localStorage.setItem("token", JSON.stringify({ token }));
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    console.log("onSub", data);
    event?.stopPropagation();
    mutate(data as any);
  };

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Invalid email or password</span>
          </div>
        )}
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="  email"
                {...register("email")}
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <Link to="#" className="font-semibold text-gray-400 hover:text-gray-600">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                {...register("password")}
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <Button type="submit" loading={isPending} className={"w-full flex justify-center text-center"}>
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
