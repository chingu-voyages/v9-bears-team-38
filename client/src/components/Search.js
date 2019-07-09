import React, {useEffect, useState, useContext} from 'react';

import {VideoContext} from './VideoStore.js';

const Search = props => {
  //State to hold user input from search bar
  const [query, setQuery] = useState('');

  //Destructure dispatch method from VideoContext
  let {dispatch} = useContext(VideoContext);

  //Uses dispatch from reducer in Store to filter displayedVideos
  const handleSearch = () => {
    dispatch({
      type: 'search',
      searchQuery: query,
    });
  };

  //Calls handleSearch if user presses enter key
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
