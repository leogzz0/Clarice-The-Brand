import React from 'react';
import './Search.scss';
import { useSelector } from 'react-redux';
import List from '../../components/List/List';

const Search = () => {
  const searchQuery = useSelector((state) => state.search.searchQuery);

  return (
    <div className='search'>
      <div className="search-results">
        <List searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Search;
