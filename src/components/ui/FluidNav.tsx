"use client";

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Folder, MessageSquare } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'contact', label: 'Contact', icon: MessageSquare },
];

const FluidNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/10 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20 backdrop-saturate-150' 
        : 'bg-black/5 backdrop-blur-lg backdrop-saturate-150'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl" style={{ fontFamily: '"Haarlem Deco", sans-serif' }}>
            <span className="text-primary">gaxrav</span>
            <span className="text-accent">.dev</span>
          </div>

          {/* Fluid Navigation Menu */}
          <div className="relative">
            <motion.div 
              className="flex justify-end"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => !isOpen && setIsHovered(false)}
            >
              {/* Burger Menu Button */}
              <motion.button
                className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all"
                onClick={() => {
                  setIsOpen(!isOpen);
                  if (!isOpen) setIsHovered(true);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen || isHovered ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.button>

              {/* Navigation Items */}
              <AnimatePresence>
                {(isHovered || isOpen) && (
                  <motion.div 
                    className="absolute top-full right-0 mt-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="flex flex-col items-end space-y-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                    >
                      {navItems.map((item) => (
                        <motion.div
                          key={item.id}
                          className="flex items-center space-x-3 group"
                          variants={itemVariants}
                        >
                          <motion.span 
                            className="text-white/70 group-hover:text-white text-sm font-medium transition-colors"
                            initial={{ x: -10 }}
                            animate={{ x: 0 }}
                          >
                            {item.label}
                          </motion.span>
                          <motion.button
                            onClick={() => scrollToSection(item.id)}
                            className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={item.label}
                          >
                            <item.icon className="w-5 h-5 text-white" />
                          </motion.button>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FluidNav;
