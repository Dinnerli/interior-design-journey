
import { ReactNode } from 'react';

interface ProjectInfoCardProps {
  icon: ReactNode;
  label: string;
  value: string;
}

const ProjectInfoCard = ({ icon, label, value }: ProjectInfoCardProps) => {
  return (
    <div className="bg-white shadow-sm p-6 rounded-lg border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
          {icon}
        </div>
        <div>
          <span className="block text-sm text-muted-foreground">{label}</span>
          <span className="block font-medium">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoCard;
