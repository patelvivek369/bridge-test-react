import { createContext } from "react";
import { useAppData } from "../hooks/useAppData";
export const GlobalDataContext = createContext();
const AppContextProvider = ({ children }) => {
  const values = useAppData();
  return (
    <GlobalDataContext.Provider value={values}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export default AppContextProvider;
