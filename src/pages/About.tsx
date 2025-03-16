
import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-medium mb-6 animate-slide-up">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Learn more about who I am, my approach to design, and my passion for creating exceptional spaces.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Main Content - 3 columns */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <h2 className="text-3xl font-display font-medium mb-6 animate-slide-up">Bevan Jonathan David</h2>
              <h3 className="text-xl text-primary mb-6 animate-slide-up">BA(Hons.) Interior Design</h3>
              
              <div className="section-divider mb-8 animate-slide-up"></div>
              
              <div className="space-y-6 animate-slide-up">
                <p className="text-lg leading-relaxed">
                  Every project we undertake, we believe in the challenge given to us. We believe in meeting 
                  the expectations of everyone through design. The way we achieve the challenge is by creating 
                  an appealing and unique space, based on one's requirements, budget and time-frame.
                </p>
                <p className="text-lg leading-relaxed">
                  We just happen to handle every project all the way till completion... and beyond!
                </p>
              </div>
              
              <div className="mt-10 mb-8">
                <h3 className="text-2xl font-display font-medium mb-6 animate-slide-up">My Design Philosophy</h3>
                <div className="section-divider mb-8 animate-slide-up"></div>
                <p className="text-lg leading-relaxed mb-6 animate-slide-up">
                  I believe that excellent interior design goes beyond aesthetics. It's about creating 
                  functional spaces that enhance the quality of life and work for the people who use them. 
                  My approach combines creativity with practicality, resulting in spaces that are both 
                  beautiful and useful.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-display font-medium mb-6 animate-slide-up">Core Values</h3>
                <div className="section-divider mb-8 animate-slide-up"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-up">
                  {[
                    'Client-Centered Approach',
                    'Attention to Detail',
                    'Innovative Solutions',
                    'Quality Materials',
                    'Timely Delivery',
                    'Budget Consciousness',
                    'Environmental Awareness',
                    'Collaborative Process'
                  ].map((value, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar - 2 columns */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="sticky top-32">
                <div className="relative mb-8 animate-slide-up">
                  <img 
                    src="/lovable-uploads/07518459-6dc2-4bf3-809c-0f2f242eab68.png" 
                    alt="Bevan Jonathan David" 
                    className="rounded-lg shadow-xl w-full h-auto object-cover" 
                  />
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 animate-slide-up">
                  <h3 className="text-xl font-display font-medium mb-4">Specializations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>Office Interior Design</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>Exhibition & Retail Spaces</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>Commercial Interiors</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>Space Planning</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>Custom Furniture Design</span>
                    </li>
                  </ul>
                </div>
              </div>
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
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 animate-slide-up">Let's Work Together</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 animate-slide-up">
            Ready to transform your space? Get in touch to discuss your project needs and vision.
          </p>
          <a
            href="/contact"
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-colors duration-300 inline-block animate-slide-up"
          >
            Contact Me
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
