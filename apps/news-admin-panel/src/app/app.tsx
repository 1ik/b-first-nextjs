// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { AppContext } from "./app.context";
import { Scaffold } from "./scaffold";

let userInfo: any;
let bearerToken: any;

if (localStorage.getItem("userInfo")) {
  userInfo = JSON.parse(localStorage.getItem("userInfo") as string);
  bearerToken = JSON.parse(localStorage.getItem("token") as any);
}


export function App() {
  const [user, setUser] = useState(userInfo);
  const [token, setToken] = useState(bearerToken);
  const queryClient = new QueryClient({});

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ user, setUser, token, setToken, baseUrl: "https://backend.bangladeshfirst.com" }}>
        <Scaffold />
      </AppContext.Provider>
    </QueryClientProvider>
  );
}
