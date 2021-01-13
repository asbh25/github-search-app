import React, { useState } from "react";
import axios from "axios";

export const Context = React.createContext();

export function ContextProvider({ children }) {
  const [history, setHistory] = useState([]);
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getRepositories = async (query) => {
    const url = `https://api.github.com/search/repositories?q=${query}&per_page=5`;
    return axios.get(url);
  };

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
        getRepositories,
      }}
    >
      {children}
    </Context.Provider>
  );
}
