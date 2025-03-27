
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsletterSubscribe from '@/components/ui/NewsletterSubscribe';
import PodcastCard from '@/components/ui/PodcastCard';
import { getPodcastBySlug, getPodcastsByCategory, podcastEpisodes } from '@/data/siteData';
import { Play, Pause, Clock } from 'lucide-react';

const PodcastPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const podcast = getPodcastBySlug(slug || '');
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  
  // Get related podcasts from the same show (excluding the current one)
  const relatedPodcasts = podcast 
    ? getPodcastsByCategory(podcast.podcastName).filter(p => p.id !== podcast.id).slice(0, 3)
    : [];
  
  // Handle play/pause
  const togglePlay = () => {
    if (!podcast) return;
    
    if (!audioElement) {
      const audio = new Audio(podcast.audio);
      audio.addEventListener('ended', () => setIsPlaying(false));
      setAudioElement(audio);
      audio.play();
      setIsPlaying(true);
    } else {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // If podcast not found, display message
  if (!podcast) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Podcast Not Found</h1>
            <p className="text-muted-foreground mb-6">The podcast episode you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/podcasts"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
            >
              Browse Podcasts
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Podcast Image and Play Button */}
              <div className="md:w-1/3 lg:w-1/4 relative rounded-xl overflow-hidden aspect-square">
                <img 
                  src={podcast.image} 
                  alt={podcast.title} 
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
                    {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                  </div>
                </button>
              </div>
              
              {/* Podcast Details */}
              <div className="md:w-2/3 lg:w-3/4">
                <Link 
                  to={`/category/podcasts/${podcast.podcastName.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block mb-2 text-sm font-medium text-primary hover:underline"
                >
                  {podcast.podcastName}
                </Link>
                
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                  {podcast.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  {podcast.description}
                </p>
                
                <div className="flex items-center text-muted-foreground">
                  <span>{podcast.date}</span>
                  <span className="mx-3">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{podcast.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Audio Player (simplified) */}
        <section className="py-6 border-y border-border sticky top-16 bg-card z-30">
          <div className="content-container">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
              </button>
              
              <div className="flex-grow">
                <h3 className="text-sm font-medium line-clamp-1">{podcast.title}</h3>
                <p className="text-xs text-muted-foreground">{podcast.podcastName}</p>
              </div>
              
              <span className="text-sm text-muted-foreground">{podcast.duration}</span>
            </div>
          </div>
        </section>
        
        {/* Transcript Placeholder */}
        <section className="py-16">
          <div className="content-container max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Episode Transcript</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                This is a placeholder for the podcast transcript. In a real implementation, 
                this would contain the full text transcript of the podcast episode, 
                making it accessible to those who prefer reading or are hearing impaired.
              </p>
              
              <p>
                Transcripts also improve SEO by making the full content of the podcast 
                searchable by search engines. They typically include timestamps and 
                speaker identifications to make it easy to follow along.
              </p>
            </div>
          </div>
        </section>
        
        {/* More Episodes */}
        {relatedPodcasts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="content-container">
              <h2 className="text-2xl font-bold mb-8">More from {podcast.podcastName}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPodcasts.map(relatedPodcast => (
                  <PodcastCard key={relatedPodcast.id} episode={relatedPodcast} />
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* All Podcasts */}
        <section className="py-16">
          <div className="content-container">
            <h2 className="text-2xl font-bold mb-8">Popular Episodes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {podcastEpisodes.slice(0, 4).map(episode => (
                <PodcastCard key={episode.id} episode={episode} variant="compact" />
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <NewsletterSubscribe 
              title="Subscribe to Our Podcast" 
              description="Get notified when new episodes are released and never miss the latest tech conversations."
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PodcastPage;
