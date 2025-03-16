
import { Project } from '@/data/projectsData';
import { Separator } from '@/components/ui/separator';

interface ProjectOverviewProps {
  description: string;
}

const ProjectOverview = ({ description }: ProjectOverviewProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-display font-medium mb-6">Project Overview</h2>
      <div className="section-divider mb-8"></div>
      <p className="text-lg leading-relaxed">{description}</p>
    </div>
  );
};

export default ProjectOverview;
