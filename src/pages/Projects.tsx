
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    id: 'united-nations-rc-office',
    title: 'United Nations RC Office',
    location: 'Thunmulla',
    image: '/lovable-uploads/3372d304-83f6-4f63-881e-5f290429893e.png',
    type: 'Office Space',
    size: '1530sqft',
  },
  {
    id: 'jat-holdings-stall',
    title: 'JAT Holdings Stall',
    location: 'Sri Lanka Design Festival',
    image: '/lovable-uploads/43c77f58-07c0-407c-9983-cb31dc70d974.png',
    type: 'Exhibition Stall',
    size: '580sqft',
  },
  {
    id: 'aviation-voice',
    title: 'Aviation Voice',
    location: 'Nugegoda',
    image: '/lovable-uploads/15449c9f-314c-4587-b2e3-26942516db03.png',
    type: 'Office Space',
    size: '470sqft',
  },
  {
    id: 'united-nations-conference-hall',
    title: 'United Nations Conference Hall',
    location: 'Thunmulla',
    image: '/lovable-uploads/3372d304-83f6-4f63-881e-5f290429893e.png',
    type: 'Conference Space',
    size: '950sqft',
  },
  {
    id: 'bella-hair-designs',
    title: 'Bella Hair Designs',
    location: 'Kandana',
    image: '/lovable-uploads/0c2291eb-05da-4f0e-83a1-239a723f73bc.png',
    type: 'Salon',
    size: '680sqft',
  },
  {
    id: 'united-nations-ops-office',
    title: 'United Nations OPS Office',
    location: 'Kinsey Road',
    image: '/lovable-uploads/3372d304-83f6-4f63-881e-5f290429893e.png',
    type: 'Office Space',
    size: '1200sqft',
  },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-medium mb-6">Our Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of completed interior design projects across various spaces
              and industries. Each project reflects our commitment to excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <ProjectCard {...project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
