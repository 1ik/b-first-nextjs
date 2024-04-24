import { usePost } from "@bfirst/api-client";
import { GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import SigninForm, { Inputs } from "../components/SigninForm/SigninForm";
import { auth } from "../firebaseConfig";
import { AppContext } from "./_app";

export default function Signin() {
  const { setUser } = useContext(AppContext);
  const {
    request: socialLoginReq,
    data: socialLoginData,
    isPending: socialLoginPending,
    isError: socialLoginError,
    isSuccess: socialLoginSuccess,
  } = usePost(`api/v1/public/social-login`);
  const { request, data, isPending, isError, isSuccess } = usePost(`api/v1/public/login`);

  const route = useRouter();

  const handleSubmit = function (inputs: Inputs) {
    request(inputs);
  };

  const handleGoogleLogin = function () {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (!result) return;
      const data = {
        name: result.user.displayName,
        email: result.user.email,
        photo_url: result.user.photoURL,
        provider: result.providerId?.split(".")[0],
        provider_id: result.user.uid,
        access_token: (result.user as unknown as { accessToken: any }).accessToken,
      };
      socialLoginReq(data);
    });
  }, []);

  useEffect(() => {
    if (socialLoginSuccess) {
      setUser && setUser(socialLoginData?.data.data);
      localStorage.setItem("userInfo", JSON.stringify(socialLoginData?.data.data));
      localStorage.setItem("token", JSON.stringify(socialLoginData?.data.token));
      route.push("/");
    } else if (isSuccess) {
      setUser && setUser(data?.data.data);
      localStorage.setItem("userInfo", JSON.stringify(data?.data.data));
      localStorage.setItem("token", JSON.stringify(data?.data.token));
      route.push("/");
    }
  }, [data?.data, isSuccess, route, setUser, socialLoginData, socialLoginSuccess]);

  return (
    <div className="flex min-h-[90vh] flex-1 flex-col items-center justify-center">
      <SigninForm
        logoUrl="/img/logo.svg"
        onSubmit={handleSubmit}
        loading={socialLoginPending || isPending}
        isError={socialLoginError || isError}
        onGoogleLogin={handleGoogleLogin}
      />
    </div>
  );
}
