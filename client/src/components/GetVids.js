import React, {useEffect, useState} from 'react';

import VidTile from './VidTile.js';

import '../styles/GetVids.css';

const GetVids = ({vids}) => {
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
      {!!vids &&
        vids.map(vid => {
          return <VidTile vidObj={vid} key={vid.title} />;
        })}
    </ul>
  );
};

export default GetVids;
