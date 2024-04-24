import { ApiClient } from "@bfirst/api-client";
import { AppProps } from "next/app";
import Head from "next/head";
import { Dispatch, createContext, useState } from "react";
import "./styles.css";
import { Analytics } from "@bd-first/analytics";

export interface IAppContext {
  user?: any;
  setUser?: Dispatch<React.SetStateAction<any>>;
}

export const AppContext = createContext<IAppContext>({});

function CustomApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState({});
  return (
    <>
      <Head>
        <title>Bangladesh First</title>
      </Head>
      <main className="app">
        <AppContext.Provider value={{ user, setUser }}>
          <ApiClient baseUrl="https://backend.bangladeshfirst.com" token="">
            <Component {...pageProps} />
          </ApiClient>
        </AppContext.Provider>
      </main>
    </>
  );
}

export default CustomApp;
