import React, { Dispatch, SetStateAction } from "react";

export interface IAppContext {
  user?: any;
  setUser?: Dispatch<React.SetStateAction<undefined>>;
  token?: string;
  setToken?: Dispatch<SetStateAction<undefined>>;
}

export const AppContext = React.createContext<IAppContext>({});
