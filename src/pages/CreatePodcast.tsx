
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Upload, Image as ImageIcon, Music, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface PodcastFormValues {
  title: string;
  description: string;
  podcastName: string;
  duration: string;
  image: FileList;
  audio: FileList;
}

const CreatePodcast = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [audioFile, setAudioFile] = useState<File | null>(null);
  
  const form = useForm<PodcastFormValues>({
    defaultValues: {
      title: '',
      description: '',
      podcastName: 'Equity',
      duration: '',
    },
  });

  const onSubmit = (data: PodcastFormValues) => {
    // In a real app, this would connect to a backend API
    console.log('Submitted podcast:', data);
    
    // Simulate uploading the files
    if (data.image && data.image.length > 0) {
      const file = data.image[0];
      console.log('Image to upload:', file.name, file.type, file.size);
    }
    
    if (data.audio && data.audio.length > 0) {
      const file = data.audio[0];
      console.log('Audio to upload:', file.name, file.type, file.size);
    }
    
    // Show success message
    toast({
      title: "Podcast Episode Created",
      description: "Your podcast episode has been successfully created.",
    });
    
    // Redirect to podcasts page
    setTimeout(() => {
      navigate('/podcasts');
    }, 2000);
  };

  const handleAudioChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      setAudioFile(files[0]);
    } else {
      setAudioFile(null);
    }
  };

  const removeAudioFile = () => {
    setAudioFile(null);
    form.setValue('audio', undefined as any);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Create Podcast Episode</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Upload a new podcast episode to share insights, interviews, and discussions.
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
                      <FormLabel>Episode Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter episode title" {...field} />
                      </FormControl>
                      <FormDescription>
                        Make it descriptive and engaging.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="podcastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Podcast Series</FormLabel>
                      <FormControl>
                        <select 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                        >
                          <option value="Equity">Equity</option>
                          <option value="StrictlyVC">StrictlyVC</option>
                          <option value="TechCrunch">TechCrunch</option>
                          <option value="Tech News">Tech News</option>
                          <option value="Interviews">Interviews</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Episode Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe what this episode is about" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        This appears in episode previews and player interfaces.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 45 min" {...field} />
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
                      <FormLabel>Episode Artwork</FormLabel>
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
                                Click to upload episode artwork
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
                
                <FormField
                  control={form.control}
                  name="audio"
                  render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Audio File</FormLabel>
                      <FormControl>
                        {!audioFile ? (
                          <div className="border-2 border-dashed border-input rounded-lg p-8 text-center w-full">
                            <Input 
                              type="file" 
                              className="hidden" 
                              id="audio-upload" 
                              accept="audio/*"
                              onChange={(e) => {
                                onChange(e.target.files);
                                handleAudioChange(e.target.files);
                              }}
                              {...rest}
                            />
                            <label 
                              htmlFor="audio-upload" 
                              className="flex flex-col items-center gap-2 cursor-pointer"
                            >
                              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Music className="h-6 w-6 text-primary" />
                              </div>
                              <span className="text-sm font-medium">
                                Click to upload audio file
                              </span>
                              <span className="text-xs text-muted-foreground">
                                MP3, WAV, M4A (max. 100MB)
                              </span>
                            </label>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between p-4 border rounded-md">
                            <div className="flex items-center gap-3">
                              <Music className="h-5 w-5 text-primary" />
                              <div>
                                <p className="text-sm font-medium">{audioFile.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {(audioFile.size / (1024 * 1024)).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={removeAudioFile}
                              type="button"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end">
                  <Button type="submit" className="min-w-[150px]">
                    <Upload className="mr-2 h-4 w-4" />
                    Publish Episode
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

export default CreatePodcast;
