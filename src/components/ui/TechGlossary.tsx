
import React, { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: string;
}

// Sample glossary terms
const glossaryTerms: GlossaryTerm[] = [
  {
    id: '1',
    term: 'API',
    definition: 'Application Programming Interface. A set of rules that allows different software applications to communicate with each other.',
    category: 'Development'
  },
  {
    id: '2',
    term: 'Machine Learning',
    definition: 'A subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.',
    category: 'AI'
  },
  {
    id: '3',
    term: 'Blockchain',
    definition: 'A decentralized, distributed ledger technology that records transactions across multiple computers.',
    category: 'Crypto'
  },
  {
    id: '4',
    term: 'Cloud Computing',
    definition: 'The delivery of computing services over the internet, including servers, storage, databases, networking, software, and analytics.',
    category: 'Infrastructure'
  },
  {
    id: '5',
    term: 'DevOps',
    definition: 'A set of practices that combines software development and IT operations to shorten the development lifecycle.',
    category: 'Development'
  },
  {
    id: '6',
    term: 'UI/UX',
    definition: 'User Interface (UI) refers to the visual elements users interact with. User Experience (UX) encompasses the overall experience a user has with a product.',
    category: 'Design'
  },
  {
    id: '7',
    term: 'Quantum Computing',
    definition: 'Computing using quantum-mechanical phenomena such as superposition and entanglement.',
    category: 'Computing'
  },
  {
    id: '8',
    term: 'LLM',
    definition: 'Large Language Model. A type of artificial intelligence algorithm based on deep learning techniques and trained on vast amounts of text data.',
    category: 'AI'
  }
];

const TechGlossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  
  // Generate alphabet for index
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  
  // Filter terms based on search or active letter
  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = searchTerm === '' || 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesLetter = !activeLetter || term.term.charAt(0).toUpperCase() === activeLetter;
    
    return matchesSearch && matchesLetter;
  });
  
  // Group terms by first letter
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.term.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);
  
  return (
    <div className="rounded-xl bg-card p-6 shadow-sm border">
      <div className="flex items-center mb-6">
        <BookOpen className="h-5 w-5 text-primary mr-2" />
        <h3 className="text-xl font-bold">Tech Glossary</h3>
      </div>
      
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          type="text"
          placeholder="Search for tech terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <div className="flex flex-wrap gap-1 mb-6">
        <button
          onClick={() => setActiveLetter(null)}
          className={`w-8 h-8 flex items-center justify-center rounded-md ${!activeLetter ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
        >
          All
        </button>
        {alphabet.map(letter => (
          <button
            key={letter}
            onClick={() => setActiveLetter(letter)}
            className={`w-8 h-8 flex items-center justify-center rounded-md ${activeLetter === letter ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
            disabled={!Object.keys(groupedTerms).includes(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      
      {filteredTerms.length > 0 ? (
        <div className="space-y-6">
          {Object.entries(groupedTerms)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([letter, terms]) => (
              <div key={letter} id={`glossary-${letter}`}>
                <h4 className="text-lg font-bold mb-3 border-b pb-2">{letter}</h4>
                <div className="space-y-4">
                  {terms.map(term => (
                    <div key={term.id} className="pb-3">
                      <div className="flex items-start">
                        <span className="font-semibold mr-2">{term.term}</span>
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{term.category}</span>
                      </div>
                      <p className="text-muted-foreground mt-1">{term.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No matching terms found.</p>
        </div>
      )}
    </div>
  );
};

export default TechGlossary;
