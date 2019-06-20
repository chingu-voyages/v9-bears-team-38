import React, {useEffect, useState} from 'react';

const GetVids = () => {
  const [vids, setVids] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/getvid', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(videos => {
        setVids(videos);
      });
  }, []);

  return (
    <ul className='all-vids'>
      {!!vids &&
        vids.map((vid, i) => {
          return (
            <li className='video' key={i}>
              {vid.title}
            </li>
          );
        })}
    </ul>
  );
};

export default GetVids;
