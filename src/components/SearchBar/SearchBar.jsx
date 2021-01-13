import React, { useState, useContext } from 'react';
import { Context } from '../../context';
import './SearchBar.scss';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const {getRepositories} = useContext(Context);

  const handleChange = event => {
    event.preventDefault();

    setQuery(event.target.value);
  }

  const search = event => {
    event.preventDefault();
    // let repos = [];
    getRepositories(query).then(({ data }) => {
      setResults(data.items)
      console.log(data.items);
    });

    // setResults(repos);
  }

  return (
    <>
    <input
      type="text"
      placeholder="tom"
      value={query}
      onChange={handleChange}
    />
    <button 
      onClick={search}
    />
    <ul>
      {!results ? (
        <p>No repos</p> 
      ) : (
      results.map(res => (
        <li>{res.id}</li>
      )))}
    </ul>
    </>
  );
};
