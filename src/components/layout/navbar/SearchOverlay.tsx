
import React from 'react';
import { X } from 'lucide-react';
import SearchBar from '../../ui/SearchBar';

interface SearchOverlayProps {
  searchOpen: boolean;
  toggleSearch: () => void;
}

const SearchOverlay = ({ searchOpen, toggleSearch }: SearchOverlayProps) => {
  return (
    <div 
      className={`fixed inset-0 z-40 glass flex flex-col items-center justify-start pt-20 px-4 ${
        searchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      } transition-all duration-300`}
    >
      <button 
        onClick={toggleSearch}
        className="absolute top-6 right-6 p-2 hover:bg-muted/50 rounded-full transition-colors"
        aria-label="Close search"
      >
        <X className="h-6 w-6" />
      </button>
      
      <div className="w-full max-w-2xl">
        <SearchBar onClose={toggleSearch} />
      </div>
    </div>
  );
};

export default SearchOverlay;
