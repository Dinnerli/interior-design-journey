
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto animate-fade-in">
        <div className="inline-block mb-4">
          <span className="px-3 py-1 text-xs font-medium tracking-wider text-primary-foreground uppercase bg-primary rounded-full">
            Interior Design Excellence
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-semibold text-white mb-6 leading-tight">
          Transforming Spaces Into <br />Exceptional Experiences
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Creating unique and functional interiors that reflect your vision, needs, and personality.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/projects" 
            className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md transition-colors duration-300"
          >
            View Projects
          </a>
          <a 
            href="/contact" 
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm transition-colors duration-300 border border-white/20"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll Down"
      >
        <ArrowDown size={24} />
      </button>
    </div>
  );
};

export default Hero;
