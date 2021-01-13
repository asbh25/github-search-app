import React, { useState } from "react";

export const Context = React.createContext();

export function ContextProvider({ children }) {
  const [history, setHistory] = useState([]);
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //if (history.length > 4) {
  //  setHistory([...history].shift().push(searchQuery))
  //} else {
  //  setHistory([...history].push(searchQuery))
  //}

  return (
    <Context.Provider
      value={{
        history,
        setHistory,
        results,
        setResults,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </Context.Provider>
  );
}
