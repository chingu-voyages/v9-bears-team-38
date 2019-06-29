import React, {useEffect, useState} from 'react';

import VidTile from './VidTile.js';
import SearchError from './SearchError.js';

import '../styles/DisplayedVids.css';

const DisplayedVids = ({vids}) => {
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
      {vids.length > 0 ? (
        vids.map(vid => {
          return <VidTile vidObj={vid} key={vid.title} />;
        })
      ) : (
        <SearchError />
      )}
    </ul>
  );
};

export default DisplayedVids;
