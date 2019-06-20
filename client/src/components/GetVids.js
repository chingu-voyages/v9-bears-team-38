import React, {useEffect, useState} from 'react';

const GetVids = () => {
  const [vids, setVids] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/getvid', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(videos => {
        console.log(videos);
        setVids(videos);
      });
  }, []);

  return (
    <ul className='all-vids'>
      {!!vids &&
        vids.map(vid => {
          return (
            <li className='video' key={vid._id}>
              <div>
                <iframe
                  width='560'
                  height='315'
                  src={vid.url}
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
                <ul>
                  <li>{vid.title}</li>
                  <li>{vid.category}</li>
                  <li>{vid.date}</li>
                </ul>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default GetVids;
