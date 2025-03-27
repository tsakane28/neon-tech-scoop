
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface BlogFormValues {
  title: string;
  excerpt: string;
  content: string;
  authorName: string;
  authorAvatar: string;
  readTime: string;
  image: FileList;
}

const CreateBlog = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<BlogFormValues>({
    defaultValues: {
      title: '',
      excerpt: '',
      content: '',
      authorName: '',
      authorAvatar: '',
      readTime: '',
    },
  });

  const onSubmit = (data: BlogFormValues) => {
    // In a real app, this would connect to a backend API
    console.log('Submitted blog post:', data);
    
    // Simulate uploading the image
    if (data.image && data.image.length > 0) {
      const file = data.image[0];
      console.log('Image to upload:', file.name, file.type, file.size);
    }
    
    // Show success message
    toast({
      title: "Blog Post Created",
      description: "Your blog post has been successfully created and is awaiting review.",
    });
    
    // Redirect to blog page
    setTimeout(() => {
      navigate('/blog');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Create Blog Post</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Share your insights, analysis, and opinions on tech-related topics.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="content-container max-w-4xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter blog post title" {...field} />
                      </FormControl>
                      <FormDescription>
                        Create an engaging title that reflects your content.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="excerpt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Excerpt</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Write a brief summary of your blog post" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        This appears in blog previews (100-150 characters recommended).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Write your blog post content here" 
                          className="min-h-[400px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="authorName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Author Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="authorAvatar"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Author Avatar URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com/avatar.jpg" {...field} />
                        </FormControl>
                        <FormDescription>
                          Or leave blank to use a default avatar.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="readTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Read Time</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 5 min read" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Featured Image</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-4">
                          <div className="border-2 border-dashed border-input rounded-lg p-8 text-center w-full">
                            <Input 
                              type="file" 
                              className="hidden" 
                              id="image-upload" 
                              accept="image/*"
                              onChange={(e) => {
                                onChange(e.target.files);
                              }}
                              {...rest}
                            />
                            <label 
                              htmlFor="image-upload" 
                              className="flex flex-col items-center gap-2 cursor-pointer"
                            >
                              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <ImageIcon className="h-6 w-6 text-primary" />
                              </div>
                              <span className="text-sm font-medium">
                                Click to upload an image
                              </span>
                              <span className="text-xs text-muted-foreground">
                                SVG, PNG, JPG or GIF (max. 2MB)
                              </span>
                            </label>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end">
                  <Button type="submit" className="min-w-[150px]">
                    <Upload className="mr-2 h-4 w-4" />
                    Publish Blog Post
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateBlog;
