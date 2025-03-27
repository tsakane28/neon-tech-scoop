
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import Podcasts from "./pages/Podcasts";
import Blog from "./pages/Blog";
import ArticlePage from "./pages/ArticlePage";
import PodcastPage from "./pages/PodcastPage";
import CategoryPage from "./pages/CategoryPage";
import Search from "./pages/Search";
import CreateNews from "./pages/CreateNews";
import CreateBlog from "./pages/CreateBlog";
import CreatePodcast from "./pages/CreatePodcast";

// Create a client
const queryClient = new QueryClient();

// Apply dark class to root element for dark mode
const initializeDarkMode = () => {
  document.documentElement.classList.add('dark');
};

const App = () => {
  useEffect(() => {
    initializeDarkMode();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/news" element={<News />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="/podcast/:slug" element={<PodcastPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/category/:category/:subcategory" element={<CategoryPage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create/news" element={<CreateNews />} />
            <Route path="/create/blog" element={<CreateBlog />} />
            <Route path="/create/podcast" element={<CreatePodcast />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
