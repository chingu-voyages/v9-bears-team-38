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
      <h3>{vidObj.title}</h3>
      <div className='fbr tile-info'>
        <span className='fbc pm0 tile-icon'>
          <i className='far fa-question-circle fa-2x' />
          <p className='pm0'>AMA</p>
        </span>
        <ul className='vid-info'>
          <li className='vid-items'>{vidObj.description}</li>
          <li className='pm0 vid-tags'>Tags: {vidObj.tags}</li>
        </ul>
      </div>
    </li>
  );
};

export default VidTile;
