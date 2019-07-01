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
        setVids(videos);
        dispatch({
          type: 'initialize',
          payload: videos,
        });
      });
  }, []);

  const initialState = {
    allVideos: [],
    displayedVideos: [],
  };

  const reducer = (state, action) => {
    //Switch to determine action of reducer
    switch (action.type) {
      //Case to initialize state with fetched data
      case 'initialize': {
        return {
          ...state,
          allVideos: action.payload,
          displayedVideos: action.payload,
        };
      }
      //case to update displayed videos by search query
      case 'search': {
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
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <VideoContext.Provider value={{state, dispatch}}>
      {props.children}
    </VideoContext.Provider>
  );
};

export {VideoContext, VideoContextProvider};
