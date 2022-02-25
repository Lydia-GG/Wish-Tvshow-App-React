import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for : ${searchTerm}`);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for tv shows or actor/actress"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
};

export default Search;
