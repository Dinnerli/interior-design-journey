
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LayoutGrid, Map, Users, CheckCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const projects = [
  {
    id: 'united-nations-rc-office',
    title: 'United Nations RC Office',
    location: 'Thunmulla',
    image: '/lovable-uploads/3372d304-83f6-4f63-881e-5f290429893e.png',
    type: 'Office Space',
  },
  {
    id: 'jat-holdings-stall',
    title: 'JAT Holdings Stall',
    location: 'Sri Lanka Design Festival',
    image: '/lovable-uploads/43c77f58-07c0-407c-9983-cb31dc70d974.png',
    type: 'Exhibition Stall',
  },
  {
    id: 'aviation-voice',
    title: 'Aviation Voice',
    location: 'Nugegoda',
    image: '/lovable-uploads/15449c9f-314c-4587-b2e3-26942516db03.png',
    type: 'Office Space',
  },
];

const services = [
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    title: 'Space Planning',
    description: 'Optimizing layouts for efficiency and flow, maximizing the potential of every square foot.'
  },
  {
    icon: <Map className="h-6 w-6" />,
    title: 'Custom Design',
    description: 'Creating unique interior solutions tailored to your specific needs and aesthetic preferences.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Project Management',
    description: 'Overseeing every aspect of your project from concept to completion, ensuring quality and timeliness.'
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Comprehensive Design Solutions</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-300"
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="animate-slide-up mb-6 md:mb-0">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
                Featured Work
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium">Recent Projects</h2>
            </div>
            <Link 
              to="/projects" 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-300 animate-slide-in-right"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="relative">
                <img 
                  src="/lovable-uploads/07518459-6dc2-4bf3-809c-0f2f242eab68.png" 
                  alt="Bevan Jonathan David" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover" 
                />
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                  <span className="block text-sm font-semibold text-primary mb-1">Experience</span>
                  <span className="text-2xl font-display font-medium">5+ Years</span>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">About Me</span>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Crafting Spaces That Inspire</h2>
              
              <div className="section-divider mb-8"></div>
              
              <p className="text-lg text-muted-foreground mb-6">
                Every project we undertake, we believe in the challenge given to us. We believe in meeting 
                the expectations of everyone through design. The way we achieve the challenge is by creating 
                an appealing and unique space, based on one's requirements, budget and time-frame.
              </p>

              <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Innovative Design Concepts',
                  'Attention to Detail',
                  'Client-Focused Approach',
                  'Budget-Conscious Solutions'
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md transition-colors duration-300 inline-flex items-center"
              >
                <span>Learn More</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 bg-design-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/lovable-uploads/0c2291eb-05da-4f0e-83a1-239a723f73bc.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 animate-slide-up">Ready to Transform Your Space?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 animate-slide-up">
            Let's collaborate to create interiors that reflect your vision and elevate your environment.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-colors duration-300 inline-flex items-center animate-slide-up"
          >
            <span>Start Your Project</span>
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
