import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

import './App.css';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('popular');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onSearchTermSubmit={search} />
      <div className="ui grid">
        <div className="ten wide column">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="six wide column">
          <VideoList
            videos={videos}
            onVideoSelect={(video) => setSelectedVideo(video)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
