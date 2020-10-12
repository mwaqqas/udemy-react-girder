import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => {
            this.context.onLangChange('english');
          }}
          style={{ cursor: 'pointer' }}
        />
        <i
          className="flag nl"
          onClick={() => {
            this.context.onLangChange('dutch');
          }}
          style={{ cursor: 'pointer' }}
        />
      </div>
    );
  }
}

export default LanguageSelector;
