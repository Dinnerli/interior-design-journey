
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-design-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 - Logo and About */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/4de71902-664e-40a5-9e47-6bba44836771.png" 
                alt="BEURANT DESIGN Logo" 
                className="h-12 w-auto mr-3 filter brightness-0 invert" 
              />
              <span className="text-2xl font-display font-semibold tracking-tight">
                BEURANT DESIGN
              </span>
            </Link>
            <p className="text-gray-300 mt-4 max-w-md">
              Creating appealing and unique spaces based on client requirements, budget and timeline. 
              Every project is handled with care from concept to completion.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/beurant/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-design-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/Beurant/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-design-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-display font-medium mb-5">Quick Links</h4>
            <nav className="space-y-3">
              <Link to="/" className="flex items-center text-gray-300 hover:text-design-accent transition-colors">
                <ArrowRight size={16} className="mr-2" />
                <span>Home</span>
              </Link>
              <Link to="/projects" className="flex items-center text-gray-300 hover:text-design-accent transition-colors">
                <ArrowRight size={16} className="mr-2" />
                <span>Projects</span>
              </Link>
              <Link to="/about" className="flex items-center text-gray-300 hover:text-design-accent transition-colors">
                <ArrowRight size={16} className="mr-2" />
                <span>About</span>
              </Link>
              <Link to="/contact" className="flex items-center text-gray-300 hover:text-design-accent transition-colors">
                <ArrowRight size={16} className="mr-2" />
                <span>Contact</span>
              </Link>
            </nav>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-lg font-display font-medium mb-5">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-design-accent mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">Sri Lanka</span>
              </div>
              <div className="flex items-start">
                <Mail className="text-design-accent mr-3 mt-1 flex-shrink-0" size={18} />
                <a href="mailto:info@beurantdesign.com" className="text-gray-300 hover:text-design-accent transition-colors">
                  info@beurantdesign.com
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="text-design-accent mr-3 mt-1 flex-shrink-0" size={18} />
                <a href="tel:+94764052630" className="text-gray-300 hover:text-design-accent transition-colors">
                  +94 764 052 630
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} BEURANT DESIGN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
