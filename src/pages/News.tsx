
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsCard from '@/components/ui/NewsCard';
import NewsletterSubscribe from '@/components/ui/NewsletterSubscribe';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newsArticles } from '@/data/siteData';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'ai', name: 'AI' },
    { id: 'startups', name: 'Startups' },
    { id: 'apple', name: 'Apple' },
    { id: 'security', name: 'Security' },
    { id: 'venture', name: 'Venture' },
    { id: 'apps', name: 'Apps' },
    { id: 'crypto', name: 'Crypto' },
  ];
  
  // Filter articles based on active tab
  const filteredArticles = activeTab === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category.toLowerCase() === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 bg-muted/30">
          <div className="content-container flex justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Stay up-to-date with the latest developments in technology, startups, AI, and more.
              </p>
            </div>
            <Link to="/create/news">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Create News
              </Button>
            </Link>
          </div>
        </section>
        
        {/* News Articles */}
        <section className="py-16">
          <div className="content-container">
            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <div className="flex items-center justify-between mb-8">
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
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <NewsletterSubscribe 
              title="Get the Latest News to Your Inbox" 
              description="Subscribe to our newsletter for daily updates on tech news, startup information, and AI developments."
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
