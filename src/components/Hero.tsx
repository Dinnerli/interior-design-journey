
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/c1a8dbf9-c004-4f0e-b0a2-c7f579039621.png" 
          alt="Interior Design" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="h-[1px] w-20 bg-design-gold self-center mr-4"></div>
          <span className="text-design-softgold text-sm tracking-widest uppercase">Interior Design Excellence</span>
          <div className="h-[1px] w-20 bg-design-gold self-center ml-4"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-semibold text-white mb-6 leading-tight gold-gradient">
          Transforming Spaces Into <br />Exceptional Experiences
        </h1>
        <p className="text-design-softgold text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Creating unique and functional interiors that reflect your vision, needs, and personality.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/projects" 
            className="px-8 py-3 bg-design-gold hover:bg-design-gold/90 text-design-dark font-medium rounded-none transition-colors duration-300"
          >
            View Projects
          </a>
          <a 
            href="/contact" 
            className="px-8 py-3 bg-transparent hover:bg-white/5 text-design-softgold font-medium rounded-none transition-colors duration-300 border border-design-softgold"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-design-softgold hover:text-design-gold transition-colors duration-300 animate-bounce"
        aria-label="Scroll Down"
      >
        <ArrowDown size={24} />
      </button>
    </div>
  );
};

export default Hero;
