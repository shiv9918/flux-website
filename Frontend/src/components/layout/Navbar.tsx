// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "@/assets/images/flux_logo.png"; // Updated logo path

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
//fixed
  // Array of links with paths
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Faculty", path: "/faculty" },
    { name: "Our Team", path: "/team" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Track mouse position for tech effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Subtle Tech Grid Background */}
      <div className="fixed top-0 left-0 w-full h-20 pointer-events-none z-40">
        <svg className="w-full h-full opacity-5">
          <defs>
            <pattern id="navGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#navGrid)" />
        </svg>
      </div>

      <motion.nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
          showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.3) 0%, 
              rgba(26, 26, 26, 0.4) 50%, 
              rgba(0, 0, 0, 0.3) 100%
            )
          `,
          backdropFilter: "blur(15px)",
          borderBottom: "1px solid rgba(16, 185, 129, 0.15)",
          boxShadow: "0 2px 20px rgba(0, 0, 0, 0.2), 0 0 15px rgba(16, 185, 129, 0.05)",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Subtle Animated Circuit Line */}
        <motion.div
          className="absolute top-0 left-0 h-0.5 opacity-60"
          style={{ 
            width: "100%",
            background: "linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.6) 50%, transparent 100%)"
          }}
          animate={{
            background: [
              "linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.6) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 30%, rgba(16, 185, 129, 0.8) 70%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.6) 50%, transparent 100%)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Clean Logo without Circle */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <motion.img
              src={logo}
              alt="FLUX Logo"
              className="w-12 h-12 object-contain"
              style={{
                filter: "drop-shadow(0 0 12px rgba(16, 185, 129, 0.4))",
              }}
              animate={{
                filter: [
                  "drop-shadow(0 0 12px rgba(16, 185, 129, 0.4))",
                  "drop-shadow(0 0 20px rgba(16, 185, 129, 0.6))",
                  "drop-shadow(0 0 12px rgba(16, 185, 129, 0.4))",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1 }}
            />
            
            {/* FLUX Text - Now Visible */}
            <motion.span
              className="text-2xl font-black tracking-wide text-white"
              style={{
                fontFamily: "'Orbitron', 'Space Grotesk', sans-serif",
                textShadow: "0 0 10px rgba(16, 185, 129, 0.5), 2px 2px 4px rgba(0, 0, 0, 0.8)",
                filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.3))",
              }}
              animate={{
                textShadow: [
                  "0 0 10px rgba(16, 185, 129, 0.5), 2px 2px 4px rgba(0, 0, 0, 0.8)",
                  "0 0 15px rgba(16, 185, 129, 0.7), 2px 2px 4px rgba(0, 0, 0, 0.8)",
                  "0 0 10px rgba(16, 185, 129, 0.5), 2px 2px 4px rgba(0, 0, 0, 0.8)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              FLUX
            </motion.span>
          </Link>

          {/* Enhanced Desktop Links */}
          <ul 
            className="hidden md:flex gap-8 text-sm font-semibold tracking-wider uppercase"
            style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
          >
            {navLinks.map((link, i) => (
              <motion.li
                key={i}
                className="cursor-pointer relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={link.path}
                  className={`relative z-10 transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-gray-300/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  
                  {/* Active Indicator */}
                  {location.pathname === link.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/80"
                      layoutId="activeTab"
                      style={{
                        boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)",
                      }}
                    />
                  )}
                </Link>
                
                {/* Hover Effect */}
                <motion.span
                  className="absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary/70 to-green-400/70"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: "0 0 6px rgba(16, 185, 129, 0.4)",
                  }}
                />
                
                {/* Subtle Glitch Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-primary/3 -z-10 rounded"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.li>
            ))}
          </ul>

          {/* Enhanced Right Section */}
          <div className="hidden md:flex items-center gap-6">
            {/* Social Icons with Subtle Tech Effects */}
           <div className="flex items-center gap-4">
  {[
    { Icon: SiGmail, color: "#1877F2", link: "mailto:flux@mmmut.ac.in" },
    { Icon: FaWhatsapp, color: "#0A66C2", link: "https://chat.whatsapp.com/F8O8hTu2aCZ6NKLeRVq" },
    { Icon: FaInstagram, color: "#E4405F", link: "https://www.instagram.com/flux.mmmut?igsh=aHI5c3Z1dGZwOGI2" },
  ].map(({ Icon, color, link }, i) => (
    <motion.a
      key={i}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon
        className="text-gray-400/80 group-hover:text-primary transition-colors duration-300 relative z-10"
        size={20}
      />

      {/* Subtle Hexagonal Background */}
      <motion.div
        className="absolute inset-0 bg-primary/5 -z-10"
        style={{
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          width: "130%",
          height: "130%",
          top: "-15%",
          left: "-15%",
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, rotate: 180 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  ))}
</div>


            {/* Transparent CTA Button */}
            <motion.button
              className="relative overflow-hidden px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 group border border-primary/40"
              style={{
                background: "rgba(16, 185, 129, 0.1)",
                fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                boxShadow: "0 0 15px rgba(16, 185, 129, 0.2)",
                backdropFilter: "blur(10px)",
                color: "#10b981",
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(16, 185, 129, 0.3)",
                background: "rgba(16, 185, 129, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Go to App</span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              
              {/* Button Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>

          {/* Enhanced Mobile Hamburger */}
          <motion.div className="md:hidden relative">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-primary/20 backdrop-blur-sm"
              style={{
                background: "rgba(16, 185, 129, 0.05)",
                boxShadow: "0 0 10px rgba(16, 185, 129, 0.15)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <FaTimes size={20} className="text-primary/80" />
                ) : (
                  <FaBars size={20} className="text-primary/80" />
                )}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Transparent Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? "block" : "hidden"}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(0, 0, 0, 0.4) 0%, 
                rgba(26, 26, 26, 0.5) 50%, 
                rgba(0, 0, 0, 0.4) 100%
              )
            `,
            backdropFilter: "blur(15px)",
            borderTop: "1px solid rgba(16, 185, 129, 0.15)",
          }}
        >
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Links */}
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <Link
                  to={link.path}
                  className={`block py-2 px-4 rounded-lg font-medium uppercase tracking-wider transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/8 border-l-2 border-primary/60"
                      : "text-gray-300/80 hover:text-white hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Mobile Social Icons */}
            <motion.div
              className="flex gap-6 mt-6 pt-4 border-t border-primary/15 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {[SiGmail, FaWhatsapp, FaInstagram].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon
                    className="cursor-pointer text-gray-400/70 hover:text-primary transition-colors duration-300"
                    size={24}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Subtle Tech Particles following cursor */}
      <div className="fixed pointer-events-none z-30">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`cursor-particle-${i}`}
            className="absolute w-0.5 h-0.5 bg-primary/40 rounded-full"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
            animate={{
              x: [0, Math.random() * 15 - 7, 0],
              y: [0, Math.random() * 15 - 7, 0],
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Navbar;