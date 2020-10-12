import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const labelText = this.context.lang === 'english' ? 'Name' : 'Naam';
    return (
      <div className="ui field">
        <label>{labelText}</label>
        <input autoComplete="off" />
      </div>
    );
  }
}

export default Field;
