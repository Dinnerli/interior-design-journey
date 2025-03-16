
export interface Project {
  title: string;
  location: string;
  image: string;
  secondaryImage: string;
  type: string;
  size: string;
  year: string;
  description: string;
}

export type ProjectsDataType = {
  [key: string]: Project;
};

const projectsData: ProjectsDataType = {
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

export default projectsData;
