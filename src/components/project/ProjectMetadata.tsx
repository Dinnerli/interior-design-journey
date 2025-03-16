
import { Grid, Ruler, Calendar, Building } from 'lucide-react';
import { Project } from '@/data/projectsData';
import ProjectInfoCard from './ProjectInfoCard';

interface ProjectMetadataProps {
  project: Project;
}

const ProjectMetadata = ({ project }: ProjectMetadataProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {project.client && (
        <ProjectInfoCard 
          icon={<Building size={20} />}
          label="Client"
          value={project.client}
        />
      )}
      
      <ProjectInfoCard 
        icon={<Grid size={20} />}
        label="Project Type"
        value={project.type}
      />
      
      <ProjectInfoCard 
        icon={<Ruler size={20} />}
        label="Size"
        value={project.size}
      />
      
      <ProjectInfoCard 
        icon={<Calendar size={20} />}
        label="Completed"
        value={project.year}
      />
    </div>
  );
};

export default ProjectMetadata;
