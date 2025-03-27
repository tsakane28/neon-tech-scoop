
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, ArrowRight, BookOpen, Calendar, FileText, Video } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="content-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Newsletter */}
          <div className="md:col-span-4">
            <Link to="/" className="block mb-4">
              <h2 className="text-2xl font-bold gradient-text">NeonTech</h2>
            </Link>
            
            <p className="text-muted-foreground mb-6">
              Your source for the latest tech news, startups, AI developments, and more.
            </p>
            
            <h3 className="font-semibold mb-4">Subscribe to our newsletter</h3>
            
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-grow rounded-l-lg border border-r-0 border-input bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button 
                type="submit"
                className="rounded-r-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors flex items-center"
              >
                <span>Subscribe</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
          
          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><Link to="/category/ai" className="text-muted-foreground hover:text-foreground transition-colors">AI</Link></li>
                <li><Link to="/category/startups" className="text-muted-foreground hover:text-foreground transition-colors">Startups</Link></li>
                <li><Link to="/category/venture" className="text-muted-foreground hover:text-foreground transition-colors">Venture</Link></li>
                <li><Link to="/category/security" className="text-muted-foreground hover:text-foreground transition-colors">Security</Link></li>
                <li><Link to="/category/apps" className="text-muted-foreground hover:text-foreground transition-colors">Apps</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Content</h3>
              <ul className="space-y-2">
                <li><Link to="/news" className="text-muted-foreground hover:text-foreground transition-colors">News</Link></li>
                <li><Link to="/podcasts" className="text-muted-foreground hover:text-foreground transition-colors">Podcasts</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link to="/events" className="text-muted-foreground hover:text-foreground transition-colors">Events</Link></li>
                <li><Link to="/newsletters" className="text-muted-foreground hover:text-foreground transition-colors">Newsletters</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/glossary" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Tech Glossary
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Events Calendar
                  </Link>
                </li>
                <li>
                  <Link to="/snippets" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Code Snippets
                  </Link>
                </li>
                <li>
                  <Link to="/videos" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                    <Video className="h-4 w-4 mr-2" />
                    Video Tutorials
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link to="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</Link></li>
                <li><Link to="/accessibility" className="text-muted-foreground hover:text-foreground transition-colors">Accessibility</Link></li>
                <li><Link to="/sitemap" className="text-muted-foreground hover:text-foreground transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} NeonTech. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
