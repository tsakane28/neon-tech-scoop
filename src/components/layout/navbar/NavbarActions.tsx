
import React from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../../ui/ThemeSwitcher';

interface NavbarActionsProps {
  toggleSearch: () => void;
  toggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
}

const NavbarActions = ({ toggleSearch, toggleMobileMenu, mobileMenuOpen }: NavbarActionsProps) => {
  return (
    <div className="flex items-center space-x-4">
      <button 
        onClick={toggleSearch}
        className="p-2 rounded-full hover:bg-muted transition-colors"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>
      
      <ThemeSwitcher />
      
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
  );
};

export default NavbarActions;
