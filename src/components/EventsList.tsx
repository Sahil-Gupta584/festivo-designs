
import React from "react";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import EventCard from "@/components/EventCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DateRange } from "react-day-picker";

const MOCK_EVENTS = [
  {
    title: "Tech Conference 2024",
    date: "2024-04-15",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Technology"
  },
  {
    title: "Music Festival",
    date: "2024-05-01",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Music"
  },
  {
    title: "Food & Wine Expo",
    date: "2024-03-10",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1510924199351-4e9d94df18a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Food"
  }
];

const CATEGORIES = [
  "All Categories",
  "Technology",
  "Music",
  "Food",
  "Sports",
  "Art",
  "Business"
];

const EventsList = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All Categories");
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(undefined);

  const filterEvents = (events: typeof MOCK_EVENTS, isPast: boolean) => {
    const now = new Date();
    return events.filter(event => {
      const eventDate = new Date(event.date);
      const matchesCategory = selectedCategory === "All Categories" || event.category === selectedCategory;
      const matchesDate = dateRange?.from && dateRange?.to ? 
        eventDate >= dateRange.from && eventDate <= dateRange.to :
        true;
      const isPastEvent = eventDate < now;
      
      return matchesCategory && matchesDate && isPastEvent === isPast;
    });
  };

  const upcomingEvents = filterEvents(MOCK_EVENTS, false);
  const pastEvents = filterEvents(MOCK_EVENTS, true);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <DatePickerWithRange date={dateRange} setDate={setDateRange} />
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={format(new Date(event.date), "MMM d, yyyy")}
                location={event.location}
                image={event.image}
                category={event.category}
              />
            ))}
            {upcomingEvents.length === 0 && (
              <p className="col-span-full text-center text-gray-500 py-8">
                No upcoming events found matching your criteria
              </p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={format(new Date(event.date), "MMM d, yyyy")}
                location={event.location}
                image={event.image}
                category={event.category}
              />
            ))}
            {pastEvents.length === 0 && (
              <p className="col-span-full text-center text-gray-500 py-8">
                No past events found matching your criteria
              </p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventsList;
