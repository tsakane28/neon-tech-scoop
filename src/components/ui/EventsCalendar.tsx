
import React, { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, ExternalLink } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface TechEvent {
  id: string;
  title: string;
  date: Date;
  endDate?: Date;
  location: string;
  isVirtual: boolean;
  description: string;
  url: string;
  category: string;
}

// Sample tech events data
const techEvents: TechEvent[] = [
  {
    id: '1',
    title: 'React Conference 2024',
    date: new Date(2024, 5, 15), // June 15, 2024
    endDate: new Date(2024, 5, 17), // June 17, 2024
    location: 'San Francisco, CA',
    isVirtual: false,
    description: 'The largest React conference with talks from the core team and community experts.',
    url: 'https://example.com/react-conf',
    category: 'Frontend'
  },
  {
    id: '2',
    title: 'AI Summit',
    date: new Date(2024, 6, 10), // July 10, 2024
    endDate: new Date(2024, 6, 12), // July 12, 2024
    location: 'Virtual',
    isVirtual: true,
    description: 'Explore the latest advancements in artificial intelligence and machine learning.',
    url: 'https://example.com/ai-summit',
    category: 'AI'
  },
  {
    id: '3',
    title: 'Tech Startup Pitch Day',
    date: new Date(2024, 7, 5), // August 5, 2024
    location: 'New York, NY',
    isVirtual: false,
    description: 'Early-stage startups pitch their ideas to a panel of venture capitalists and angel investors.',
    url: 'https://example.com/pitch-day',
    category: 'Startups'
  },
  {
    id: '4',
    title: 'Web3 Developer Workshop',
    date: new Date(2024, 8, 22), // September 22, 2024
    location: 'Virtual',
    isVirtual: true,
    description: 'Hands-on workshop for developers interested in building decentralized applications.',
    url: 'https://example.com/web3-workshop',
    category: 'Blockchain'
  }
];

// Helper function to format dates
const formatEventDate = (date: Date, endDate?: Date) => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  if (endDate) {
    return `${date.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
  }
  return date.toLocaleDateString('en-US', options);
};

// Create a map of dates to events for the calendar
const createEventMap = (events: TechEvent[]) => {
  const eventMap = new Map<string, TechEvent[]>();
  
  events.forEach(event => {
    const dateKey = event.date.toISOString().split('T')[0];
    if (!eventMap.has(dateKey)) {
      eventMap.set(dateKey, []);
    }
    eventMap.get(dateKey)?.push(event);
    
    // Handle multi-day events
    if (event.endDate) {
      const currentDate = new Date(event.date);
      const endDate = new Date(event.endDate);
      
      while (currentDate < endDate) {
        currentDate.setDate(currentDate.getDate() + 1);
        const nextDateKey = currentDate.toISOString().split('T')[0];
        
        if (!eventMap.has(nextDateKey)) {
          eventMap.set(nextDateKey, []);
        }
        eventMap.get(nextDateKey)?.push(event);
      }
    }
  });
  
  return eventMap;
};

const EventsCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const eventMap = createEventMap(techEvents);
  
  // Filter events for the selected date
  const selectedDateKey = date?.toISOString().split('T')[0];
  const eventsOnSelectedDate = selectedDateKey ? eventMap.get(selectedDateKey) || [] : [];
  
  // Function to highlight dates with events
  const isDayWithEvent = (day: Date) => {
    const dayKey = day.toISOString().split('T')[0];
    return eventMap.has(dayKey);
  };
  
  return (
    <div className="rounded-xl bg-card p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <CalendarIcon className="h-5 w-5 text-primary mr-2" />
          <h3 className="text-xl font-bold">Tech Events Calendar</h3>
        </div>
        <Link to="/events" className="text-sm text-primary flex items-center hover:underline">
          View all <ExternalLink className="h-3 w-3 ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            modifiers={{
              hasEvent: (date) => isDayWithEvent(date),
            }}
            modifiersStyles={{
              hasEvent: { 
                fontWeight: 'bold',
                backgroundColor: 'hsl(var(--primary) / 0.1)',
                color: 'hsl(var(--primary))'
              }
            }}
          />
        </div>
        
        <div>
          <h4 className="font-medium mb-4">
            {date ? (
              `Events on ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
            ) : (
              'Select a date to see events'
            )}
          </h4>
          
          {eventsOnSelectedDate.length > 0 ? (
            <div className="space-y-4">
              {eventsOnSelectedDate.map(event => (
                <div key={event.id} className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h5 className="font-medium">{event.title}</h5>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{formatEventDate(event.date, event.endDate)}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{event.location} {event.isVirtual && '(Virtual)'}</span>
                  </div>
                  <p className="text-sm mt-2">{event.description}</p>
                  <div className="mt-3">
                    <a 
                      href={event.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-dashed rounded-lg p-6 text-center text-muted-foreground flex flex-col items-center justify-center h-[calc(100%-2rem)]">
              <CalendarIcon className="h-8 w-8 mb-2 opacity-50" />
              <p>No events on this date</p>
              <p className="text-sm mt-1">Try selecting a different date</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar;
