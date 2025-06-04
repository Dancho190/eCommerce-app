import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './SearchContainer.css'; 

interface SearchContainerProps {
  onSearch: (query: string) => void; // Стейты серча
}

const SearchContainer: React.FC<SearchContainerProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button" aria-label="Search">
          <FiSearch size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchContainer;