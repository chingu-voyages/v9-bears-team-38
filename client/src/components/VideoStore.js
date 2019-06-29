import React, {createContext} from 'react';

const VideoStore = () => {
  const VideoContext = createContext();
  const VideoContextProvider = props => {
    const initialState = {
      allVideos: [],
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
};

export default VideoStore;
