
import { Bell, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            EventFlow
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              Browse Events
            </Link>
            <Link to="/create-event" className="text-gray-600 hover:text-primary transition-colors">
              Create Event
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon">
            <Calendar className="h-5 w-5 text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
