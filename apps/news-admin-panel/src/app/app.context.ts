import React, { Dispatch, SetStateAction } from "react";

export interface IAppContext {
  user?: any;
  setUser?: Dispatch<React.SetStateAction<any>>;
  token?: string;
  setToken?: Dispatch<SetStateAction<undefined>>;
  baseUrl?: string;
}

export const AppContext = React.createContext<IAppContext>({});
