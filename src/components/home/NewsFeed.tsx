
import React, { useState } from 'react';
import NewsCard, { NewsArticle } from '../ui/NewsCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample news data
const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'OpenAI Unveils GPT-5 with Revolutionary Multimodal Capabilities',
    excerpt: 'The latest version introduces unprecedented reasoning skills and can process images, audio, and text simultaneously.',
    category: 'AI',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    date: '2 hours ago',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    slug: 'openai-unveils-gpt5-capabilities',
    featured: true,
  },
  {
    id: '2',
    title: 'Apple\'s Vision Pro: The Future of Spatial Computing Has Arrived',
    excerpt: 'After years of development, Apple\'s first mixed reality headset promises to change how we interact with digital content.',
    category: 'Apple',
    author: {
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    date: '5 hours ago',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    slug: 'apple-vision-pro-future-spatial-computing',
  },
  {
    id: '3',
    title: 'Leaked Documents Reveal AI Censorship at Major Tech Companies',
    excerpt: 'Internal emails show systematic suppression of certain topics in AI systems deployed worldwide.',
    category: 'Security',
    author: {
      name: 'Alex Freeman',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    date: '8 hours ago',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    slug: 'leaked-documents-ai-censorship',
  },
  {
    id: '4',
    title: 'Startup Funding Hits Record Highs Despite Economic Uncertainty',
    excerpt: 'VC funds have deployed over $120B in the first half of the year, with AI startups leading the way.',
    category: 'Venture',
    author: {
      name: 'Lisa Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    date: '12 hours ago',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    slug: 'startup-funding-record-highs',
  },
  {
    id: '5',
    title: 'New JavaScript Framework Claims 10x Performance Over React',
    excerpt: 'A newcomer to the frontend ecosystem is making big promises, but can it deliver?',
    category: 'Apps',
    author: {
      name: 'David Park',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    date: '15 hours ago',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    slug: 'new-javascript-framework-performance',
  },
  {
    id: '6',
    title: 'Crypto Market Surges as Regulation Clarity Emerges',
    excerpt: 'Bitcoin and other cryptocurrencies see major gains as regulatory frameworks take shape worldwide.',
    category: 'Crypto',
    author: {
      name: 'Emma Wilson',
      avatar: 'https://i.pravatar.cc/150?img=6',
    },
    date: '1 day ago',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    slug: 'crypto-market-surges-regulation',
  },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'ai', name: 'AI' },
  { id: 'startups', name: 'Startups' },
  { id: 'apple', name: 'Apple' },
  { id: 'security', name: 'Security' },
  { id: 'venture', name: 'Venture' },
];

const NewsFeed = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredArticles = activeTab === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category.toLowerCase() === activeTab);

  return (
    <div className="w-full">
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Latest News</h2>
          <TabsList className="p-1 bg-muted">
            {categories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="px-3 py-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewsFeed;
