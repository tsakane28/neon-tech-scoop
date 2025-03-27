
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsCard from '@/components/ui/NewsCard';
import PodcastCard from '@/components/ui/PodcastCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newsArticles, blogPosts, podcastEpisodes } from '@/data/siteData';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [activeTab, setActiveTab] = useState('all');
  
  // Filter content based on search query
  const filteredNews = newsArticles.filter(article => 
    article.title.toLowerCase().includes(query.toLowerCase()) || 
    article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
    (article.content && article.content.toLowerCase().includes(query.toLowerCase()))
  );
  
  const filteredBlogs = blogPosts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
    (post.content && post.content.toLowerCase().includes(query.toLowerCase()))
  );
  
  const filteredPodcasts = podcastEpisodes.filter(episode => 
    episode.title.toLowerCase().includes(query.toLowerCase()) || 
    episode.description.toLowerCase().includes(query.toLowerCase())
  );
  
  // All results for the "All" tab
  const allResults = [
    ...filteredNews.map(item => ({ ...item, type: 'news' })),
    ...filteredBlogs.map(item => ({ ...item, type: 'blog' })),
    ...filteredPodcasts.map(item => ({ ...item, type: 'podcast' })),
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Search Results</h1>
            <p className="text-xl text-muted-foreground">
              {query ? `Showing results for "${query}"` : 'Enter a search term to find content'}
            </p>
          </div>
        </section>
        
        {/* Search Results */}
        <section className="py-16">
          <div className="content-container">
            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <TabsList className="mb-8">
                <TabsTrigger value="all">All ({allResults.length})</TabsTrigger>
                <TabsTrigger value="news">News ({filteredNews.length})</TabsTrigger>
                <TabsTrigger value="blog">Blog ({filteredBlogs.length})</TabsTrigger>
                <TabsTrigger value="podcast">Podcasts ({filteredPodcasts.length})</TabsTrigger>
              </TabsList>
              
              {/* All Results */}
              <TabsContent value="all">
                {allResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allResults.map(item => {
                      if (item.type === 'podcast') {
                        return <PodcastCard key={`podcast-${item.id}`} episode={item} />;
                      } else {
                        return <NewsCard key={`${item.type}-${item.id}`} article={item} />;
                      }
                    })}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">No results found. Try a different search term.</p>
                )}
              </TabsContent>
              
              {/* News Results */}
              <TabsContent value="news">
                {filteredNews.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNews.map(article => (
                      <NewsCard key={article.id} article={article} />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">No news articles found. Try a different search term.</p>
                )}
              </TabsContent>
              
              {/* Blog Results */}
              <TabsContent value="blog">
                {filteredBlogs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map(post => (
                      <NewsCard key={post.id} article={post} />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">No blog posts found. Try a different search term.</p>
                )}
              </TabsContent>
              
              {/* Podcast Results */}
              <TabsContent value="podcast">
                {filteredPodcasts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPodcasts.map(episode => (
                      <PodcastCard key={episode.id} episode={episode} />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">No podcasts found. Try a different search term.</p>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
