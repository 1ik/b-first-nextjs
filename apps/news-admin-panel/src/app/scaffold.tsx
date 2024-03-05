import { useContext } from "react";
import { Signin } from "./external/signin";
import AppInternal from "./app.internal";
import { AppContext } from "./app.context";

/**
 * Component that decides whether to show the Signin page or the Internal page
 */
export function Scaffold() {
  const { user } = useContext(AppContext);
const userData = JSON.parse(localStorage.getItem("userLogin"))

  if (user || userData !== null) {
    return <AppInternal />;
  }
  return <Signin />;

}
