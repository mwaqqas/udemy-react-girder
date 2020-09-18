import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Smells Like Teen Spirit', duration: '4:00' },
    { title: 'Crazy Diamond', duration: '8:05' },
    { title: 'No Quarter', duration: '6:39' },
    { title: 'Hate or Glory', duration: '3:40' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
