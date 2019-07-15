import React, {useContext, useState} from 'react';

import {VideoContext} from './VideoStore.js';
import VidTile from './VidTile.js';
import VidThumb from './VidThumb.js';
// import VidTileSmall from './VidTileSmall.js';
import SearchError from './SearchError.js';

import '../styles/DisplayedVids.css';

const DisplayedVids = props => {
  //Destructure state from Context to get videos from Store
  let {state} = useContext(VideoContext);

  const [currentPosition, setCurrentPosition] = useState(0);

  const setMainVid = pos => {
    setCurrentPosition(pos);
  };

  return (
    <section className='all-vids'>
      <div className='main-vid'>
        {state.displayedVideos.length > 0 && (
          <VidTile
            vidObj={state.displayedVideos[currentPosition]}
            key='MAINVID'
          />
        )}
      </div>
      <h3 className='current-displayed'>
        {state.filter === '' ? 'All' : state.filter} Videos (
        {state.displayedVideos.length})
      </h3>
      <ul className='fbr pm0 thumbs'>
        {state.displayedVideos.length > 0 ? (
          state.displayedVideos.map((vid, i) => {
            return (
              <VidThumb
                setMainVid={setMainVid}
                vidObj={vid}
                pos={i}
                key={vid.title}
              />
            );
          })
        ) : (
          <SearchError />
        )}
      </ul>
    </section>
  );
};

export default DisplayedVids;
