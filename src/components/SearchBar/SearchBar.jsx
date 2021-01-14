import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../context';
import { Card } from '../Card';
import _ from 'lodash';
import shortid from 'shortid';

import './SearchBar.scss';

export const SearchBar = () => {
  const [query, setQuery] = useState('');

  const { results, setResults, history, setHistory, setSearchQuery, getRepositories } = useContext(Context);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('history'))) {
      setHistory(JSON.parse(localStorage.getItem('history')));
    }
  }, [setHistory]);

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  const searchRepos = value => {
    if (!history) {
      setHistory(value);
    } else {
      setHistory([...history, value]);
    }

    getRepositories(value).then(({ data }) => {
      setResults(data.items);
    });
  }

  const handleChange = async ({ target }) => {
    const search = _.debounce(searchRepos, 1000);
    
    setSearchQuery(prevSearch => {
      if (prevSearch.cancel) {
        prevSearch.cancel();
      }
      return search;
    });

    if (target.value) {
      setQuery(target.value);
      search(target.value);
    } else {
      setQuery('');
      setResults([]);
    }
  }


  return (
    <section className="content">
      <div className="content__section">
        <input
          id="input"
          type="text"
          placeholder="tom"
          value={query.trimLeft()}
          onChange={handleChange}
        />

        {history && (
          <ul className="content__history">
            Search history:

          {history.slice(-5).map(item => (
              <li key={shortid.generate()}>{item}</li>
          ))}
        </ul>
        )}
      </div>


      {results && (
        <div className="container">
          {results.map(info => (
            <Card key={info.id} result={info} />
          ))}
        </div>
      )}
    </section>
  );
};
