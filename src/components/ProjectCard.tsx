
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  type: string;
  index: number;
}

const ProjectCard = ({ id, title, location, image, type, index }: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link 
      to={`/projects/${id}`} 
      className="project-card group relative block h-[400px] overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image with blur-up loading */}
      <div className="absolute inset-0 bg-gray-200 animate-pulse">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80"></div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase bg-primary/80 rounded-full mb-3">
          {type}
        </span>
        <h3 className="text-2xl font-display font-medium mb-1">{title}</h3>
        <p className="text-white/80 mb-4">{location}</p>
        
        <div className="flex items-center font-medium text-primary-foreground opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span>View Project</span>
          <ArrowRight size={16} className="ml-2" />
        </div>
      </div>

      {/* Hover overlay */}
      <div className="project-card-overlay absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300"></div>
    </Link>
  );
};

export default ProjectCard;
