// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { ApiClient } from "@bfirst/api-client";
import { useState } from "react";
import { AppContext } from "./app.context";
import { Scaffold } from "./scaffold";

let userInfo: any;
let bearerToken: any;

if (localStorage.getItem("userInfo") && localStorage.getItem("token")) {
  try {
    const currentDate = Date.now();
    const expireDate = new Date(JSON.parse(localStorage.getItem("token") as string).expire).getTime();

    if (currentDate < expireDate) {
      userInfo = JSON.parse(localStorage.getItem("userInfo") as string);
      bearerToken = JSON.parse(localStorage.getItem("token") as string).token;
    }
  } catch (error) {
    console.log(error);
  }
}

export function App() {
  const [user, setUser] = useState(userInfo);
  const [token, setToken] = useState(bearerToken);

  return (
    <AppContext.Provider value={{ user, setUser, token, setToken }}>
      <ApiClient baseUrl="https://backend.bangladeshfirst.com" token={token}>
        <Scaffold />
      </ApiClient>
    </AppContext.Provider>
  );
}
