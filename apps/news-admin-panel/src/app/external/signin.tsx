import { SubmitHandler, useForm } from "react-hook-form";
import { useContext, useState } from "react";
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
  const [loginError, setLoginError] = useState<boolean>(false);
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

    if (data.email === "admin@gmail.com" && data.password === "123456") {
      setLoginError(false);
    
      localStorage.setItem("userLogin",JSON.stringify(data))
    } else {
      setLoginError(true);
    }


  };

  const handleChange = (event) => {
    if ((event.target as any).value.length > 0) {
      setLoginError(false);
    }
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
                  onChange={handleChange}
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
              <div className="mt-2 ">
                <input
                  id="password"
                  {...register("password")}
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                />
                {loginError && (
                  <div role="alert" className="alert alert-warning mt-2">
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
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span>Warning: Invalid email or password!</span>
                  </div>
                )}
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
