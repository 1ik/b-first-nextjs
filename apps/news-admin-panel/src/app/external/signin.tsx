/* eslint-disable @typescript-eslint/no-explicit-any */
import { FeatureSignIn } from "@bfirst/components-auth";
import { useContext } from "react";
import { AppContext } from "../app.context";

export type Inputs = {
  email: string;
  password: string;
};

export function Signin() {
  const { setUser, setToken } = useContext(AppContext);

  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center">
      <FeatureSignIn logoUrl="/img/logo.svg" setUser={setUser as any} setToken={setToken as any} />
    </div>
  );
}
