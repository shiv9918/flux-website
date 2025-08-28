// src/components/sections/home/Hero.tsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SectionCTA from "@/components/sectionCTA";
import logo from "@/assets/images/flux-logo.png";

import { Variants } from 'framer-motion';

const textParent: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.12,
      ease: [0.16, 1, 0.3, 1],
      duration: 0.6,
    },
  },
};

const textChild: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

const logoEnter: Variants = {
  hidden: { opacity: 0, y: -40, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 160, 
      damping: 18, 
      mass: 0.8 
    },
  },
};

// Typewriter Component
const TypewriterMotto = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ["INNOVATE", "INTERACT", "IMPACT"];

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else if (isDeleting) {
        setCurrentText(word.substring(0, currentText.length - 1));
      } else {
        setCurrentText(word.substring(0, currentText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span 
      className="relative inline-block min-w-[200px]"
      style={{
        background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.8) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }}
    >
      {currentText}
      <motion.span
        className="inline-block w-0.5 h-12 sm:h-16 lg:h-20 bg-primary ml-2 align-middle"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  );
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[78vh] flex items-center overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 relative">
          {/* Enhanced animated background elements */}
          <div className="absolute inset-0 -z-20 overflow-hidden">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-3/4 left-1/3 w-1 h-1 bg-primary/40 rounded-full"
              animate={{ 
                scale: [1, 2, 1],
                opacity: [0.4, 0.9, 0.4],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full"
              animate={{ 
                scale: [1, 1.8, 1],
                opacity: [0.2, 0.6, 0.2],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            
            {/* Additional floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400/30 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.2, 0.5]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* LEFT: Enhanced Text with typewriter effect */}
          <motion.div
            variants={textParent}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 relative"
          >
            {/* Animated accent line */}
            <motion.div 
              variants={textChild}
              className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 mb-6 rounded-full"
              animate={{
                width: [64, 80, 64],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div variants={textChild} className="relative">
              <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-black leading-[0.9] tracking-tight mb-2">
                <motion.span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                  animate={{
                    textShadow: [
                      "0 0 0px transparent",
                      "0 0 10px rgba(255,255,255,0.3)",
                      "0 0 0px transparent"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <TypewriterMotto />
                </motion.span>
              </h1>
            </motion.div>

            {/* Floating subtitle */}
            <motion.div 
              variants={textChild} 
              className="relative mb-6"
              animate={{
                y: [0, -5, 0],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.h2
                className="text-[clamp(1.8rem,5vw,3.2rem)] font-bold leading-tight tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                <motion.span
                  animate={{ 
                    textShadow: ["0 0 0px transparent", "0 0 8px hsl(var(--primary)/0.3)", "0 0 0px transparent"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  Igniting Ideas,
                </motion.span>{" "}
                <span 
                  className="relative"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.7) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  Shaping Futures
                </span>
              </motion.h2>
            </motion.div>

            {/* Enhanced description with pulsing elements */}
            <motion.div variants={textChild} className="space-y-4 mb-8">
              <div className="relative">
                <p className="text-lg text-muted-foreground/90 leading-relaxed max-w-xl">
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>{" "}
                  <strong>Unleashing Innovation</strong> in Computer Science & Engineering
                </p>
                <p className="text-base text-muted-foreground/80 leading-relaxed max-w-xl mt-3">
                  Join <strong className="text-primary font-semibold">FLUX</strong> – where brilliant minds 
                  converge to push the boundaries of technology, foster groundbreaking research, 
                  and build the future of computing.
                </p>
              </div>
              
              {/* Animated feature tags */}
              <motion.div 
                className="flex items-center space-x-4 text-sm text-muted-foreground/70 pt-2"
                variants={textChild}
              >
                <motion.div 
                  className="flex items-center space-x-1"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-primary/60 rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span>Innovation Hub</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-1"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-primary/60 rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <span>Research Excellence</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-1"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-primary/60 rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                  <span>Future Tech</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Animated CTA buttons with color loading loops */}
            <motion.div
              variants={textChild}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden rounded-lg"
                style={{
                  background: "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--primary)/0.8), hsl(var(--primary)))",
                  backgroundSize: "300% 300%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <SectionCTA
                  to="about"
                  label="🔥 Explore FLUX"
                  variant="primary"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden rounded-lg"
                style={{
                  background: "linear-gradient(45deg, transparent, hsl(var(--primary)/0.3), transparent)",
                  backgroundSize: "300% 300%",
                  border: "1px solid hsl(var(--primary)/0.5)"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  borderColor: [
                    "hsl(var(--primary)/0.3)",
                    "hsl(var(--primary)/0.8)",
                    "hsl(var(--primary)/0.3)"
                  ]
                }}
                transition={{
                  backgroundPosition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  },
                  borderColor: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <SectionCTA
                  to="/events"
                  label="⚡ Upcoming Events"
                  variant="outline"
                />
              </motion.div>
            </motion.div>

            {/* Interactive scrolling tagline */}
            <motion.div 
              variants={textChild}
              className="mt-8 pt-6 border-t border-muted/20 overflow-hidden"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div
                className="whitespace-nowrap text-sm text-muted-foreground/50 cursor-pointer"
                animate={{
                  x: [0, -100]
                }}
                transition={{
                  duration: isHovered ? 25 : 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <span className="mr-8">Future Leaders of Unbound Experiments</span>
                <span className="mr-8">Innovation • Research • Excellence</span>
                <span className="mr-8">Building Tomorrow's Technology</span>
                <span className="mr-8">Computer Science & Engineering</span>
                <span className="mr-8">MMMUT Gorakhpur</span>
                <span className="mr-8">Future Leaders of Unbound Experiments</span>
                <span className="mr-8">Innovation • Research • Excellence</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Fully blended logo with background integration */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Seamlessly integrated background layers */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center lg:justify-end">
              {/* Base ambient glow */}
              <motion.div
                className="h-[32rem] w-[32rem] rounded-full"
                style={{
                  background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.08) 0%, rgba(34, 197, 94, 0.06) 30%, rgba(16, 185, 129, 0.04) 60%, transparent 100%)",
                  filter: "blur(60px)"
                }}
                animate={{ 
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.6, 0.9, 0.6]
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Secondary glow layer */}
              <motion.div
                className="absolute h-80 w-80 rounded-full"
                style={{
                  background: "radial-gradient(circle at center, rgba(34, 197, 94, 0.12) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 100%)",
                  filter: "blur(40px)"
                }}
                animate={{ 
                  scale: [1.1, 0.9, 1.1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>

            <motion.div
              variants={logoEnter}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* Integrated logo with seamless background blending */}
              <div className="relative">
                <motion.img
                  src={logo}
                  alt="Flux Society Logo"
                  width={320}
                  height={320}
                  decoding="async"
                  fetchPriority="high"
                  className="w-72 sm:w-80 h-auto object-contain relative z-10"
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(16, 185, 129, 0.4))",
                    mixBlendMode: "normal"
                  }}
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 3, -3, 0],
                    filter: [
                      "drop-shadow(0 0 30px rgba(16, 185, 129, 0.4))",
                      "drop-shadow(0 0 50px rgba(16, 185, 129, 0.6))",
                      "drop-shadow(0 0 30px rgba(16, 185, 129, 0.4))"
                    ]
                  }}
                  transition={{
                    delay: 0.9,
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Seamlessly blended circular gradients behind logo */}
                <div className="absolute inset-0 -z-10">
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      width: "140%", 
                      height: "140%", 
                      top: "-20%", 
                      left: "-20%",
                      background: `
                        conic-gradient(from 0deg at 50% 50%, 
                          rgba(16, 185, 129, 0.15) 0deg, 
                          rgba(34, 197, 94, 0.25) 120deg, 
                          rgba(16, 185, 129, 0.15) 240deg, 
                          rgba(34, 197, 94, 0.2) 360deg
                        )
                      `,
                      filter: "blur(8px)"
                    }}
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.15, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                      scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                  
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      width: "170%", 
                      height: "170%", 
                      top: "-35%", 
                      left: "-35%",
                      background: `
                        conic-gradient(from 180deg at 50% 50%, 
                          rgba(34, 197, 94, 0.08) 0deg, 
                          rgba(16, 185, 129, 0.18) 90deg,
                          rgba(34, 197, 94, 0.12) 180deg, 
                          rgba(16, 185, 129, 0.08) 270deg,
                          rgba(34, 197, 94, 0.08) 360deg
                        )
                      `,
                      filter: "blur(12px)"
                    }}
                    animate={{ 
                      rotate: -360,
                      scale: [1, 1.08, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                      scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }
                    }}
                  />
                </div>
              </div>

              {/* Enhanced orbiting particles that blend with background */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-green-400/60 rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                    animate={{
                      x: [0, Math.cos((i * Math.PI * 2) / 16) * 140],
                      y: [0, Math.sin((i * Math.PI * 2) / 16) * 140],
                      opacity: [0, 0.8, 0],
                      scale: [0, 2, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
