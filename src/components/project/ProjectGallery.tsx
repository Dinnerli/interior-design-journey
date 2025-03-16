
import { useState } from 'react';
import { Project } from '@/data/projectsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  project: Project;
}

const ProjectGallery = ({ project }: ProjectGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Combine all project images into an array
  const images = [
    project.image,
    project.secondaryImage,
    ...(project.additionalImages || [])
  ].filter(img => img && img !== project.image && img !== project.secondaryImage);

  // Add new image for UN RC Office project
  if (window.location.pathname.includes('united-nations-rc-office')) {
    // Replace the current active image with the new one
    images[activeIndex] = '/lovable-uploads/679ccbcc-92ee-41ab-955c-dcaf5f6b8a67.png';
  }

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setActiveIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  if (!images.length) {
    return null;
  }

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-display font-medium mb-6">Project Gallery</h2>
      <div className="section-divider mb-8"></div>
      
      {/* Main Image */}
      <div className="relative rounded-lg overflow-hidden shadow-md mb-6 h-[400px]">
        <img 
          src={images[activeIndex]} 
          alt={`${project.title} - View ${activeIndex + 1}`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        
        {images.length > 1 && (
          <>
            <button 
              onClick={() => navigateGallery('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => navigateGallery('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Gallery indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeIndex ? 'bg-primary w-4' : 'bg-white/70'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`rounded-md overflow-hidden h-20 transition-all ${
                idx === activeIndex ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={img} 
                alt={`Thumbnail ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
