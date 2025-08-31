import React, { useState, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Phone, Linkedin, Twitter, ExternalLink, ChevronRight, LucideIcon } from 'lucide-react';
import type { Faculty } from '@/types';

// Define social link type for better type safety
interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

// Extend FacultyCardProps with additional type safety
interface FacultyCardProps {
  faculty: Faculty;
  index: number;
}

// Animation variants for better performance
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      type: 'spring',
      stiffness: 100
    }
  })
};

// Department color mapping
const DEPARTMENT_COLORS: Record<string, string> = {
  'Computer Science': 'from-blue-400 to-blue-600',
  'Computer Science & Engineering': 'from-blue-400 to-blue-600',
  'Computer Science and Engineering': 'from-blue-400 to-blue-600',
  'Mathematics': 'from-green-400 to-green-600',
  'Physics': 'from-purple-400 to-purple-600',
  'Biology': 'from-emerald-400 to-emerald-600',
  'Chemistry': 'from-orange-400 to-orange-600',
  'Psychology': 'from-pink-400 to-pink-600',
  'default': 'from-gray-400 to-gray-600'
};

/**
 * Individual faculty card component with flip animation
 * Features 3D effects, hover interactions, and detailed information reveal
 */
const FacultyCard: React.FC<FacultyCardProps> = React.memo(({ faculty, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const getDepartmentColor = (department: string): string => {
    return DEPARTMENT_COLORS[department] || DEPARTMENT_COLORS.default;
  };

  // Memoize social icons to prevent unnecessary re-renders
  const socialIcons: SocialLink[] = useMemo(() => [
    ...(faculty.socialLinks?.linkedin ? [{
      icon: Linkedin,
      href: faculty.socialLinks.linkedin,
      label: 'LinkedIn Profile'
    }] : []),
    ...(faculty.socialLinks?.twitter ? [{
      icon: Twitter,
      href: faculty.socialLinks.twitter,
      label: 'Twitter Profile'
    }] : []),
    ...(faculty.socialLinks?.researchGate ? [{
      icon: ExternalLink,
      href: faculty.socialLinks.researchGate,
      label: 'ResearchGate Profile'
    }] : [])
  ], [faculty.socialLinks]);

  // Animation variants for card flip
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 }
  };

  const flipTransition: Record<string, any> = {
    duration: 0.8,
    type: 'spring' as const,
    stiffness: 100,
    damping: 20
  };

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      custom={index}
      variants={cardVariants}
      className="group perspective-1000 w-full max-w-2xl mx-auto"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      aria-label={`Faculty card for ${faculty.name}`}
    >
      <motion.div
        className="relative w-full h-[32rem] preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
        animate={isFlipped ? 'back' : 'front'}
        variants={flipVariants}
        transition={flipTransition}
        aria-hidden={isFlipped}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-white/5 to-white/10 dark:from-white/5 dark:to-white/10 rounded-2xl shadow-2xl overflow-hidden border border-white/20"
          style={{ backfaceVisibility: 'hidden' }}
          whileHover={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            scale: 1.01
          }}
        >
          <div className="relative h-full">
            {/* Department Color Bar */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${getDepartmentColor(faculty.department)}`} />
            
            {/* Faculty Image */}
            <div className="relative p-8 text-center">
              <motion.div
                className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/30 bg-gray-700/50 flex items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.5 }
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { 
                    duration: 0.3,
                    type: 'spring',
                    stiffness: 200
                  }
                }}
                aria-hidden="true"
              >
                {faculty.image ? (
                  <img
                    src={faculty.image}
                    alt={`${faculty.name}'s profile photo`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI9cZzhvY2YiPjxwYXRoIGQ9Ik0xMiAxMmMxLjY1NyAwIDMtMS4zNDMgMy0zcy0xLjM0My0zLTMtM3MtMyAxLjM0My0zIDNzMS4zNDMgMyAzIDN6bTAgM2MtMi43NiAwLTggMS4zMTQtOCA0djJoMTZ2LTJjMC0yLjY4Ni01LjI0LTQtOC00eiIvPjwvc3ZnPg==';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-600 text-white text-5xl">
                    {faculty.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </motion.div>

              <h3 className="text-lg font-semibold text-white mb-1">
                {faculty.name}
              </h3>
              
              <motion.p 
                className="text-lg text-blue-300 font-medium mb-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.3 }
                }}
              >
                {faculty.position}
              </motion.p>
              
              <motion.p 
                className="text-base text-gray-300 mb-6 font-medium"
                initial={{ opacity: 0, y: 5 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.4 }
                }}
              >
                {faculty.department}
              </motion.p>

              {/* Quick Contact */}
              <motion.div 
                className="flex justify-center gap-4 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.5 }
                }}
              >
                <motion.a
                  href={`mailto:${faculty.email}`}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4 text-gray-200" />
                </motion.a>
                <motion.a
                  href={`tel:${faculty.phone}`}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4 text-gray-200" />
                </motion.a>
              </motion.div>

              {/* Specialties Preview */}
              <div className="flex flex-wrap justify-center gap-1">
                {faculty.specialties.slice(0, 2).map((specialty) => (
                  <span
                    key={specialty}
                    className="px-2 py-1 bg-white/10 text-gray-200 rounded text-xs"
                  >
                    {specialty}
                  </span>
                ))}
                {faculty.specialties.length > 2 && (
                  <span className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs">
                    +{faculty.specialties.length - 2}
                  </span>
                )}
              </div>
            </div>

            {/* Flip Indicator */}
            <motion.div
              className="absolute bottom-4 right-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden bg-white/5 dark:bg-white/5 rounded-xl shadow-lg overflow-hidden border border-white/10"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="h-full p-6 flex flex-col">
            {/* Animated Background Elements */}
            <motion.div 
              className="absolute inset-0 -z-10 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 20%)',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear'
              }}
            />
            
            {/* Header */}
            <div className="text-center mb-4">
              <motion.h3 
                className="text-2xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2 }
                }}
              >
                {faculty.name}
              </motion.h3>
              <p className="text-xs text-blue-300">
                {faculty.position}
              </p>
            </div>

            {/* Bio */}
            <motion.div 
              className="px-2 mb-4"
              initial={{ opacity: 0, y: 5 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2 }
              }}
            >
              <p className="text-xs text-gray-300 leading-relaxed">
                {faculty.bio}
              </p>
            </motion.div>

            {/* Achievements */}
            {faculty.achievements && Object.keys(faculty.achievements).length > 0 && (
              <motion.div 
                className="px-2 mb-3"
                initial={{ opacity: 0, y: 5 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.3 }
                }}
              >
                <h4 className="text-sm font-semibold text-white mb-2">
                  Publications & Achievements
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  {Object.entries(faculty.achievements).map(([key, value]) => {
                    if (!value) return null;
                    
                    if (key === 'profile') {
                      return (
                        <li key={key} className="flex items-start">
                          <a 
                            href={value as string} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline flex items-center"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            View Profile
                          </a>
                        </li>
                      );
                    }
                    
                    return (
                      <li key={key} className="flex items-start">
                        <span className="text-blue-300 mr-1.5">•</span>
                        <span>{value}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
            
            {/* Visit Profile Buttons */}
            {(faculty.name === 'Dr. Swastik Tripathi' || faculty.name === 'Dr. Shwet Ketu' || faculty.name === 'Dr. Satvik Vats') && (
              <motion.div 
                className="mt-auto px-6 py-4 border-t border-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.7 }
                }}
              >
                <a 
                  href={
                    faculty.name === 'Dr. Swastik Tripathi' ? 'https://www.svats.in/' : 
                    faculty.name === 'Dr. Shwet Ketu' ? 'https://sites.google.com/view/shwetketu' :
                    'https://www.svats.in/'
                  }
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-200"
                >
                  <span>Visit Profile</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            )}
            
            {/* Contact & Social */}
            <motion.div 
              className="border-t border-white/10 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 1.0 }
              }}
            >
              <div className="flex justify-center gap-4">
                <motion.a
                  href={`mailto:${faculty.email}`}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4 text-gray-200" />
                </motion.a>
                <motion.a
                  href={`tel:${faculty.phone}`}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4 text-gray-200" />
                </motion.a>
                {socialIcons.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4 text-gray-200" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.article>
  );
});

FacultyCard.displayName = 'FacultyCard';

export default FacultyCard;