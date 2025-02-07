import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-dark/10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 text-center relative animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          Discover Amazing Events
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Find and join events that match your interests. From tech conferences to music festivals, we've got you covered.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <Input 
              placeholder="Search events..." 
              className="w-full h-12 pl-12 bg-white/90 backdrop-blur-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          <Button className="h-12 px-8 bg-primary hover:bg-primary-dark text-white">
            Search Events
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;