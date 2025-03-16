
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProjectNavigation = () => {
  return (
    <div className="text-center">
      <Link
        to="/projects"
        className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md transition-colors duration-300 inline-flex items-center"
      >
        <span>Browse More Projects</span>
        <ArrowLeft size={16} className="ml-2 rotate-180" />
      </Link>
    </div>
  );
};

export default ProjectNavigation;
