import React from 'react';

import VideoIcon from './VideoIcon.js';

import '../styles/VidTile.css';

const VidThumb = ({vidObj}) => {
  return (
    <li className='fbc vid-thumb'>
      <iframe
        src={vidObj.url + '?showinfo=0'}
        className='vid-src'
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
      <div className='vid-info'>
        <VideoIcon category={vidObj.category} />
      </div>
    </li>
  );
};

export default VidThumb;
