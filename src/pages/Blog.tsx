
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsCard from '@/components/ui/NewsCard';
import NewsletterSubscribe from '@/components/ui/NewsletterSubscribe';
import { blogPosts } from '@/data/siteData';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 bg-muted/30">
          <div className="content-container flex justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                In-depth articles, analyses, and opinion pieces on the most important topics in tech.
              </p>
            </div>
            <Link to="/create/blog">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Create Post
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Featured Blog Post */}
        {blogPosts.length > 0 && (
          <section className="py-16">
            <div className="content-container">
              <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
              <NewsCard article={blogPosts[0]} variant="horizontal" />
            </div>
          </section>
        )}
        
        {/* Blog Posts */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map(post => (
                <NewsCard key={post.id} article={post} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16">
          <div className="content-container">
            <NewsletterSubscribe 
              title="Join Our Reader Community" 
              description="Subscribe to receive our latest blog posts and in-depth analyses directly to your inbox."
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
