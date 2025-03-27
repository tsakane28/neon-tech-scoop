
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Clock } from 'lucide-react';

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  podcastName: string;
  image: string;
  audio: string;
  duration: string;
  date: string;
  slug: string;
}

interface PodcastCardProps {
  episode: PodcastEpisode;
  variant?: 'default' | 'horizontal' | 'compact';
}

const PodcastCard: React.FC<PodcastCardProps> = ({ episode, variant = 'default' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!audioElement) {
      const audio = new Audio(episode.audio);
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

  if (variant === 'horizontal') {
    return (
      <div className="group flex flex-col sm:flex-row gap-6 card-hover rounded-xl overflow-hidden bg-card relative">
        <div className="sm:w-1/3 relative overflow-hidden aspect-square">
          <img
            src={episode.image}
            alt={episode.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
            </div>
          </button>
        </div>
        <div className="p-6 sm:w-2/3 flex flex-col">
          <div className="mb-auto">
            <div className="flex justify-between items-start mb-3">
              <Link
                to={`/podcasts/${episode.podcastName.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-primary hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                {episode.podcastName}
              </Link>
            </div>
            <Link to={`/podcast/${episode.slug}`}>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {episode.title}
              </h3>
            </Link>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {episode.description}
            </p>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>{episode.date}</span>
            <span className="mx-3">•</span>
            <Clock className="w-4 h-4 mr-1" />
            <span>{episode.duration}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="group flex gap-4 card-hover p-3 rounded-lg relative">
        <div className="flex-none w-16 h-16 relative overflow-hidden rounded-md">
          <img
            src={episode.image}
            alt={episode.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
              {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 ml-0.5" />}
            </div>
          </button>
        </div>
        <div className="flex-grow">
          <Link to={`/podcast/${episode.slug}`}>
            <h3 className="text-sm font-medium mb-1 line-clamp-2 group-hover:text-primary transition-colors">
              {episode.title}
            </h3>
          </Link>
          <div className="flex items-center text-xs text-muted-foreground">
            <span>{episode.podcastName}</span>
            <span className="mx-2">•</span>
            <span>{episode.duration}</span>
          </div>
        </div>
      </div>
    );
  }

  // Default card
  return (
    <div className="group flex flex-col card-hover rounded-xl overflow-hidden bg-card h-full relative">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={episode.image}
          alt={episode.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
          </div>
        </button>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-auto">
          <Link
            to={`/podcasts/${episode.podcastName.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-block mb-2 text-sm font-medium text-primary hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {episode.podcastName}
          </Link>
          <Link to={`/podcast/${episode.slug}`}>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {episode.title}
            </h3>
          </Link>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {episode.description}
          </p>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{episode.date}</span>
          <span className="mx-3">•</span>
          <Clock className="w-4 h-4 mr-1" />
          <span>{episode.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
