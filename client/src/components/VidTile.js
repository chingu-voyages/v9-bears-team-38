import React from 'react';

import VideoIcon from './VideoIcon.js';

import '../styles/VidTile.css';

const VidTile = ({vidObj}) => {
  return (
    <section className='vid-tile'>
      <h3 className='vid-title'>{vidObj.title}</h3>
      <div className='fbc vid-info-container'>
        <iframe
          src={vidObj.url + '?showinfo=0'}
          className='main-src'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
        <div className='fbc vid-info'>
          <p className='pm0 vid-desc'>{vidObj.description}</p>
          <span className='pm0 vid-tags'>
            <strong>Starring:</strong> {vidObj.starring}
          </span>
          <span className='pm0 vid-tags'>
            <strong>Tags:</strong> {vidObj.tags}
          </span>
        </div>
      </div>
    </section>
  );
};

export default VidTile;
