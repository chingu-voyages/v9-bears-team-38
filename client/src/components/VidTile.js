import React from 'react';

const VidTile = ({vidObj}) => {
  return (
    <li className='vid-tile'>
      <div>
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
      </div>
    </li>
  );
};

export default VidTile;
