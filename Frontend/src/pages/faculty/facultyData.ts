import SatvikSir from '../../assets/images/SatvikSir.jpg';
import shwetSir from '../../assets/images/shwetSir.jpeg';
import SatyaSir from '../../assets/images/SatyaSir.jpeg';
import ShantanuSir from '../../assets/images/ShantanuSir.jpg'; // You need to add this image

export interface FacultyMember {
  id: number;
  name: string;
  title: string;
  department: string;
  specialization: string[];
  email: string;
  phone: string;
  profileImage: string;
  description: string;
  publications?: number;
  experience?: number;
  citations?: number | string;
  skills?: number;
  linkedinUrl?: string;
  websiteUrl?: string;
  googleScholarUrl?: string;
  // Additional fields for the new data
  patents?: string;
  projectPublications?: string;
  booksPublished?: string;
  internationalPublications?: string;
  organisations?: string;
  internationalConferences?: string;
  articles?: string;
  areasOfExpertise?: string; // New field for Shantanu Shahi
}

export const facultyData: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. Satvik Vats",
    title: "Assistant Professor",
    department: "Computer Science and Engineering",
    specialization: ["Big Data", "Deep Learning", "Machine Learning", "AI"],
    email: "satvik.vats@university.edu",
    phone: "+91-XXXXXXXXXX",
    profileImage: SatvikSir,
    description: "Specializing in Big Data analytics and Deep Learning applications with focus on real-world AI implementations.",
    linkedinUrl: "https://www.linkedin.com/in/satvik-vats?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    websiteUrl: "https://svats.in",
    googleScholarUrl: "https://scholar.google.com/citations?user=XXXXXXX",
    // New metrics for Dr. Satvik Vats
    patents: "20+",
    projectPublications: "75+",
    booksPublished: "4+",
    internationalPublications: "18+",
    organisations: "10+"
  },
  {
    id: 2,
    name: "Dr. Shwet Ketu",
    title: "Assistant Professor",
    department: "Computer Science & Engineering",
    specialization: ["Internet of Things (IoT)", "Internet of Healthcare Things (IoHT)", "Wireless Networks", "Smart Systems"],
    email: "shwet.ketu@university.edu",
    phone: "+91-XXXXXXXXXX",
    profileImage: shwetSir,
    description: "Expert in IoT systems and healthcare technology integration with extensive research in wireless communication protocols.",
    linkedinUrl: "https://www.linkedin.com/in/shwetketu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    websiteUrl: "https://sites.google.com/view/shwetketu",
    googleScholarUrl: "https://scholar.google.com/citations?user=XXXXXXX",
    // New metrics for Dr. Shwet Ketu
    patents: "6+",
    internationalConferences: "4+",
    internationalPublications: "13+",
    organisations: "30+"
  },
  {
    id: 3,
    name: "Dr. Satya Prakash Yadav",
    title: "Associate Professor",
    department: "Computer Science and Engineering",
    specialization: ["Computer Vision", "Natural Language Processing", "Robotics", "Neural Networks"],
    email: "satya.yadav@mmmut.ac.in",
    phone: "+91-9876543210",
    profileImage: SatyaSir,
    description: "Renowned researcher in computer vision and robotics, focusing on real-time applications and neural network optimization with extensive industry collaborations.",
    linkedinUrl: "https://www.linkedin.com/in/satya-prakash-yadav-1b4933246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    googleScholarUrl: "https://scholar.google.com/citations?user=aKRVzKMAAAAJ&hl=en",
    // New metrics for Dr. Satya Prakash Yadav
    articles: "120+",
    citations: "2700+",
    experience: 17,
    booksPublished: "4+",
    organisations: "10+"
  },
  {
    id: 4,
    name: "Dr. Shantanu Shahi",
    title: "Assistant Professor",
    department: "Computer Science and Engineering",
    specialization: ["Software Development", "Data Analysis", "Research Methodologies", "Academic Excellence"],
    email: "shantanu.shahi@university.edu",
    phone: "+91-XXXXXXXXXX",
    profileImage: ShantanuSir,
    description: "Expert in software development and data analysis with focus on research methodologies and academic excellence.",
    linkedinUrl: "https://www.linkedin.com/in/dr-shantanu-shahi-5a1b8325b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // New metrics for Dr. Shantanu Shahi
    skills: 10,
    areasOfExpertise: "8+",
    experience: 2
  }
];
