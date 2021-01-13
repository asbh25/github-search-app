import React, { useState, useContext } from 'react';
import { Context } from '../../context';
import { ResultCard } from '../ResultCard';
import _ from 'lodash';

import './SearchBar.scss';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});

  const {getRepositories} = useContext(Context);

  const searchRepos = (value) => {
    getRepositories(query).then(({ data }) => {
      setResults(data.items)
    });
  }

  const handleChange = ({ target }) => {
    setQuery(target.value);

    const search = _.debounce(searchRepos, 500);

    setSearchQuery(prevSearch => {
      if (prevSearch.cancel) {
        prevSearch.cancel();
      }
      return search;
    });

    search(target.value);
  }


  return (
    <div className="content">
      <input
        type="text"
        placeholder="tom"
        value={query}
        onChange={handleChange}
      />

      <div className="container">
        {!results ? (
          <p>No repos</p> 
        ) : (
        results.map(info => (
          <ResultCard key={info.id} result={info} />
        )))}
      </div>
    </div>
  );
};
