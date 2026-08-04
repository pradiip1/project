import { Search, SlidersHorizontal } from "lucide-react";
import "./SearchBar.css";

function SearchBar({ value, onChange, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      {/* Search Icon */}
      <div className="search-bar-icon">
        <Search size={22} />
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search phones, laptops, headphones..."
        className="search-bar-input"
      />

      {/* Filter */}
      <button type="button" className="search-bar-filter">
        <SlidersHorizontal size={20} />
      </button>

      {/* Search */}
      <button type="submit" className="search-bar-submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
