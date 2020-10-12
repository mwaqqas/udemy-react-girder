import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext, { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends Component {
  render() {
    return (
      <div className="ui container data-children-count=1">
        <LanguageStore>
          <LanguageSelector />
          <div></div>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
