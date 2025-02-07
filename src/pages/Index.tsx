
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EventsList from "@/components/EventsList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <EventsList />
      </main>
    </div>
  );
};

export default Index;
