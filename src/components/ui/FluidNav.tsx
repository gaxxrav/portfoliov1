"use client";

import { motion, AnimatePresence, Variants, useAnimate } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, User, Folder, Code } from 'lucide-react';

// Liquid droplet component for the trail effect
const LiquidDroplet = ({ delay = 0, size = 1, x = 0, y = 0 }) => (
  <motion.div
    className="absolute rounded-full bg-white/20 pointer-events-none"
    initial={{ 
      scale: 0.2, 
      opacity: 0.8,
      x: x,
      y: y,
      width: `${size * 4}px`,
      height: `${size * 4}px`,
    }}
    animate={{
      scale: [0.2, 1.2, 0],
      opacity: [0.8, 0.5, 0],
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
    }}
    transition={{
      duration: 0.6,
      delay: delay,
      times: [0, 0.5, 1],
      ease: 'easeOut'
    }}
  />
);

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'skills', label: 'Skills', icon: Code },
];

const FluidNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [trailDrops, setTrailDrops] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);
  
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropId = useRef(0);
  const [scope, animate] = useAnimate();
  const lastPosition = useRef({ x: 0, y: 0 });
  const lastDropTime = useRef(0);
  const animationFrameId = useRef<number>();
  const isAnimating = useRef(false);

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
        staggerChildren: 0.1,
        delayChildren: 0.1,
        when: 'beforeChildren'
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: 'afterChildren'
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8 
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 12,
        mass: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { 
      scale: 0.5, 
      opacity: 0,
      rotate: -45 
    },
    show: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 600,
        damping: 15,
        mass: 0.5
      }
    },
    hover: {
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };
  
  const labelVariants: Variants = {
    hidden: { opacity: 0, y: 5 },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  // Create droplets on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isOpen && !isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Update last position
    lastPosition.current = { x, y };
    
    // Only create drops if mouse moved enough
    if (Date.now() - lastDropTime.current > 50) {
      const id = dropId.current++;
      setTrailDrops(prev => [...prev, { id, x, y, size: Math.random() * 2 + 1 }]);
      
      // Remove drop after animation
      setTimeout(() => {
        setTrailDrops(prev => prev.filter(drop => drop.id !== id));
      }, 1000);
      
      lastDropTime.current = Date.now();
    }
    
    // Only create droplets if mouse moved significantly
    const dx = x - lastPosition.current.x;
    const dy = y - lastPosition.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 5) {
      lastPosition.current = { x, y };
      
      // Create multiple droplets in a trail
      for (let i = 0; i < 2; i++) {
        const newDrop = {
          id: dropId.current++,
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          size: 1 + Math.random() * 3
        };
        
        setTrailDrops(prev => [...prev, newDrop]);
        
        // Remove droplet after animation
        setTimeout(() => {
          setTrailDrops(prev => prev.filter(drop => drop.id !== newDrop.id));
        }, 800);
      }
    }
  };

  return (
    <header 
      ref={scope}
      onMouseMove={handleMouseMove}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible ${
        scrolled 
          ? 'bg-black/10 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20 backdrop-saturate-150' 
          : 'bg-black/5 backdrop-blur-lg backdrop-saturate-150'
      }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl" style={{ fontFamily: '"Haarlem Deco", sans-serif' }}>
            <span className="text-primary">sea</span>
            <span className="text-accent">.gax</span>
          </div>

          {/* Fluid Navigation Menu */}
          <div className="relative">
            <motion.div 
              className="flex justify-end"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => !isOpen && setIsHovered(false)}
            >
              {/* Fallen Bottle Button */}
              <motion.button
                className="relative px-12 py-3.5 bg-gradient-to-r from-cyan-700/30 to-blue-900/40 backdrop-blur-sm border border-cyan-300/20 hover:border-cyan-200/30 transition-all flex items-center justify-center group overflow-hidden"
                style={{
                  borderRadius: '50% 45% 45% 50% / 30% 60% 40% 70%',
                  boxShadow: 'inset 0 0 15px rgba(255, 255, 255, 0.1), 5px 5px 30px rgba(0, 0, 0, 0.3)'
                }}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: 'rgba(8, 47, 73, 0.5)',
                  boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.15), 7px 7px 35px rgba(34, 211, 238, 0.25)'
                }}
                whileTap={{ scale: 0.98 }}
                initial={false}
              >
                <div className="absolute -top-1 left-1/4 w-1/5 h-3 bg-gradient-to-b from-cyan-200/30 to-transparent rounded-b-full" />
                <span className="relative z-10 text-cyan-100/95 font-medium tracking-wider text-sm sm:text-base uppercase">
                  {isOpen ? 'Close' : 'Navigate Sea'}
                </span>
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-1/3 left-1/4 w-1/3 h-full bg-gradient-to-b from-white/15 to-transparent" />
                  <div className="absolute top-1/3 right-1/4 w-1/4 h-1/2 bg-gradient-to-l from-white/10 to-transparent" />
                </div>
                <div className="absolute -bottom-2 left-1/4 w-1/2 h-2 bg-black/20 blur-md rounded-full" />
              </motion.button>

              <AnimatePresence mode="wait">
                {(isHovered || isOpen) && (
                  <motion.div 
                    key={isOpen ? 'open' : 'hovered'}
                    className="absolute top-full right-0 mt-4"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={containerVariants}
                  >
                    <div className="flex items-center justify-center w-full space-x-4">
                      {navItems.map((item) => (
                        <motion.div 
                          key={item.id} 
                          className="flex flex-col items-center"
                          variants={itemVariants}
                        >
                          <motion.button
                            onClick={() => scrollToSection(item.id)}
                            className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all p-0 group relative overflow-hidden"
                            whileHover={{ 
                              y: -5, 
                              scale: 1.1,
                              backgroundColor: 'rgba(255, 255, 255, 0.15)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={item.label}
                          >
                            <motion.span 
                              className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"
                              initial={{ scale: 0.5, opacity: 0 }}
                            />
                            <motion.span
                              variants={iconVariants}
                              className="relative z-10"
                            >
                              <item.icon className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
                            </motion.span>
                          </motion.button>
                          <motion.span 
                            className="text-xs text-white/80 text-center mt-1.5"
                            variants={labelVariants}
                          >
                            {item.label}
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
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
