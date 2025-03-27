
import React from 'react';
import { FileText, Copy, Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface CodeSnippet {
  id: string;
  title: string;
  language: string;
  code: string;
  description: string;
  author: string;
  date: string;
}

// Sample code snippets
const codeSnippets: CodeSnippet[] = [
  {
    id: '1',
    title: 'React useState Hook Example',
    language: 'jsx',
    code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;`,
    description: 'A simple counter component using React useState hook',
    author: 'React Dev',
    date: '2 weeks ago'
  },
  {
    id: '2',
    title: 'TypeScript Interface Example',
    language: 'typescript',
    code: `interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean;
  metadata: {
    lastLogin: Date;
    preferences: string[];
  };
}

// Using the interface
const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  metadata: {
    lastLogin: new Date(),
    preferences: ['dark-mode', 'notifications']
  }
};`,
    description: 'How to define and use TypeScript interfaces',
    author: 'TS Expert',
    date: '1 month ago'
  },
  {
    id: '3',
    title: 'CSS Grid Layout',
    language: 'css',
    code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
}

.grid-item {
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 0.5rem;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}`,
    description: 'Responsive grid layout using CSS Grid',
    author: 'CSS Wizard',
    date: '3 weeks ago'
  }
];

const CodeSnippetCard: React.FC<{ snippet: CodeSnippet }> = ({ snippet }) => {
  const [copied, setCopied] = React.useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    toast({
      title: "Code Copied!",
      description: "The code snippet has been copied to your clipboard."
    });
    
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="p-4">
        <h4 className="font-medium">{snippet.title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{snippet.description}</p>
      </div>
      
      <div className="relative bg-muted/50 p-4 overflow-x-auto text-sm font-mono">
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={handleCopy}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
        <pre className="whitespace-pre-wrap">{snippet.code}</pre>
      </div>
      
      <div className="bg-card p-3 flex items-center justify-between text-xs text-muted-foreground">
        <div>Language: <span className="font-medium">{snippet.language}</span></div>
        <div>By {snippet.author} • {snippet.date}</div>
      </div>
    </div>
  );
};

interface CodeSnippetsProps {
  limit?: number;
}

const CodeSnippets: React.FC<CodeSnippetsProps> = ({ limit = 3 }) => {
  const displayedSnippets = codeSnippets.slice(0, limit);
  
  return (
    <div className="rounded-xl bg-card p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <FileText className="h-5 w-5 text-primary mr-2" />
          <h3 className="text-xl font-bold">Code Snippets</h3>
        </div>
        <Link to="/snippets" className="text-sm text-primary flex items-center hover:underline">
          View all <ExternalLink className="h-3 w-3 ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {displayedSnippets.map(snippet => (
          <CodeSnippetCard key={snippet.id} snippet={snippet} />
        ))}
      </div>
    </div>
  );
};

export default CodeSnippets;
