
import { Project } from '@/data/projectsData';

interface ProjectGalleryProps {
  project: Project;
}

const ProjectGallery = ({ project }: ProjectGalleryProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-display font-medium mb-6">Project Gallery</h2>
      <div className="section-divider mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img 
            src={project.image} 
            alt={`${project.title} - View 1`} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <img 
            src={project.secondaryImage} 
            alt={`${project.title} - View 2`} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
