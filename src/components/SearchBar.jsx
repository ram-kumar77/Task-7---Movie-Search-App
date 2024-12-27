import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') onSearch(query);
  };

  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <h1 className="text-4xl font-bold mb-6">Find Your Favorite Movies</h1>
      <div className="flex w-2/5 md:w-80 ">
  
        <input
          type="text"
          className="flex-grow p-3 rounded-l-lg focus:outline-none text-slate-800"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-red-600 px-6 py-3 rounded-r-lg hover:bg-red-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
