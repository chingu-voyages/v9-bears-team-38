import React, {useContext, useState, useEffect} from 'react';

import {VideoContext} from './VideoStore.js';
import VidTile from './VidTile.js';
import VidThumb from './VidThumb.js';
// import VidTileSmall from './VidTileSmall.js';
import SearchError from './SearchError.js';

import '../styles/DisplayedVids.css';

const DisplayedVids = ({currentVid, setCurrentVid}) => {
  //Destructure state from Context to get videos from Store
  let {state} = useContext(VideoContext);

  //Scroll to top after any refresh
  useEffect(() => {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //IE, Chrome, Moz
  });

  return (
    <section className='all-vids'>
      <div className='main-vid'>
        {state.displayedVideos.length > 0 && (
          <VidTile vidObj={state.displayedVideos[currentVid]} key='MAINVID' />
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
                setMainVid={setCurrentVid}
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
