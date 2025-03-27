
import React, { useState, useEffect } from 'react';
import { Search, User, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from '../ui/SearchBar';

const categories = [
  { name: 'AI', subcategories: ['Machine Learning', 'Natural Language', 'Computer Vision', 'OpenAI'] },
  { name: 'Startups', subcategories: ['Funding', 'Founders', 'Accelerators', 'IPOs'] },
  { name: 'Venture', subcategories: ['Series A', 'Series B', 'Angel Investing', 'VC News'] },
  { name: 'Security', subcategories: ['Data Breaches', 'Cybersecurity', 'Privacy', 'Hacking'] },
  { name: 'Apps', subcategories: ['iOS', 'Android', 'Web Apps', 'Reviews'] },
  { name: 'Events', subcategories: ['Conferences', 'Hackathons', 'Meetups', 'Webinars'] },
  { name: 'Podcasts', subcategories: ['Equity', 'StrictlyVC', 'Tech News', 'Interviews'] },
  { name: 'Newsletters', subcategories: ['Daily News', 'Weekly Roundup', 'Funding News', 'Tech Deep Dives'] },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchOpen, setSearchOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (megaMenuOpen && !target.closest('.mega-menu') && !target.closest('.mega-menu-trigger')) {
        setMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [megaMenuOpen]);

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!megaMenuOpen);
    if (!megaMenuOpen) {
      setMobileMenuOpen(false);
      setSearchOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setMegaMenuOpen(false);
      setSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setMegaMenuOpen(false);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header>
      <nav 
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-2 shadow-md' : 'bg-transparent py-4'
        }`}
      >
        <div className="content-container flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <h1 className="text-2xl font-bold gradient-text">NeonTech</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="mega-menu-trigger flex items-center cursor-pointer"
              onClick={toggleMegaMenu}
            >
              <span className={`font-medium transition-colors ${megaMenuOpen ? 'text-primary' : ''}`}>
                Categories
              </span>
              <ChevronDown 
                className={`ml-1 h-4 w-4 transition-transform ${megaMenuOpen ? 'rotate-180 text-primary' : ''}`} 
              />
            </div>
            
            <Link to="/news" className="font-medium hover:text-primary transition-colors">
              News
            </Link>
            
            <Link to="/podcasts" className="font-medium hover:text-primary transition-colors">
              Podcasts
            </Link>
            
            <Link to="/blog" className="font-medium hover:text-primary transition-colors">
              Blog
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Link 
              to="/auth" 
              className="hidden sm:flex items-center p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </Link>
            
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <div className={`mega-menu ${megaMenuOpen ? 'open' : ''} shadow-2xl`}>
          <div className="content-container py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Categories */}
              <div className="col-span-3 border-r border-border">
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button
                        className={`w-full text-left py-2 px-4 rounded-md flex justify-between items-center ${
                          selectedCategory.name === category.name 
                            ? 'bg-accent text-accent-foreground' 
                            : 'hover:bg-muted'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category.name}
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Subcategories */}
              <div className="col-span-9">
                <h3 className="text-lg font-semibold mb-4">{selectedCategory.name}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {selectedCategory.subcategories.map((subcategory) => (
                    <Link 
                      key={subcategory} 
                      to={`/category/${selectedCategory.name.toLowerCase()}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                      className="py-2 px-4 rounded-md hover:bg-muted transition-colors"
                    >
                      {subcategory}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 z-40 glass ${
            mobileMenuOpen ? 'flex flex-col' : 'hidden'
          }`}
        >
          <div className="h-16"></div> {/* Space for the navbar */}
          <div className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-4 py-4">
              {categories.map((category) => (
                <li key={category.name} className="py-2">
                  <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                  <div className="ml-4 grid grid-cols-2 gap-2">
                    {category.subcategories.map((subcategory) => (
                      <Link 
                        key={subcategory} 
                        to={`/category/${category.name.toLowerCase()}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                        className="py-1.5 text-sm hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="border-t border-border mt-4 pt-4">
              <Link 
                to="/news" 
                className="block py-3 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                to="/podcasts" 
                className="block py-3 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Podcasts
              </Link>
              <Link 
                to="/blog" 
                className="block py-3 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/auth" 
                className="block py-3 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In / Register
              </Link>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
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
      </nav>
      <div className="h-16 md:h-20"></div> {/* Space for the navbar */}
    </header>
  );
};

export default Navbar;
