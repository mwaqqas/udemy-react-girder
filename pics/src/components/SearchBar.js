import React, { Component } from 'react';

class SearchBar extends Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.funcForOnSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Search: </label>
            <input
              name="search"
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
