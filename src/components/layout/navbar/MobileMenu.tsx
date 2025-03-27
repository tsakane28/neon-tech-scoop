
import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  name: string;
  subcategories: string[];
}

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  categories: Category[];
  setMobileMenuOpen: (open: boolean) => void;
}

const MobileMenu = ({ mobileMenuOpen, categories, setMobileMenuOpen }: MobileMenuProps) => {
  return (
    <div 
      className={`fixed inset-0 z-40 glass ${
        mobileMenuOpen ? 'flex flex-col' : 'hidden'
      }`}
    >
      <div className="h-16"></div>
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
            to="/glossary" 
            className="block py-3 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Glossary
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
  );
};

export default MobileMenu;
