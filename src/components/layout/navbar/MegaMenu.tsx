
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Category {
  name: string;
  subcategories: string[];
}

interface MegaMenuProps {
  megaMenuOpen: boolean;
  categories: Category[];
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
}

const MegaMenu = ({ 
  megaMenuOpen, 
  categories, 
  selectedCategory, 
  setSelectedCategory 
}: MegaMenuProps) => {
  
  return (
    <div className={`mega-menu ${megaMenuOpen ? 'open' : ''} shadow-2xl`}>
      <div className="content-container py-8">
        <div className="grid grid-cols-12 gap-8">
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
  );
};

export default MegaMenu;
