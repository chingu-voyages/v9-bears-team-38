import React, {useContext} from 'react';

import {VideoContext} from './VideoStore.js';

const Nav = ({showNav, closeNav}) => {
  const {dispatch} = useContext(VideoContext);
  const categories = [
    'AMA',
    'Tutorial',
    'Project',
    'Meet The Dev',
    'Showcase',
    'Visualization',
    'Other',
  ];
  return (
    <nav className={!!showNav ? 'lbgc fbc nav show-nav' : 'lbgc fbc nav'}>
      <h2 className='b playlists'>Playlists</h2>
      <ul>
        <li
          className='pointer'
          onClick={() => {
            dispatch({
              type: 'search',
              searchQuery: '',
            });
            closeNav();
          }}>
          All
        </li>
        {categories.map(cat => {
          return (
            <li
              className='pointer'
              key={cat}
              onClick={() => {
                dispatch({
                  type: 'search',
                  searchQuery: cat,
                });
                closeNav();
              }}>
              {cat}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
