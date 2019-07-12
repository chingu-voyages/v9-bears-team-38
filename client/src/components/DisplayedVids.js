import React, {useContext} from 'react';

import {VideoContext} from './VideoStore.js';
import VidTile from './VidTile.js';
import VidThumb from './VidThumb.js';
// import VidTileSmall from './VidTileSmall.js';
import SearchError from './SearchError.js';

import '../styles/DisplayedVids.css';

const DisplayedVids = props => {
  //Destructure state from Context to get videos from Store
  let {state} = useContext(VideoContext);

  return (
    <section>
      {state.displayedVideos.length > 0 && (
        <VidTile vidObj={state.displayedVideos[0]} key='MAINVID' />
      )}
      <ul className='pm0 all-vids'>
        {state.displayedVideos.length > 0 ? (
          state.displayedVideos.map(vid => {
            return <VidThumb vidObj={vid} key={vid.title} />;
          })
        ) : (
          <SearchError />
        )}
      </ul>
    </section>
  );
};

export default DisplayedVids;
