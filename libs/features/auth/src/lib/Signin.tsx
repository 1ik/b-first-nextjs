import { Inputs, SigninForm } from "./components/SigninForm";

export function Signin() {
  const signInSubmit = (inputs: Inputs) => {};

  return <SigninForm onSubmit={signInSubmit} />;
}
