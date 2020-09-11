import React, { Component } from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import './App.css';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  onSearchTermSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: { q: searchTerm },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onSearchTermSubmit('popular');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <div className="ui grid">
          <div className="ten wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
