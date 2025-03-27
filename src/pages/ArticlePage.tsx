import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsletterSubscribe from '@/components/ui/NewsletterSubscribe';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';
import { newsArticles, blogPosts } from '@/data/siteData';

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the article with the matching slug
  const article = useMemo(() => {
    // Search in both news articles and blog posts
    const allArticles = [...newsArticles, ...blogPosts];
    return allArticles.find(article => article.slug === slug);
  }, [slug]);
  
  // If article not found, redirect to 404
  useEffect(() => {
    if (!article && slug) {
      navigate('/not-found');
    }
  }, [article, navigate, slug]);
  
  if (!article) {
    return null;
  }
  
  // Find related articles
  const relatedArticles = useMemo(() => {
    const allArticles = [...newsArticles, ...blogPosts];
    return allArticles
      .filter(item => item.id !== article.id && item.category === article.category)
      .slice(0, 3);
  }, [article]);
  
  // Format the date
  const formattedDate = article.date;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Article Header */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <div className="flex items-center gap-2 mb-4">
              <Link 
                to={`/category/${article.category.toLowerCase()}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                {article.category}
              </Link>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{formattedDate}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{article.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
            
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={article.author.avatar} />
                <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{article.author.name}</p>
                <p className="text-sm text-muted-foreground">Writer</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-16">
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <div className="mb-8">
                  <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="lead">{article.excerpt}</p>
                  
                  {/* If content exists, display it */}
                  {article.content ? (
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                  ) : (
                    // Default content if none provided
                    <>
                      <p>The tech industry continues to evolve at a breakneck pace, with new developments emerging daily that challenge our understanding of what's possible. This article explores the implications of these changes and what they mean for businesses, consumers, and society at large.</p>
                      <h2>Understanding the Impact</h2>
                      <p>As technology becomes increasingly integrated into every aspect of our lives, it's crucial to consider both the opportunities and challenges it presents. From artificial intelligence to blockchain, these technologies offer tremendous potential for innovation and progress.</p>
                      <p>However, they also raise important questions about privacy, security, and the changing nature of work. How we navigate these questions will shape the future of the tech industry and its role in society.</p>
                      <h2>Looking Ahead</h2>
                      <p>The next decade promises to bring even more radical changes as technologies mature and converge. Companies that stay ahead of these trends will be well-positioned to capitalize on new opportunities, while those that fail to adapt may struggle to remain relevant.</p>
                      <p>For consumers, these changes will bring both convenience and complexity. Understanding the implications of new technologies will be essential for making informed decisions about which products and services to adopt.</p>
                      <h2>Conclusion</h2>
                      <p>The tech landscape will continue to evolve in ways we can't fully predict. By staying informed and engaged, we can help shape a future where technology serves human needs and values.</p>
                    </>
                  )}
                </div>
              </div>
              
              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedArticles.map(relatedArticle => (
                      <Link 
                        key={relatedArticle.id}
                        to={`/article/${relatedArticle.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-4">
                          <div className="flex-none w-20 h-20 rounded-md overflow-hidden">
                            <img 
                              src={relatedArticle.image}
                              alt={relatedArticle.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                              {relatedArticle.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {relatedArticle.readTime}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="text-xl font-bold mb-6">Share This Article</h3>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Link2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <NewsletterSubscribe 
              title="Want More Tech Insights?" 
              description="Subscribe to our newsletter for the latest news, analysis, and deep dives into the tech world."
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticlePage;
