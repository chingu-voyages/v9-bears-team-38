import React from 'react';

import VideoIcon from './VideoIcon.js';

import '../styles/VidTile.css';

const VidTile = ({vidObj}) => {
  return (
    <section className='fbc vid-tile'>
      <iframe
        src={vidObj.url + '?showinfo=0'}
        className='vid-src'
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
      <div className='vid-info'>
        <h3 className='vid-title'>{vidObj.title}</h3>
        <p className='vid-desc'>{vidObj.description}</p>
        <VideoIcon classame='main-icon' category={vidObj.category} />
        <span className='pm0 vid-tags'>Tags: {vidObj.tags}</span>
      </div>
    </section>
  );
};

export default VidTile;
