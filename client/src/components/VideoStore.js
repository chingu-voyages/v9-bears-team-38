import React, {createContext, useReducer, useState, useEffect} from 'react';
import escapeRegExp from 'escape-string-regexp';

//Initial creation of Context to be consumed
const VideoContext = createContext([{}, () => {}]);

const VideoContextProvider = props => {
  const [vids, setVids] = useState([]);

  //Hook to fetch videos from DB and place them in state through dispatch method from below reducer
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

  //Initial state to be fed to reducer, replaced by fetch above when promise resolves
  const initialState = {
    allVideos: [],
    displayedVideos: [],
  };

  //Reducer used to pull in state and update it with action fed to dispatch method
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
      //Case to update displayed videos by search query
      case 'search': {
        const match = new RegExp(escapeRegExp(action.searchQuery), 'i');
        const searchResults = state.allVideos.filter(video => {
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

  //Initialize actual reducer with above defined reducer and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <VideoContext.Provider value={{state, dispatch}}>
      {props.children}
    </VideoContext.Provider>
  );
};

export {VideoContext, VideoContextProvider};
