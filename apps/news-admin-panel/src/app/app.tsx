import { AppContext } from "./app.context";
import { useState } from "react";
import { Scaffold } from "./scaffold";

export function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  return (
    <AppContext.Provider value={{ user, setUser, token, setToken }}>
      <Scaffold />
    </AppContext.Provider>
  );
}
