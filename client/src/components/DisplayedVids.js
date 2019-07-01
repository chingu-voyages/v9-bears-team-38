import React, {useEffect, useState, useContext} from 'react';

import {VideoContext} from './VideoStore.js';
import VidTile from './VidTile.js';
import SearchError from './SearchError.js';

import '../styles/DisplayedVids.css';

const DisplayedVids = props => {
  let vidContext = useContext(VideoContext);
  const {videos} = vidContext.state.displayedVideos;
  console.log(vidContext.state.displayedVideos);
  // const [vids, setVids] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:8000/api/getvid', {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(videos => {
  //       console.log(videos);
  //       setVids(videos);
  //     });
  // }, []);

  return (
    <ul className='pm0 all-vids'>
      {videos.length > 0 ? (
        videos.map(vid => {
          return <VidTile vidObj={vid} key={vid.title} />;
        })
      ) : (
        <SearchError />
      )}
    </ul>
  );
};

export default DisplayedVids;
