import React from 'react';

import '../styles/VidTile.css';

const VidTile = ({vidObj}) => {
  return (
    <li className='fbc vid-tile'>
      <iframe
        src={vidObj.url}
        className='vid-src'
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
      <ul className='vid-info'>
        <li>{vidObj.title}</li>
        <li>{vidObj.category}</li>
        <li>{vidObj.date}</li>
      </ul>
    </li>
  );
};

export default VidTile;
