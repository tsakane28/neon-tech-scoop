
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PodcastCard from '@/components/ui/PodcastCard';
import NewsletterSubscribe from '@/components/ui/NewsletterSubscribe';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { podcastEpisodes } from '@/data/siteData';

const Podcasts = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Get unique podcast names for filtering
  const podcastNames = ['all', ...new Set(podcastEpisodes.map(podcast => podcast.podcastName.toLowerCase()))];
  
  // Filter podcasts based on active tab
  const filteredPodcasts = activeTab === 'all' 
    ? podcastEpisodes 
    : podcastEpisodes.filter(podcast => podcast.podcastName.toLowerCase() === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tech Podcasts</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Listen to thought-provoking conversations about technology, startups, venture capital, and more.
            </p>
          </div>
        </section>
        
        {/* Podcasts */}
        <section className="py-16">
          <div className="content-container">
            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <div className="flex items-center justify-between mb-8">
                <TabsList className="p-1 bg-muted">
                  {podcastNames.map(name => (
                    <TabsTrigger 
                      key={name} 
                      value={name}
                      className="px-3 py-1.5 capitalize data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {name === 'all' ? 'All' : name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPodcasts.map(podcast => (
                    <PodcastCard key={podcast.id} episode={podcast} variant="horizontal" />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Featured Episodes */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <h2 className="text-2xl font-bold mb-8">Popular Episodes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {podcastEpisodes.slice(0, 4).map(podcast => (
                <PodcastCard key={podcast.id} episode={podcast} variant="compact" />
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16">
          <div className="content-container">
            <NewsletterSubscribe 
              title="Subscribe to Our Podcast Newsletter" 
              description="Get notified when new episodes are released and stay updated on the latest tech conversations."
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Podcasts;
