// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { AppContext } from "./app.context";
import { Scaffold } from "./scaffold";

export function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const queryClient = new QueryClient({});

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ user, setUser, token, setToken, baseUrl: "https://backend.bangladeshfirst.com" }}>
        <Scaffold />
      </AppContext.Provider>
    </QueryClientProvider>
  );
}
