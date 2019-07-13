import React from 'react';

import '../styles/VidTile.css';

const VidTileSmall = ({vidObj}) => {
  return (
    <li className='fbc vid-tile'>
      <iframe
        src={vidObj.url}
        className='vid-src'
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
      <div className='vid-info'>
        <h3 className='vid-title'>{vidObj.title}</h3>
      </div>
    </li>
  );
};

export default VidTileSmall;
