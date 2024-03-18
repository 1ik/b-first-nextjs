/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePost } from "@bfirst/api-client";
import { SigninForm } from "./components/SigninForm";

export interface SigninProps {
  logoUrl: string;
  setUser: (user: any) => void;
  setToken: (token: string) => void;
}

export function FeatureSignIn({ setToken, setUser, logoUrl }: SigninProps) {
  const { request, isError, isSuccess, isPending, data } = usePost("api/v1/login");

  if (isSuccess) {
    const { name, email, token } = data && data.data;
    setUser && setUser({ name, email });
    setToken && setToken(token);
    localStorage.setItem("userInfo", JSON.stringify({ name, email }));
    localStorage.setItem("token", JSON.stringify({ token }));
  }

  return (
    <SigninForm
      loading={isPending}
      isError={isError}
      logoUrl={logoUrl}
      onSubmit={(inputs) => {
        request(inputs);
      }}
    />
  );
}
