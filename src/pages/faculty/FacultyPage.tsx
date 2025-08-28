import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";
import type { Faculty } from "@/types";
import { facultyData } from "./facultyData";
import FacultyCard from "./FacultyCard";
import StatsCounter from "./StatsCounter";
import LoadingSkeleton from "./LoadingSkeleton";

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

  useEffect(() => {
    const animateBackground = async () => {
      await controls.start({
        background: [
          "radial-gradient(ellipse at top, rgba(59, 130, 246, 0.1) 0%, transparent 50%), linear-gradient(135deg, hsl(var(--bg)) 0%, hsl(var(--bg)) 100%)",
          "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.1) 0%, transparent 50%), linear-gradient(135deg, hsl(var(--bg)) 0%, hsl(var(--bg)) 100%)",
          "radial-gradient(ellipse at bottom, rgba(34, 197, 94, 0.1) 0%, transparent 50%), linear-gradient(135deg, hsl(var(--bg)) 0%, hsl(var(--bg)) 100%)",
          "radial-gradient(ellipse at top, rgba(59, 130, 246, 0.1) 0%, transparent 50%), linear-gradient(135deg, hsl(var(--bg)) 0%, hsl(var(--bg)) 100%)",
        ],
        transition: { duration: 12, repeat: Infinity, ease: "linear" },
      });
    };
    animateBackground();
  }, [controls]);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.6,
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const pageVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.5,
        ease: "easeIn",
      },
    },
  };

  const sortedFaculty = filteredFaculty
    .filter((f) => ["Dr. Shwet Ketu", "Dr. Satvik Vats"].includes(f.name))
    .sort((a, b) => {
      if (a.name === "Dr. Satvik Vats") return -1;
      if (b.name === "Dr. Satvik Vats") return 1;
      return 0;
    });

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background */}
      <motion.div
        className="fixed inset-0 -z-10"
        animate={controls}
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(59, 130, 246, 0.1) 0%, transparent 50%), linear-gradient(135deg, hsl(var(--bg)) 0%, hsl(var(--bg)) 100%)",
        }}
      />

      {/* Floating elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
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
              ease: "linear",
              delay: i * 2,
            }}
          >
            <div
              className="w-full h-full border border-blue-500/20 dark:border-indigo-400/20"
              style={{
                borderRadius: Math.random() > 0.5 ? "50%" : "8px",
                background:
                  Math.random() > 0.5
                    ? "linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent)"
                    : "linear-gradient(45deg, rgba(168, 85, 247, 0.1), transparent)",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="visible"
        exit="exit"
        className="flex-grow relative z-10 transition-colors duration-500 bg-transparent text-[hsl(var(--fg))]"
      >
        <div className="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
          {/* Heading */}
          <div className="relative overflow-hidden py-4 mb-6 bg-transparent rounded-2xl">
            <motion.div
              className="relative z-10 text-center"
              initial="hidden"
              animate="visible"
            >
              <div className="flex justify-center mb-2">
                {"FACULTY COORDINATORS".split("").map((letter, index) => (
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
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        },
                      },
                    }}
                  >
                    <span className="inline-block text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  </motion.span>
                ))}
              </div>
              <motion.p
                className="mt-2 text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.7, duration: 0.8, ease: "easeOut" },
                }}
              >
                Meet our distinguished faculty coordinators who are experts in
                their respective fields
              </motion.p>
            </motion.div>
          </div>

          <StatsCounter />

          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <LoadingSkeleton />
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {sortedFaculty.length > 0 && (
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <AnimatePresence>
                        {sortedFaculty.map((faculty, index) => (
                          <motion.div
                            key={faculty.id}
                            initial={{ opacity: 0, y: 100, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                              duration: 0.8,
                              delay: index * 0.2,
                              type: "spring",
                              stiffness: 100,
                              damping: 15,
                            }}
                            className="group relative"
                          >
                            <FacultyCard faculty={faculty} index={index} />
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        </div>
      </motion.main>
    </div>
  );
};

export default FacultyPage;
