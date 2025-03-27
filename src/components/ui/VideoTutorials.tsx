
import React from 'react';
import { Video, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface VideoTutorial {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  author: string;
  date: string;
  category: string;
}

// Sample video tutorials data
const videoTutorials: VideoTutorial[] = [
  {
    id: '1',
    title: 'Getting Started with React 18',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    duration: '12:34',
    author: 'Dev Tutorials',
    date: '2 weeks ago',
    category: 'Development'
  },
  {
    id: '2',
    title: 'Understanding AI Machine Learning Fundamentals',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
    duration: '18:42',
    author: 'AI Academy',
    date: '1 month ago',
    category: 'AI'
  },
  {
    id: '3',
    title: 'Building Your First Blockchain Application',
    thumbnail: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example3',
    duration: '23:15',
    author: 'Crypto Dev',
    date: '3 weeks ago',
    category: 'Blockchain'
  }
];

interface VideoTutorialsProps {
  limit?: number;
}

const VideoTutorials: React.FC<VideoTutorialsProps> = ({ limit = 3 }) => {
  const displayedVideos = videoTutorials.slice(0, limit);
  
  return (
    <div className="rounded-xl bg-card p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Video className="h-5 w-5 text-primary mr-2" />
          <h3 className="text-xl font-bold">Video Tutorials</h3>
        </div>
        <Link to="/videos" className="text-sm text-primary flex items-center hover:underline">
          View all <ExternalLink className="h-3 w-3 ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedVideos.map(video => (
          <div key={video.id} className="group">
            <div className="relative mb-3 overflow-hidden rounded-lg">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </AspectRatio>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                <a 
                  href={video.videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors"
                >
                  <Video className="h-6 w-6" />
                </a>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                {video.duration}
              </div>
            </div>
            
            <a 
              href={video.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group-hover:text-primary transition-colors"
            >
              <h4 className="font-medium line-clamp-2">{video.title}</h4>
            </a>
            
            <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
              <span>{video.author}</span>
              <span>{video.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTutorials;
