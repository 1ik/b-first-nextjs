import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { AppContext } from "../app.context";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@bfirst/components-button";

type Inputs = {
  email: string;
  password: string;
};

const submitLogin = async (baseUrl: string, input: any) => {
  return axios.post(`${baseUrl}/api/v1/login`, input);
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
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    event.stopPropagation();
    mutate(data);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="/img/logo.svg" alt="Bangladesh First Logo" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
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
                  <a href="#" className="font-semibold text-gray-400 hover:text-gray-600">
                    Forgot password?
                  </a>
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

            <div>
              <Button loading={isPending} classes={"flex w-full justify-center rounded-md px-3 py-1.5"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}