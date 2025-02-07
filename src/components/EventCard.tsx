import { Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
  category: string;
}

const EventCard = ({ title, date, location, image, category }: EventCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-3 py-1 rounded-full text-sm bg-secondary-yellow text-gray-700 mb-3">
          {category}
        </span>
        <h3 className="font-semibold text-xl mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          {date}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin className="h-4 w-4 mr-2" />
          {location}
        </div>
      </div>
    </Card>
  );
};

export default EventCard;