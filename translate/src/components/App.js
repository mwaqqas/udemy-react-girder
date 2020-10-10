import React, { Component } from 'react';
import UserCreate from './UserCreate';

class App extends Component {
  state = { lang: 'english' };

  onLangChange = (language) => {
    this.setState({ lang: language });
  };

  render() {
    return (
      <div className="ui container data-children-count=1">
        Select a language:
        <i
          className="flag us"
          onClick={() => {
            this.onLangChange('english');
          }}
          style={{ cursor: 'pointer' }}
        />
        <i
          className="flag nl"
          onClick={() => {
            this.onLangChange('dutch');
          }}
          style={{ cursor: 'pointer' }}
        />
        {this.state.lang}
        <div></div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
