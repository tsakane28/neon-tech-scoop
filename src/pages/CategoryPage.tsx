
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsCard from '@/components/ui/NewsCard';
import PodcastCard from '@/components/ui/PodcastCard';
import NewsletterSubscribe from '@/components/ui/NewsletterSubscribe';
import { getArticlesByCategory, getCategoryByName, getPodcastsByCategory } from '@/data/siteData';

const CategoryPage = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory?: string }>();
  
  // Get category data
  const categoryData = getCategoryByName(category || '');
  
  // Get articles for this category
  const articles = getArticlesByCategory(category || '');
  
  // Get podcasts if this is a podcast category
  const podcasts = category?.toLowerCase() === 'podcasts' && subcategory 
    ? getPodcastsByCategory(subcategory) 
    : [];
  
  // If no category was found, we still render the page but with no results
  const title = subcategory 
    ? `${subcategory}` 
    : categoryData?.name || (category || '').charAt(0).toUpperCase() + (category || '').slice(1);
  
  const description = categoryData?.description || `Latest ${title} news, articles, and updates.`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section 
          className="py-24 bg-muted/30 relative"
          style={{
            backgroundImage: categoryData?.image ? `url(${categoryData.image})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {categoryData?.image && (
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30"></div>
          )}
          
          <div className="content-container relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {description}
            </p>
            
            {/* Subcategories */}
            {categoryData?.subcategories && categoryData.subcategories.length > 0 && !subcategory && (
              <div className="mt-8 flex flex-wrap gap-3">
                {categoryData.subcategories.map((sub) => (
                  <a 
                    key={sub}
                    href={`/category/${category?.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-background/80 backdrop-blur-sm hover:bg-card px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    {sub}
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Articles */}
        {articles.length > 0 && (
          <section className="py-16">
            <div className="content-container">
              <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map(article => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Podcasts */}
        {podcasts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="content-container">
              <h2 className="text-2xl font-bold mb-8">{subcategory} Podcasts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {podcasts.map(podcast => (
                  <PodcastCard key={podcast.id} episode={podcast} variant="horizontal" />
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Display message if no content */}
        {articles.length === 0 && podcasts.length === 0 && (
          <section className="py-16">
            <div className="content-container text-center">
              <h2 className="text-xl font-medium mb-4">No content available yet</h2>
              <p className="text-muted-foreground">
                We're working on adding articles and podcasts to this category. Check back soon!
              </p>
            </div>
          </section>
        )}
        
        {/* Newsletter */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <NewsletterSubscribe 
              title={`Stay Updated on ${title}`} 
              description={`Subscribe to receive the latest ${title.toLowerCase()} news and updates directly to your inbox.`}
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
