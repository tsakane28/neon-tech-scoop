
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PodcastCard from '@/components/ui/PodcastCard';
import NewsletterSubscribe from '@/components/ui/NewsletterSubscribe';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { podcastEpisodes } from '@/data/siteData';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Podcasts = () => {
  // Get unique podcast names
  const podcastNames = Array.from(new Set(podcastEpisodes.map(episode => episode.podcastName)));
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 bg-muted/30">
          <div className="content-container flex justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Tech Podcasts</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Listen to our curated collection of tech podcasts featuring interviews, discussions, and analyses.
              </p>
            </div>
            <Link to="/create/podcast">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Create Podcast
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Featured Episodes */}
        <section className="py-16">
          <div className="content-container">
            <h2 className="text-2xl font-bold mb-8">Featured Episodes</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {podcastEpisodes.slice(0, 2).map(episode => (
                <PodcastCard key={episode.id} episode={episode} variant="horizontal" />
              ))}
            </div>
          </div>
        </section>
        
        {/* Podcast Series */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <h2 className="text-2xl font-bold mb-8">Browse By Series</h2>
            
            <Tabs defaultValue="all">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All Series</TabsTrigger>
                {podcastNames.map(name => (
                  <TabsTrigger key={name} value={name}>{name}</TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {podcastEpisodes.map(episode => (
                    <PodcastCard key={episode.id} episode={episode} />
                  ))}
                </div>
              </TabsContent>
              
              {podcastNames.map(name => (
                <TabsContent key={name} value={name}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {podcastEpisodes
                      .filter(episode => episode.podcastName === name)
                      .map(episode => (
                        <PodcastCard key={episode.id} episode={episode} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16">
          <div className="content-container">
            <NewsletterSubscribe 
              title="Never Miss an Episode" 
              description="Subscribe to receive notifications when new podcast episodes are published."
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Podcasts;
