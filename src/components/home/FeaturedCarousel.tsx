
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  slug: string;
}

const featuredArticles: FeaturedArticle[] = [
  {
    id: '1',
    title: 'OpenAI Unveils GPT-5 with Revolutionary Multimodal Capabilities',
    excerpt: 'The latest version introduces unprecedented reasoning skills and can process images, audio, and text simultaneously.',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80',
    date: '2 hours ago',
    slug: 'openai-unveils-gpt5-capabilities'
  },
  {
    id: '2',
    title: 'Apple\'s Vision Pro: The Future of Spatial Computing Has Arrived',
    excerpt: 'After years of development, Apple\'s first mixed reality headset promises to change how we interact with digital content.',
    category: 'Apple',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
    date: '5 hours ago',
    slug: 'apple-vision-pro-future-spatial-computing'
  },
  {
    id: '3',
    title: 'Leaked Documents Reveal AI Censorship at Major Tech Companies',
    excerpt: 'Internal emails show systematic suppression of certain topics in AI systems deployed worldwide.',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80',
    date: '8 hours ago',
    slug: 'leaked-documents-ai-censorship'
  },
  {
    id: '4',
    title: 'Startup Funding Hits Record Highs Despite Economic Uncertainty',
    excerpt: 'VC funds have deployed over $120B in the first half of the year, with AI startups leading the way.',
    category: 'Venture',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80',
    date: '12 hours ago',
    slug: 'startup-funding-record-highs'
  },
];

const FeaturedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlides = featuredArticles.length;
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (slideIndex: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    let newIndex = slideIndex;
    
    if (newIndex < 0) {
      newIndex = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
      newIndex = 0;
    }
    
    setCurrentSlide(newIndex);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match the duration of the transition
  };

  const nextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide - 1);
  };

  // Reset the autoplay timer when the slide changes manually
  useEffect(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide]);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 h-1 bg-background/20">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-in-out"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        ></div>
      </div>
      
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px]"
      >
        {featuredArticles.map((article, index) => (
          <div
            key={article.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Image with gradient overlay */}
            <div className="absolute inset-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-end z-20">
              <div className="content-container pb-16 md:pb-24">
                <div className="max-w-3xl animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <Link 
                    to={`/category/${article.category.toLowerCase()}`}
                    className="inline-block mb-4 px-3 py-1 text-sm font-medium rounded-full border neon-border bg-background/10 backdrop-blur-sm"
                  >
                    {article.category}
                  </Link>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                    {article.title}
                  </h2>
                  
                  <p className="text-lg md:text-xl text-white/80 mb-6">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-white/60 text-sm">
                    <span>{article.date}</span>
                  </div>
                  
                  <Link
                    to={`/article/${article.slug}`}
                    className="mt-6 inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-transform hover:translate-y-[-2px] hover:shadow-lg"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-background/20 backdrop-blur-md text-white hover:bg-background/30 transition-colors"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <button
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-background/20 backdrop-blur-md text-white hover:bg-background/30 transition-colors"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {featuredArticles.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'w-8 bg-primary' 
                : 'w-2 bg-background/40 hover:bg-background/60'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
