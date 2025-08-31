import type { Faculty, HOD, Department } from '@/types';
import rakeshSirImg from '@/assets/images/RakeshSir.jpg';
import shwetSirImg from '@/assets/images/shwetSir.jpeg';
import satvikSirImg from '@/assets/images/SatvikSir.jpg';

/**
 * Mock data for faculty directory
 * In production, this would come from an API
 */

export const hodData: HOD = {
  id: 'hod-1',
  name: 'Prof. Rakesh Kumar',
  position: 'Head of Department',
  department: 'Computer Science & Engineering',
  image: rakeshSirImg,
  email: 'rkiitr@gmail.com',
  phone: '+1 (555) 123-4567',
  specialties: [
    'Mobile & Distributed Computing',
    'Internet of Things (IoT)',
    'Sensor Networks',
    'Network Security',
    'Machine Learning (ML)',
    'Image Processing',
    'Cloud Computing'
  ],
  bio: 'Prof. Rakesh Kumar leads our department with over 15 years of experience in AI research and education. ',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/',
    twitter: 'https://twitter.com/',
    researchGate: 'https://researchgate.net/profile/'
  },
  isHOD: true,
  message:
    'Welcome to our Computer Science department! We are committed to excellence in education and cutting-edge research.'
};

export const facultyData: Faculty[] = [
  {
    id: 'faculty-1',
    name: 'Dr. Shwet Ketu',
    position: 'Associate Professor',
    department: 'Computer Science & Engineering',
    image: shwetSirImg,
    email: 'skcse@mmmut.ac.in',
    phone: ' +91-8175848784',
    specialties: [
      'Internet of Things (IoT)',
      'Internet of Healthcare Things (IoHT)',
      'Smart Healthcare Data Analytics',
      'Big Data Analytics',
      'Machine Learning Stream Data Analytics'
    ],
    bio: 'I am Dr. Shwet Ketu, currently holding the position of Assistant Professor in Department of Computer Science and Engineering at Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur, India. With a strong foundation in academia and a fervor for fostering learning environments, I am dedicated to shaping the next generation of professionals in Data Analytics.',
    achievements: {
      patents: '6+ Published and Granted Patents',
      internationalConferences: '4+ International Conferences',
      internationalPublications: '13+ International Publications',
      organizations: '30+ Organisations & Societies',
      profile: 'Visit Profile'
    },
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/shwetketu/',
      researchGate: 'https://sites.google.com/view/shwetketu/home',
      personalWebsite: 'https://sites.google.com/view/shwetketu'
    }
  },
  {
    id: 'faculty-2',
    name: 'Dr. Satvik Vats',
    position: 'Assistant Professor',
    department: 'Computer Science and Engineering',
    image: satvikSirImg,
    email: 'satvik.vats@gmail.com',
    phone: '+91-7428262793 ',
    specialties: [
      'Big Data',
      'Deep Learning',
      'Machine Learning',
      'Computer Vision',
      'Smart Agriculture',
      'Computational Technology'
    ],
    bio: 'I’m Dr. Satvik Vats (SMIEEE), currently serving as an Assistant Professor in the Department of Computer Science and Engineering at Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur. I have extensive contributions in AI, Big Data, and Smart Agriculture, with several patents, publications, and academic works to my credit.',
    achievements: {
      patents: '20+ Published and Granted Patents',
      projectPublications: '75+ Project Based Publications',
      books: '4+ Books (Edited & Published)',
      internationalPublications: '18+ International Publications',
      nationalPublications: '10+ National Publications',
      profile: 'Visit Profile'
    },
 
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/satvik-vats/'
    },
    
  },
  {
    id: 'faculty-4',
    name: 'Dr. Lisa Anderson',
    position: 'Associate Professor',
    department: 'Biology',
    image:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'lisa.anderson@university.edu',
    phone: '+1 (555) 567-8901',
    specialties: ['Molecular Biology', 'Genetics', 'Biotechnology'],
    bio: 'Expert in molecular biology and genetics with focus on biotechnology applications.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/lisaanderson',
      twitter: 'https://twitter.com/lisaanderson'
    }
  },
  {
    id: 'faculty-5',
    name: 'Dr. David Park',
    position: 'Assistant Professor',
    department: 'Chemistry',
    image:
      'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'david.park@university.edu',
    phone: '+1 (555) 678-9012',
    specialties: ['Organic Chemistry', 'Catalysis', 'Green Chemistry'],
    bio: 'Focuses on sustainable chemistry and catalysis for environmental applications.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/davidpark',
      researchGate: 'https://researchgate.net/profile/david-park'
    }
  },
  {
    id: 'faculty-6',
    name: 'Dr. Swastik Tripathi',
    position: 'Assistant Professor',
    department: 'Computer Science and Engineering',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'swastik.tripathi@mmmut.ac.in',
    phone: '+91-9876543210',
    specialties: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Artificial Intelligence'
    ],
    bio: 'Dr. Swastik Tripathi is an Assistant Professor in the Department of Computer Science and Engineering with expertise in Machine Learning and Artificial Intelligence. His research focuses on developing novel algorithms for computer vision and natural language processing applications.',
    achievements: {
      patents: '5+ Published and Granted Patents',
      projectPublications: '30+ Project Based Publications',
      internationalPublications: '25+ International Publications',
      nationalPublications: '15+ National Publications',
      books: '2+ Books and Book Chapters',
      profile: 'Visit Profile'
    },

    socialLinks: {
      linkedin: 'https://linkedin.com/in/swastiktripathi',
      researchGate: 'https://researchgate.net/profile/swastik-tripathi',
      googleScholar: 'https://scholar.google.com/citations?user=swastiktripathi'
    }
  }

];

export const departments: Department[] = [
  { id: 'cs', name: 'Computer Science', color: 'blue', facultyCount: 3 },
  { id: 'math', name: 'Mathematics', color: 'green', facultyCount: 1 },
  { id: 'physics', name: 'Physics', color: 'purple', facultyCount: 1 },
  { id: 'biology', name: 'Biology', color: 'emerald', facultyCount: 1 },
  { id: 'chemistry', name: 'Chemistry', color: 'orange', facultyCount: 1 },
  { id: 'psychology', name: 'Psychology', color: 'pink', facultyCount: 1 }
];
