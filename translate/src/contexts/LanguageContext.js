import React, { Component, createContext } from 'react';

const Context = createContext('english');

export class LanguageStore extends Component {
  state = { lang: 'english' };

  onLangChange = (lang) => {
    this.setState({ lang: lang });
  };
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLangChange: this.onLangChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
