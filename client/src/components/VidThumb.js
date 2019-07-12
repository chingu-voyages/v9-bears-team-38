import React from 'react';

import VideoIcon from './VideoIcon.js';

import '../styles/VidTile.css';

const VidThumb = ({vidObj, setMainVid, pos}) => {
  return (
    <li className='vid-thumb'>
      <span
        className='cover-link pointer'
        onClick={() => {
          setMainVid(pos);
        }}
      />
      <iframe
        src={vidObj.url + '?showinfo=0'}
        className='vid-src'
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
      <VideoIcon classname='thumb-icon' category={vidObj.category} />
    </li>
  );
};

export default VidThumb;
