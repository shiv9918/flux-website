import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { Faculty } from '@/types';
import { facultyData } from './facultyData';
import FacultyCard from './FacultyCard';
import StatsCounter from './StatsCounter';
import LoadingSkeleton from './LoadingSkeleton';

const FacultyPage: React.FC = () => {
  const [filteredFaculty] = useState<Faculty[]>(facultyData);
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Advanced background animation
  useEffect(() => {
    const animateBackground = async () => {
      await controls.start({
        background: [
          'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.1) 0%, transparent 50%), linear-gradient(135deg, hsl(var(--bg)) 0%, hsl(var(--bg)) 100%)',
          'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.1) 0%, transparent 50%), linear-gradient(135deg, hsl(var(--bg)) 0%, hsl(var(--bg)) 100%)',
          'radial-gradient(ellipse at bottom, rgba(34, 197, 94, 0.1) 0%, transparent 50%), linear-gradient(135deg, hsl(var(--bg)) 0%, hsl(var(--bg)) 100%)',
          'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.1) 0%, transparent 50%), linear-gradient(135deg, hsl(var(--bg)) 0%, hsl(var(--bg)) 100%)'
        ],
        transition: {
          duration: 12,
          repeat: Infinity,
          ease: 'linear'
        }
      });
    };
    animateBackground();
  }, [controls]);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.6,
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  const pageVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.8,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.5,
        ease: 'easeIn'
      }
    }
  };

  // Sort faculty to place Satvik Vats first
  const sortedFaculty = filteredFaculty
    .filter(f => ['Dr. Shwet Ketu', 'Dr. Satvik Vats'].includes(f.name))
    .sort((a, b) => {
      if (a.name === 'Dr. Satvik Vats') return -1;
      if (b.name === 'Dr. Satvik Vats') return 1;
      return 0;
    });

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 z-0"
        animate={controls}
        style={{
          background: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.1) 0%, transparent 50%), linear-gradient(135deg, hsl(var(--bg)) 0%, hsl(var(--bg)) 100%)'
        }}
      />

      {/* Floating Geometric Elements */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 40, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 2,
            }}
          >
            <div 
              className="w-full h-full border border-blue-500/20 dark:border-indigo-400/20"
              style={{
                borderRadius: Math.random() > 0.5 ? '50%' : '8px',
                background: Math.random() > 0.5 
                  ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent)' 
                  : 'linear-gradient(45deg, rgba(168, 85, 247, 0.1), transparent)'
              }}
            />
          </motion.div>
        ))}

        {/* Particle System */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-500/40 dark:bg-indigo-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 200, -100, 0],
              y: [0, -150, 100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 25}%`,
              background: `radial-gradient(circle, ${
                i === 0 ? 'rgba(59, 130, 246, 0.1)' : 
                i === 1 ? 'rgba(168, 85, 247, 0.1)' : 
                'rgba(34, 197, 94, 0.1)'
              } 0%, transparent 70%)`,
              filter: 'blur(40px)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="visible"
        exit="exit"
        className="relative z-20 min-h-screen transition-colors duration-500 bg-transparent text-[hsl(var(--fg))]"
      >
        <div className="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
          {/* Original Animated Faculty Coordinators Heading */}
          <div className="relative overflow-hidden py-4 mb-6 bg-transparent rounded-2xl">
            <div
              className="absolute inset-0 opacity-10 dark:opacity-5"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0h-7.17L36.54 24.77 48.817 54h7.17L43.798 24.77 54.627 0zM23.86 0h-7.17L5.776 24.77 18.05 54h7.17L17.03 24.77 23.86 0z\' fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'
              }}
            />
            <motion.div
              className="relative z-10 text-center"
              initial="hidden"
              animate="visible"
            >
              <div className="flex justify-center mb-2">
                {['F', 'A', 'C', 'U', 'L', 'T', 'Y', ' ', 'C', 'O', 'O', 'R', 'D', 'I', 'N', 'A', 'T', 'O', 'R', 'S'].map((letter, index) => (
                  <motion.span
                    key={index}
                    className="block"
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.8 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          delay: index * 0.05,
                          type: 'spring',
                          stiffness: 300,
                          damping: 15
                        }
                      }
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="inline-block text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  </motion.span>
                ))}
              </div>

              <motion.div
                className="relative h-1.5 w-32 mx-auto mt-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
                initial={{ opacity: 0, width: 0 }}
                animate={{
                  opacity: 1,
                  width: '8rem',
                  transition: { delay: 0.5, duration: 1, ease: 'easeOut' }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ x: '-100%' }}
                  animate={{
                    x: '100%',
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'linear'
                    }
                  }}
                />
              </motion.div>

              <motion.p
                className="mt-2 text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.7, duration: 0.8, ease: 'easeOut' }
                }}
              >
                Meet our distinguished faculty coordinators who are experts in their respective fields
              </motion.p>
            </motion.div>
          </div>

          {/* Stats Counter */}
          <StatsCounter />

          {/* Faculty Grid */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <LoadingSkeleton />
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {sortedFaculty.length > 0 ? (
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
                      layout
                    >
                      <AnimatePresence>
                        {sortedFaculty.map((faculty, index) => (
                          <motion.div
                            key={faculty.id}
                            initial={{ 
                              opacity: 0, 
                              y: 100,
                              scale: 0.8,
                              rotateY: -20
                            }}
                            animate={{ 
                              opacity: 1, 
                              y: 0,
                              scale: 1,
                              rotateY: 0
                            }}
                            exit={{ 
                              opacity: 0, 
                              y: -50,
                              scale: 0.8,
                              rotateY: 20
                            }}
                            transition={{
                              duration: 0.8,
                              delay: index * 0.2,
                              type: 'spring',
                              stiffness: 100,
                              damping: 15
                            }}
                            whileHover={{
                              y: -8,
                              scale: 1.02,
                              transition: {
                                duration: 0.3,
                                type: 'spring',
                                stiffness: 400
                              }
                            }}
                            className="group relative"
                          >
                            {/* Card Glow Effect */}
                            <motion.div
                              className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                              animate={{
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }}
                            />
                            
                            <FacultyCard
                              faculty={faculty}
                              index={index}
                            />
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-16"
                    >
                      <div className="text-6xl mb-4">🔍</div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default FacultyPage;
