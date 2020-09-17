import React, { useState } from 'react';

const SearchBar = ({ onSearchTermSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onSearchTermSubmit(searchTerm);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
