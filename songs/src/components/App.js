import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row" style={{ marginTop: '50px' }}>
        <div className="column eight wide">
          <div className="ui segment">
            <SongList />
          </div>
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
