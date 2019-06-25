import React from 'react';

const VideoIcon = ({category}) => {
  //Choose correct icon for category
  const cat = category;
  let switchOutput;

  switch (cat) {
    case 'AMA':
      switchOutput = 'fa-comments';
      break;
    default:
      switchOutput = 'fa-question-circle';
  }

  return (
    <span className='fbc pm0 tile-icon'>
      <i className={`far ${switchOutput} fa-2x`} />
      <span className='pm0'>{category}</span>
    </span>
  );
};

export default VideoIcon;
