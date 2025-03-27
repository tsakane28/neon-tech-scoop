
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight } from 'lucide-react';

interface TrendingTopic {
  id: string;
  name: string;
  count: number;
  category: string;
}

// Sample data for trending topics
const trendingTopics: TrendingTopic[] = [
  { id: '1', name: 'OpenAI', count: 1243, category: 'ai' },
  { id: '2', name: 'Vision Pro', count: 876, category: 'apple' },
  { id: '3', name: 'React', count: 731, category: 'apps' },
  { id: '4', name: 'Blockchain', count: 654, category: 'crypto' },
  { id: '5', name: 'Angel Investing', count: 598, category: 'venture' },
  { id: '6', name: 'Series A', count: 534, category: 'venture' },
  { id: '7', name: 'WWDC', count: 487, category: 'events' },
  { id: '8', name: 'Data Breach', count: 432, category: 'security' }
];

const TrendingTopics = () => {
  return (
    <div className="rounded-xl bg-card p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <TrendingUp className="h-5 w-5 text-primary mr-2" />
          <h3 className="text-lg font-bold">Trending Topics</h3>
        </div>
        <Link to="/trends" className="text-sm text-primary flex items-center hover:underline">
          View all <ArrowRight className="h-3 w-3 ml-1" />
        </Link>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {trendingTopics.map((topic) => (
          <Link 
            key={topic.id}
            to={`/search?q=${encodeURIComponent(topic.name)}`}
            className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium hover:bg-primary/10 transition-colors flex items-center gap-1.5"
          >
            {topic.name}
            <span className="text-xs text-muted-foreground">({topic.count})</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
