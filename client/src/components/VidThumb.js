import React from 'react';

import VideoIcon from './VideoIcon.js';

import '../styles/VidTile.css';

const VidThumb = ({vidObj, setMainVid, pos}) => {
  let subStringTitle = `${vidObj.title.substring(0, 33)} ...`;
  return (
    <li className='fbc vid-thumb'>
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
      <div className='fbr thumb-info'>
        <VideoIcon classname='thumb-icon' category={vidObj.category} />
        <h5 className='thumb-title'>{subStringTitle}</h5>
      </div>
    </li>
  );
};

export default VidThumb;
