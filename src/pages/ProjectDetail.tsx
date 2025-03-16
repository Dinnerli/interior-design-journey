
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import projectsData, { Project } from '@/data/projectsData';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectMetadata from '@/components/project/ProjectMetadata';
import ProjectOverview from '@/components/project/ProjectOverview';
import ProjectGallery from '@/components/project/ProjectGallery';
import ProjectNavigation from '@/components/project/ProjectNavigation';
import ProjectNotFound from '@/components/project/ProjectNotFound';

type ProjectId = keyof typeof projectsData;

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate data loading
    setTimeout(() => {
      if (id && id in projectsData) {
        setProject(projectsData[id as ProjectId]);
      }
      setIsLoading(false);
    }, 300);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <ProjectHero project={project} />

      {/* Project Details */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <ProjectMetadata project={project} />
          <ProjectOverview description={project.description} />
          <ProjectGallery project={project} />
          <ProjectNavigation />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
