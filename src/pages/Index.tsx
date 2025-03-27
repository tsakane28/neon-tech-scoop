
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeaturedCarousel from '@/components/home/FeaturedCarousel';
import NewsFeed from '@/components/home/NewsFeed';
import NewsletterSubscribe from '@/components/ui/NewsletterSubscribe';
import PodcastCard, { PodcastEpisode } from '@/components/ui/PodcastCard';
import NewsCard, { NewsArticle } from '@/components/ui/NewsCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample podcasts data
const featuredPodcasts: PodcastEpisode[] = [
  {
    id: '1',
    title: 'The Rise of Generative AI in Business',
    description: 'We explore how companies are integrating generative AI into their workflows and the challenges they face.',
    podcastName: 'Equity',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    audio: 'https://example.com/podcast1.mp3',
    duration: '45 min',
    date: '2 days ago',
    slug: 'rise-of-generative-ai-business'
  },
  {
    id: '2',
    title: 'Venture Capital in a Post-Pandemic World',
    description: 'How has the pandemic reshaped venture capital? We talk to leading VCs about the new investment landscape.',
    podcastName: 'StrictlyVC',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    audio: 'https://example.com/podcast2.mp3',
    duration: '38 min',
    date: '4 days ago',
    slug: 'venture-capital-post-pandemic'
  },
  {
    id: '3',
    title: 'The Future of Work: Remote, Hybrid, or Office?',
    description: 'Tech companies are setting the trend for how we'll work in the future. We discuss the pros and cons of different models.',
    podcastName: 'Equity',
    image: 'https://images.unsplash.com/photo-1585976219691-0b092629cf02?auto=format&fit=crop&w=800&q=80',
    audio: 'https://example.com/podcast3.mp3',
    duration: '52 min',
    date: '1 week ago',
    slug: 'future-of-work-models'
  },
  {
    id: '4',
    title: 'Cybersecurity Threats in the Age of AI',
    description: 'As AI becomes more powerful, so do potential cybersecurity threats. Experts discuss what businesses should be prepared for.',
    podcastName: 'TechCrunch',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    audio: 'https://example.com/podcast4.mp3',
    duration: '41 min',
    date: '1 week ago',
    slug: 'cybersecurity-threats-ai-age'
  }
];

// Sample blog posts
const blogPosts: NewsArticle[] = [
  {
    id: 'b1',
    title: 'The Ethical Implications of AI in Content Creation',
    excerpt: 'As AI tools become more capable of generating human-like content, we explore the ethical questions raised for creators and publishers.',
    category: 'Blog',
    author: {
      name: 'Jessica Miller',
      avatar: 'https://i.pravatar.cc/150?img=7',
    },
    date: '2 days ago',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
    slug: 'ethical-implications-ai-content-creation'
  },
  {
    id: 'b2',
    title: 'Web3 and the Creator Economy: What's Next?',
    excerpt: 'Is Web3 still the future for content creators? We examine the current state of blockchain-based platforms for artists and writers.',
    category: 'Blog',
    author: {
      name: 'Robert Zhang',
      avatar: 'https://i.pravatar.cc/150?img=8',
    },
    date: '4 days ago',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    slug: 'web3-creator-economy-future'
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section>
          <FeaturedCarousel />
        </section>
        
        {/* Quick Links */}
        <section className="py-8 border-b border-border">
          <div className="content-container">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
              {['AI', 'Startups', 'Security', 'Venture', 'Apple', 'Events'].map((topic) => (
                <Link 
                  key={topic}
                  to={`/category/${topic.toLowerCase()}`}
                  className="bg-card hover:bg-card/80 px-5 py-3 rounded-lg font-medium transition-all hover:translate-y-[-2px] flex items-center"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* News Feed */}
        <section className="py-16">
          <div className="content-container">
            <NewsFeed />
          </div>
        </section>
        
        {/* Podcasts */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Featured Podcasts</h2>
              <Link 
                to="/podcasts"
                className="flex items-center text-primary hover:underline font-medium"
              >
                View all podcasts
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPodcasts.slice(0, 2).map(podcast => (
                <PodcastCard key={podcast.id} episode={podcast} variant="horizontal" />
              ))}
            </div>
            
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {featuredPodcasts.slice(0, 4).map(podcast => (
                <PodcastCard key={podcast.id} episode={podcast} variant="compact" />
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog Section */}
        <section className="py-16">
          <div className="content-container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">From the Blog</h2>
              <Link 
                to="/blog"
                className="flex items-center text-primary hover:underline font-medium"
              >
                View all posts
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map(post => (
                <NewsCard key={post.id} article={post} variant="horizontal" />
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <NewsletterSubscribe 
              title="Subscribe to TechCrunch Daily" 
              description="Get the latest technology news, startup information, and AI developments delivered to your inbox every weekday."
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
