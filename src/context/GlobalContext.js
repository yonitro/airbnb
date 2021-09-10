import { prependOnceListener } from "process";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);
export const GlobalProvider = (props) => {
  const [search, setsearch] = useState();
  const [catogaryName, setCatogaryName] = useState('electronics');
  const [currentCatogary, setCurrentCatogary] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        searchApp: [search, setsearch],
        findCatogary:[currentCatogary, setCurrentCatogary],
        findCatogaryName:[catogaryName, setCatogaryName]
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
