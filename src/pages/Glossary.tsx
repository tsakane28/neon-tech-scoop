
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TechGlossary from '@/components/ui/TechGlossary';

const Glossary = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tech Glossary</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A comprehensive guide to tech terminology, jargon, and acronyms used in the technology industry.
            </p>
          </div>
        </section>
        
        {/* Glossary Content */}
        <section className="py-16">
          <div className="content-container">
            <TechGlossary />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Glossary;
