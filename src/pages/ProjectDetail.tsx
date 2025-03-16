
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Grid, RulerSquare, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Project data
const projectsData = {
  'united-nations-rc-office': {
    title: 'United Nations RC Office',
    location: 'Thunmulla',
    image: '/lovable-uploads/3372d304-83f6-4f63-881e-5f290429893e.png',
    secondaryImage: '/lovable-uploads/c1a8dbf9-c004-4f0e-b0a2-c7f579039621.png',
    type: 'Office Space',
    size: '1530sqft',
    year: '2022',
    description: 'The office was a complete turn over from the state it was in. The moment you enter, you could see a lot of partitions and the space seemed small, cramped up and dark with the existing colour pallet. The design proposed was an open office concept and provided furniture, which staff get to sit around each other with their respective groups. The space eventually brightened up and a wall paper was also proposed on the white walls, which showed after removing the partitions.',
  },
  'jat-holdings-stall': {
    title: 'JAT Holdings Stall',
    location: 'Sri Lanka Design Festival',
    image: '/lovable-uploads/43c77f58-07c0-407c-9983-cb31dc70d974.png',
    secondaryImage: '/lovable-uploads/43c77f58-07c0-407c-9983-cb31dc70d974.png',
    type: 'Exhibition Stall',
    size: '580sqft',
    year: '2016',
    description: 'An exhibition stall that was a 3D mock-up of the concept and sketch drawing given to me. The project was done during internship at JAT Holdings (Private) Limited in 2016. The layout was done in a way which differentiated each area, from outdoor to an indoor lounge and bar counter and to an office setup.',
  },
  'aviation-voice': {
    title: 'Aviation Voice',
    location: 'Nugegoda',
    image: '/lovable-uploads/15449c9f-314c-4587-b2e3-26942516db03.png',
    secondaryImage: '/lovable-uploads/15449c9f-314c-4587-b2e3-26942516db03.png',
    type: 'Office Space',
    size: '470sqft',
    year: '2018',
    description: "One of the most challenging projects, which required maximum use of the very limited space given. Being the first project I undertook, while in my second year at college, it was a great project to have tested all my skills right from the very beginning. Although the project may not have been built due to further expansion of the company, it was a great way to start off my professional career. The client wanted a space that's bright and colourful and the inspiration was taken from one of their very own magazines.",
  },
  'united-nations-conference-hall': {
    title: 'United Nations Conference Hall',
    location: 'Thunmulla',
    image: '/lovable-uploads/3372d304-83f6-4f63-881e-5f290429893e.png',
    secondaryImage: '/lovable-uploads/3372d304-83f6-4f63-881e-5f290429893e.png',
    type: 'Conference Space',
    size: '950sqft',
    year: '2022',
    description: 'A modern conference hall designed for the United Nations office in Thunmulla. The space was transformed to accommodate large meetings while maintaining the professional aesthetic that represents the organization.',
  },
  'bella-hair-designs': {
    title: 'Bella Hair Designs',
    location: 'Kandana',
    image: '/lovable-uploads/0c2291eb-05da-4f0e-83a1-239a723f73bc.png',
    secondaryImage: '/lovable-uploads/0c2291eb-05da-4f0e-83a1-239a723f73bc.png',
    type: 'Salon',
    size: '680sqft',
    year: '2021',
    description: 'A contemporary salon space designed with functionality and aesthetic appeal in mind. The project focused on creating an inviting atmosphere for clients while ensuring an efficient workflow for the stylists.',
  },
  'united-nations-ops-office': {
    title: 'United Nations OPS Office',
    location: 'Kinsey Road',
    image: '/lovable-uploads/3372d304-83f6-4f63-881e-5f290429893e.png',
    secondaryImage: '/lovable-uploads/3372d304-83f6-4f63-881e-5f290429893e.png',
    type: 'Office Space',
    size: '1200sqft',
    year: '2023',
    description: 'A functional office space designed for the United Nations Operations team. The design prioritizes collaborative work while maintaining privacy for specialized tasks.',
  },
};

type ProjectId = keyof typeof projectsData;

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<typeof projectsData[ProjectId] | null>(null);
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
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
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

      {/* Project Details */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white shadow-sm p-6 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <Grid size={20} />
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground">Project Type</span>
                  <span className="block font-medium">{project.type}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-sm p-6 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <RulerSquare size={20} />
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground">Size</span>
                  <span className="block font-medium">{project.size}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-sm p-6 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <Calendar size={20} />
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground">Completed</span>
                  <span className="block font-medium">{project.year}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-display font-medium mb-6">Project Overview</h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg leading-relaxed">{project.description}</p>
          </div>

          {/* Project Images */}
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

          {/* Next Project */}
          <div className="text-center">
            <Link
              to="/projects"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md transition-colors duration-300 inline-flex items-center"
            >
              <span>Browse More Projects</span>
              <ArrowLeft size={16} className="ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
