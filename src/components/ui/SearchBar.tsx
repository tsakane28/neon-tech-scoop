
import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onClose?: () => void;
  compact?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose, compact = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      if (onClose) onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && onClose) {
      onClose();
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`relative w-full ${compact ? 'max-w-md' : ''}`}
    >
      <div 
        className={`
          flex items-center w-full rounded-xl border transition-all duration-300
          ${isFocused ? 'neon-border shadow-lg' : 'border-input shadow'}
          ${compact ? 'h-10' : 'h-14'}
        `}
      >
        <div className="flex-none px-3">
          <Search className={`${compact ? 'h-4 w-4' : 'h-5 w-5'} text-muted-foreground`} />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder="Search for news, podcasts, and more..."
          className={`
            flex-grow bg-transparent focus:outline-none
            ${compact ? 'text-sm' : 'text-base'}
          `}
        />
        
        <button 
          type="submit"
          className={`
            flex-none rounded-r-xl bg-primary text-primary-foreground flex items-center justify-center
            transition-all hover:brightness-110 active:brightness-90
            ${compact ? 'w-10 h-10' : 'w-14 h-14'}
          `}
          disabled={!searchTerm.trim()}
        >
          <ArrowRight className={`${compact ? 'h-4 w-4' : 'h-5 w-5'}`} />
        </button>
      </div>
      
      {!compact && (
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm font-medium text-muted-foreground">Trending:</span>
          {['AI', 'OpenAI', 'Apple', 'Startup Funding', 'Web3'].map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => {
                setSearchTerm(term);
                if (inputRef.current) {
                  inputRef.current.focus();
                }
              }}
              className="text-sm px-3 py-1 bg-muted/50 hover:bg-muted rounded-full transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
