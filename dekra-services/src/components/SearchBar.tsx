import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to services page with search query
      navigate(`/services?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="bg-gray-50 py-3 md:py-4 border-b sticky top-0 z-40">
      <div className="container-custom px-4">
        <form onSubmit={handleSearch} className="flex gap-2 md:gap-4 max-w-3xl mx-auto">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Rechercher un service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 md:px-6 py-2 md:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
            />
          </div>
          <button
            type="submit"
            className="px-4 md:px-8 py-2 md:py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-colors flex items-center gap-1 md:gap-2 text-sm md:text-base whitespace-nowrap"
          >
            <Search size={18} className="md:w-5 md:h-5" />
            <span className="hidden md:inline">Rechercher</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
