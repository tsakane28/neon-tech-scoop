
import React, { useState, useEffect } from 'react';
import NavbarLogo from './navbar/NavbarLogo';
import NavbarLinks from './navbar/NavbarLinks';
import NavbarActions from './navbar/NavbarActions';
import MegaMenu from './navbar/MegaMenu';
import MobileMenu from './navbar/MobileMenu';
import SearchOverlay from './navbar/SearchOverlay';

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
          <NavbarLogo />
          <NavbarLinks 
            megaMenuOpen={megaMenuOpen} 
            toggleMegaMenu={toggleMegaMenu}
          />
          <NavbarActions 
            toggleSearch={toggleSearch} 
            toggleMobileMenu={toggleMobileMenu}
            mobileMenuOpen={mobileMenuOpen}
          />
        </div>

        <MegaMenu 
          megaMenuOpen={megaMenuOpen}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <MobileMenu 
          mobileMenuOpen={mobileMenuOpen}
          categories={categories}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <SearchOverlay 
          searchOpen={searchOpen}
          toggleSearch={toggleSearch}
        />
      </nav>
      <div className="h-16 md:h-20"></div>
    </header>
  );
};

export default Navbar;
