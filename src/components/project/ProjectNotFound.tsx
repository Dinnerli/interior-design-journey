
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProjectNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-display font-medium mb-4">Project Not Found</h2>
      <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist or has been removed.</p>
      <Link 
        to="/projects" 
        className="flex items-center text-primary hover:text-primary/80 transition-colors"
      >
        <ArrowLeft size={16} className="mr-2" />
        <span>Back to Projects</span>
      </Link>
    </div>
  );
};

export default ProjectNotFound;
