import React, { createContext, useContext, useReducer } from "react";
import { redcuer, initialState } from "./reducer";
import { ContextType } from "./context.type";
const AppContext = createContext<ContextType>({} as ContextType);

export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(redcuer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
