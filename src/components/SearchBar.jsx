import { Search, SlidersHorizontal } from "lucide-react";

function SearchBar({ value, onChange, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 rounded-3xl bg-white p-3 shadow-xl"
    >
      {/* Search Icon */}

      <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
        <Search size={22} />
      </div>

      {/* Input */}

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search phones, laptops, headphones..."
        className="flex-1 border-none bg-transparent text-lg outline-none"
      />

      {/* Filter */}

      <button
        type="button"
        className="rounded-2xl bg-gray-100 p-3 transition hover:bg-gray-200"
      >
        <SlidersHorizontal size={20} />
      </button>

      {/* Search */}

      <button
        type="submit"
        className="rounded-5xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-800 hover:scale-110"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;