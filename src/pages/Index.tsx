import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";

const FEATURED_EVENTS = [
  {
    title: "Tech Conference 2024",
    date: "Apr 15, 2024",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Technology"
  },
  {
    title: "Music Festival",
    date: "May 1, 2024",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Music"
  },
  {
    title: "Food & Wine Expo",
    date: "Jun 10, 2024",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1510924199351-4e9d94df18a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Food"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-16">
        <Hero />
        
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_EVENTS.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;