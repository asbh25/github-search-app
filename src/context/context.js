import React, { useState } from "react";
import axios from "axios";

export const Context = React.createContext();

export function ContextProvider({ children }) {
  const [history, setHistory] = useState([]);
  const [results, setResults] = useState([]);
  // eslint-disable-next-line
  const [searchQuery, setSearchQuery] = useState({});

  const getRepositories = async (query) => {
    const url = `https://api.github.com/search/repositories?q=${query}&per_page=10`;

    return axios.get(url);
  };

  return (
    <Context.Provider
      value={{
        history,
        results,
        setSearchQuery,
        setHistory,
        setResults,
        getRepositories,
      }}
    >
      {children}
    </Context.Provider>
  );
}
