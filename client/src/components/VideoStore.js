import React, {createContext, useReducer, useState, useEffect} from 'react';

const VideoContext = createContext([{}, () => {}]);

const VideoContextProvider = props => {
  const [vids, setVids] = useState([]);

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

  let initialState = {
    allVideos: [vids],
    displayedVideos: [],
  };

  const reducer = (state, action) => {
    const match = new RegExp(escapeRegExp(action.searchQuery), 'i');
    const searchResults = allVideos.filter(video => {
      if (match.test(video.title) || match.test(video.tags) === true) {
        return true;
      }
    });

    return {
      ...state,
      displayedVideos: searchResults,
    };
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <VideoContext.Provider value={{state, dispatch}}>
      {props.children}
    </VideoContext.Provider>
  );
};

export {VideoContext, VideoContextProvider};
