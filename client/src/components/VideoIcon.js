import React from 'react';

const VideoIcon = ({category}) => {
  //Choose correct icon for category
  const cat = category;
  let switchOutput;

  switch (cat) {
    case 'AMA':
      switchOutput = 'far fa-comments';
      break;
    case 'Tutorial':
      switchOutput = 'fas fa-book';
      break;
    case 'Showcase':
      switchOutput = 'fas fa-flag-checkered';
      break;
    case 'Meet The Dev':
      switchOutput = 'far fa-handshake';
      break;
    case 'Visualization':
      switchOutput = 'fas fa-project-diagram';
      break;
    case 'Project':
      switchOutput = 'fas fa-laptop-code';
      break;
    case 'Other':
      switchOutput = 'fas fa-user-astronaut';
      break;
    default:
      switchOutput = 'fa-question-circle';
  }

  return (
    <span className='fbc pm0 tile-icon'>
      <i className={`${switchOutput} fa-2x`} />
      <span className='pm0'>{category}</span>
    </span>
  );
};

export default VideoIcon;
