
import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface NewsletterSubscribeProps {
  variant?: 'default' | 'inline' | 'card';
  title?: string;
  description?: string;
}

const NewsletterSubscribe: React.FC<NewsletterSubscribeProps> = ({
  variant = 'default',
  title = 'Stay updated with tech news',
  description = 'Get the latest tech news, startup updates, and AI developments delivered to your inbox.',
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our next newsletter in your inbox.",
      });
    }, 1000);
  };

  if (variant === 'inline') {
    return (
      <div className="w-full">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            disabled={isSubmitting || isSubscribed}
            className="flex-grow rounded-lg border border-input bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-70"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting || isSubscribed}
            className={`rounded-lg px-5 py-2 text-sm font-medium transition-colors flex items-center justify-center whitespace-nowrap
              ${isSubscribed
                ? 'bg-green-600 text-white'
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
              }
              disabled:opacity-70
            `}
          >
            {isSubmitting ? (
              'Subscribing...'
            ) : isSubscribed ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Subscribed
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className="glass rounded-xl p-6 sm:p-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            disabled={isSubmitting || isSubscribed}
            className="w-full rounded-lg border border-input bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-70"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting || isSubscribed}
            className={`w-full rounded-lg px-5 py-2 text-sm font-medium transition-colors flex items-center justify-center
              ${isSubscribed
                ? 'bg-green-600 text-white'
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
              }
              disabled:opacity-70
            `}
          >
            {isSubmitting ? (
              'Subscribing...'
            ) : isSubscribed ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Subscribed
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    );
  }

  // Default variant
  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">{title}</h2>
      <p className="text-muted-foreground mb-6 max-w-lg mx-auto">{description}</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mx-auto max-w-lg">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          disabled={isSubmitting || isSubscribed}
          className="flex-grow rounded-lg border border-input bg-transparent px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-70"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting || isSubscribed}
          className={`rounded-lg px-6 py-3 font-medium transition-colors flex items-center justify-center whitespace-nowrap
            ${isSubscribed
              ? 'bg-green-600 text-white'
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
            }
            disabled:opacity-70
          `}
        >
          {isSubmitting ? (
            'Subscribing...'
          ) : isSubscribed ? (
            <>
              <CheckCircle className="mr-2 h-5 w-5" />
              Subscribed
            </>
          ) : (
            <>
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default NewsletterSubscribe;
