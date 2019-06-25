import React from 'react';

const VideoIcon = ({category}) => {
  return (
    <span className='fbc pm0 tile-icon'>
      <i className='far fa-question-circle fa-2x' />
      <span className='pm0'>{category}</span>
    </span>
  );
};

export default VideoIcon;
