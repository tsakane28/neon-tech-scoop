
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavbarLinksProps {
  megaMenuOpen: boolean;
  toggleMegaMenu: () => void;
}

const NavbarLinks = ({ megaMenuOpen, toggleMegaMenu }: NavbarLinksProps) => {
  return (
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
      
      <Link to="/glossary" className="font-medium hover:text-primary transition-colors">
        Glossary
      </Link>
    </div>
  );
};

export default NavbarLinks;
