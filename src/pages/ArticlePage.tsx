
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsletterSubscribe from '@/components/ui/NewsletterSubscribe';
import NewsCard from '@/components/ui/NewsCard';
import { getArticleBySlug, newsArticles } from '@/data/siteData';
import { Clock } from 'lucide-react';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');
  
  // Get related articles (excluding the current one)
  const relatedArticles = article 
    ? newsArticles
        .filter(a => a.category === article.category && a.id !== article.id)
        .slice(0, 3)
    : [];

  // If article not found, display message
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
            >
              Return to Home
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
        <section 
          className="pt-16 pb-32 relative bg-gradient-to-b from-background to-muted/30"
          style={{
            backgroundImage: article.image ? `url(${article.image})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {article.image && (
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30"></div>
          )}
          
          <div className="content-container max-w-4xl mx-auto relative z-10">
            <Link 
              to={`/category/${article.category.toLowerCase()}`}
              className="inline-block mb-4 px-3 py-1 text-sm font-medium rounded-full border neon-border bg-background/10 backdrop-blur-sm"
            >
              {article.category}
            </Link>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {article.excerpt}
            </p>
            
            <div className="flex items-center">
              {article.author && (
                <div className="flex items-center mr-6">
                  {article.author.avatar && (
                    <img 
                      src={article.author.avatar} 
                      alt={article.author.name} 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                  )}
                  <span className="font-medium">{article.author.name}</span>
                </div>
              )}
              
              <div className="flex items-center text-muted-foreground text-sm">
                <span>{article.date}</span>
                {article.readTime && (
                  <>
                    <span className="mx-3">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{article.readTime}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-16">
          <div className="content-container max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {article.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <p>This article content is not available.</p>
              )}
            </div>
          </div>
        </section>
        
        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="content-container">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map(relatedArticle => (
                  <NewsCard key={relatedArticle.id} article={relatedArticle} />
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Newsletter */}
        <section className="py-16">
          <div className="content-container">
            <NewsletterSubscribe 
              title="Never Miss a Story" 
              description="Get the latest technology news and in-depth analyses delivered to your inbox."
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticlePage;
