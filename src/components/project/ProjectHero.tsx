
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Project } from '@/data/projectsData';

interface ProjectHeroProps {
  project: Project;
}

const ProjectHero = ({ project }: ProjectHeroProps) => {
  return (
    <div className="relative h-[60vh] pt-20">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white z-10">
        <Link 
          to="/projects" 
          className="flex items-center font-medium hover:text-primary-foreground/80 transition-colors mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span>Back to Projects</span>
        </Link>
        <h1 className="text-3xl md:text-5xl font-display font-medium mb-2">{project.title}</h1>
        <div className="flex items-center">
          <MapPin size={16} className="mr-1" />
          <span>{project.location}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
