
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author?: {
    name: string;
    avatar?: string;
  };
  date: string;
  readTime?: string;
  image?: string;
  slug: string;
  featured?: boolean;
}

interface NewsCardProps {
  article: NewsArticle;
  variant?: 'default' | 'horizontal' | 'compact';
}

const NewsCard: React.FC<NewsCardProps> = ({ article, variant = 'default' }) => {
  if (variant === 'horizontal') {
    return (
      <Link 
        to={`/article/${article.slug}`} 
        className="group flex flex-col sm:flex-row gap-6 card-hover rounded-xl overflow-hidden bg-card"
      >
        {article.image && (
          <div className="sm:w-1/3 relative overflow-hidden aspect-video sm:aspect-square">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className={`p-6 flex flex-col ${article.image ? 'sm:w-2/3' : 'w-full'}`}>
          <div className="mb-auto">
            <Link 
              to={`/category/${article.category.toLowerCase()}`}
              className="inline-block mb-3 text-sm font-medium text-primary hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {article.category}
            </Link>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {article.excerpt}
            </p>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            {article.author && (
              <>
                {article.author.avatar ? (
                  <img 
                    src={article.author.avatar} 
                    alt={article.author.name} 
                    className="w-6 h-6 rounded-full mr-2"
                  />
                ) : null}
                <span className="mr-3">{article.author.name}</span>
                <span className="mr-3">•</span>
              </>
            )}
            <span className="mr-3">{article.date}</span>
            {article.readTime && (
              <>
                <span className="mr-3">•</span>
                <Clock className="w-4 h-4 mr-1" />
                <span>{article.readTime}</span>
              </>
            )}
          </div>
        </div>
      </Link>
    );
  }
  
  if (variant === 'compact') {
    return (
      <Link 
        to={`/article/${article.slug}`} 
        className="group flex gap-4 card-hover p-3 rounded-lg"
      >
        {article.image && (
          <div className="flex-none w-16 h-16 relative overflow-hidden rounded-md">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-grow">
          <h3 className="text-sm font-medium mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <div className="flex items-center text-xs text-muted-foreground">
            <span>{article.date}</span>
            {article.readTime && (
              <>
                <span className="mx-2">•</span>
                <Clock className="w-3 h-3 mr-1" />
                <span>{article.readTime}</span>
              </>
            )}
          </div>
        </div>
      </Link>
    );
  }
  
  // Default card
  return (
    <Link 
      to={`/article/${article.slug}`} 
      className="group flex flex-col card-hover rounded-xl overflow-hidden bg-card h-full"
    >
      {article.image && (
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Link 
            to={`/category/${article.category.toLowerCase()}`}
            className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {article.category}
          </Link>
          {article.featured && (
            <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full neon-border bg-background/80 backdrop-blur-sm">
              Featured
            </div>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-auto">
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {article.excerpt}
          </p>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          {article.author && (
            <>
              {article.author.avatar ? (
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name} 
                  className="w-6 h-6 rounded-full mr-2"
                />
              ) : null}
              <span className="mr-3">{article.author.name}</span>
              <span className="mr-3">•</span>
            </>
          )}
          <span className="mr-3">{article.date}</span>
          {article.readTime && (
            <>
              <span className="mr-3">•</span>
              <Clock className="w-4 h-4 mr-1" />
              <span>{article.readTime}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
