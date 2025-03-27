
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsCard, { NewsArticle } from '@/components/ui/NewsCard';
import PodcastCard, { PodcastEpisode } from '@/components/ui/PodcastCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search as SearchIcon } from 'lucide-react';
import { newsArticles, blogPosts, podcastEpisodes } from '@/data/siteData';

// Define a union type for search results
type SearchResult = {
  type: string;
} & (NewsArticle | PodcastEpisode);

// Helper function to check if a result is a podcast episode
const isPodcastEpisode = (result: SearchResult): result is SearchResult & PodcastEpisode => {
  return 'podcastName' in result && 'audio' in result;
};

// Helper function to check if a result is a news article
const isNewsArticle = (result: SearchResult): result is SearchResult & NewsArticle => {
  return 'excerpt' in result && 'category' in result && 'readTime' in result;
};

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    if (query) {
      const lowerQuery = query.toLowerCase();
      
      // Search in news articles
      const newsResults = newsArticles.map(article => ({
        type: 'news',
        ...article
      })).filter(article => 
        article.title.toLowerCase().includes(lowerQuery) || 
        article.excerpt.toLowerCase().includes(lowerQuery)
      );
      
      // Search in blog posts
      const blogResults = blogPosts.map(post => ({
        type: 'blog',
        ...post
      })).filter(post => 
        post.title.toLowerCase().includes(lowerQuery) || 
        post.excerpt.toLowerCase().includes(lowerQuery)
      );
      
      // Search in podcasts
      const podcastResults = podcastEpisodes.map(episode => ({
        type: 'podcast',
        ...episode
      })).filter(episode => 
        episode.title.toLowerCase().includes(lowerQuery) || 
        episode.description.toLowerCase().includes(lowerQuery)
      );
      
      // Combine results
      setResults([...newsResults, ...blogResults, ...podcastResults]);
    } else {
      setResults([]);
    }
  }, [query]);

  const filteredResults = activeTab === 'all' 
    ? results 
    : results.filter(result => result.type === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {query ? `Search Results for "${query}"` : 'Search'}
            </h1>
            
            <div className="relative">
              <form action="/search" method="get" className="flex">
                <div className="relative flex-grow">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input 
                    type="text" 
                    name="q" 
                    defaultValue={query}
                    placeholder="Search for articles, podcasts, and more..." 
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-input bg-background"
                  />
                </div>
                <button 
                  type="submit" 
                  className="ml-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>
        
        {query && (
          <section className="py-16">
            <div className="content-container">
              <Tabs defaultValue="all" onValueChange={setActiveTab}>
                <TabsList className="mb-8">
                  <TabsTrigger value="all">All Results ({results.length})</TabsTrigger>
                  <TabsTrigger value="news">News ({results.filter(r => r.type === 'news').length})</TabsTrigger>
                  <TabsTrigger value="blog">Blog ({results.filter(r => r.type === 'blog').length})</TabsTrigger>
                  <TabsTrigger value="podcast">Podcasts ({results.filter(r => r.type === 'podcast').length})</TabsTrigger>
                </TabsList>
                
                <TabsContent value={activeTab} className="mt-0">
                  {filteredResults.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8">
                      {filteredResults.map(result => (
                        <div key={`${result.type}-${result.id}`}>
                          {isPodcastEpisode(result) ? (
                            <PodcastCard episode={result} variant="horizontal" />
                          ) : isNewsArticle(result) ? (
                            <NewsCard article={result} variant="horizontal" />
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-xl text-muted-foreground">No results found. Try different keywords.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
