import React, { Component } from 'react';

class SearchBar extends Component {
  state = { searchTerm: '' };

  onInputChange = (value) => {
    this.setState({ searchTerm: value });
    console.log(this.state.searchTerm);
  };

  onSearchFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchTermSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSearchFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={(event) => this.onInputChange(event.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
