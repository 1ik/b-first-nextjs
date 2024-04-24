import { useContext } from "react";
import SigninForm, { Inputs } from "../components/SigninForm/SigninForm";
import { AppContext } from "./_app";

export default function Signin() {
  const { setUser } = useContext(AppContext);

  const handleSubmit = function (inputs: Inputs) {};
  const loading = false;
  const error = false;

  const handleGoogleLogin = function () {
    console.log("google login");
  };

  return (
    <div className="flex min-h-[90vh] flex-1 flex-col items-center justify-center">
      <SigninForm
        logoUrl="/img/logo.svg"
        onSubmit={handleSubmit}
        loading={loading}
        isError={error}
        onGoogleLogin={handleGoogleLogin}
      />
    </div>
  );
}
