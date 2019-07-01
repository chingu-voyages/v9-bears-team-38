import React, {useContext} from 'react';

import {VideoContext} from './VideoStore.js';
import VidTile from './VidTile.js';
import SearchError from './SearchError.js';

import '../styles/DisplayedVids.css';

const DisplayedVids = props => {
  //Pull in Video Context to consume
  let {state} = useContext(VideoContext);

  return (
    <ul className='pm0 all-vids'>
      {state.displayedVideos.length > 0 ? (
        state.displayedVideos.map(vid => {
          return <VidTile vidObj={vid} key={vid.title} />;
        })
      ) : (
        <SearchError />
      )}
    </ul>
  );
};

export default DisplayedVids;
