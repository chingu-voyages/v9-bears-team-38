import React, {useEffect, useState, useContext} from 'react';

import {VideoContext} from './VideoStore.js';

const Search = props => {
  const [query, setQuery] = useState('');

  let {dispatch} = useContext(VideoContext);

  const handleSearch = () => {
    dispatch({
      type: 'search',
      searchQuery: query,
    });
  };

  const handleSearchKeyUp = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='search-box'>
      <input
        type='text'
        id='search'
        name='search'
        aria-label='Search'
        placeholder='Search videos ...'
        onChange={e => {
          setQuery(e.target.value);
        }}
        onKeyUp={handleSearchKeyUp}
      />
      <i className='fas fa-search pointer' onClick={handleSearch} />
    </div>
  );
};

export default Search;
