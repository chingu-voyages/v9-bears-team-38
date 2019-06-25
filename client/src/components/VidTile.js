import React from 'react';

import VideoIcon from './VideoIcon.js';

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
      <div className='vid-info'>
        <h3>{vidObj.title}</h3>
        <span className='vid-items'>{vidObj.description}</span>
        <VideoIcon category={vidObj.category} />
        <span className='pm0 vid-tags'>Tags: {vidObj.tags}</span>
      </div>
    </li>
  );
};

export default VidTile;
