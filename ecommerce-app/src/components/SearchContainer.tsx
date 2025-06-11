import React, { useState } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { FaThList } from 'react-icons/fa';
import './SearchContainer.css'; 

interface SearchContainerProps {
  onSearch: (query: string) => void; // Стейты серча
}

const SearchContainer: React.FC<SearchContainerProps> = ({ onSearch }) => { // Стейт серч для хранения значения
  const [query, setQuery] = useState(''); // Стейты для куерис в запросе

  const handleSubmit = (e: React.FormEvent) => { // Хэндлер сабмита
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

       <div className="search-actions"> {/* Кнопки с actions */}
        <button className="action-button" aria-label="Filter products">
          <FiFilter size={18} />
          <span>Filter</span>
        </button>
        <button className="action-button" aria-label="Browse categories">
          <FaThList size={18} />
          <span>Categories</span>
        </button>
      </div>
    </div>
  );
};

export default SearchContainer;