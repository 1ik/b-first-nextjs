import { ApiClient } from "@bfirst/api-client";
import { AppProps } from "next/app";
import Head from "next/head";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import "./styles.css";

export interface IAppContext {
  user?: any;
  setUser?: Dispatch<SetStateAction<any>>;
  token?: string;
  setToken?: Dispatch<SetStateAction<any>>;
}

export const AppContext = createContext<IAppContext>({});

let userInfo: any = {};
let bearerToken: string = "";

if (typeof window === "object" && localStorage?.getItem("userInfo")) {
  userInfo = JSON.parse(localStorage.getItem("userInfo") as string);
  bearerToken = JSON.parse(localStorage.getItem("token") as string);
}

function CustomApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(userInfo);
  const [token, setToken] = useState(bearerToken);
  return (
    <>
      <Head>
        <title>Bangladesh First</title>
      </Head>
      <main className="app">
        <AppContext.Provider value={{ user, setUser, token, setToken }}>
          <ApiClient baseUrl="https://backend.bangladeshfirst.com" token={token}>
            <Component {...pageProps} />
          </ApiClient>
        </AppContext.Provider>
      </main>
    </>
  );
}

export default CustomApp;
