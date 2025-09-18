"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define nav items for portfolio
const navItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: 'ℹ️' },
  { id: 'projects', label: 'Projects', icon: '🛠️' },
  { id: 'contact', label: 'Contact', icon: '📧' },
];

// Animation variants for buttons (fluid reveal with overshoot)
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20, rotate: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: [0, 5, -5, 0], // Slight wobble for liquid effect
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut',
      scale: { type: 'spring', stiffness: 200, damping: 10 }, // Spring for overshoot
    },
  }),
};

// CSS for the droplet trail effect
const styles = `
  .nav-button {
    position: relative;
    overflow: visible !important;
  }
  .nav-button::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
  }
  .nav-button.animate-droplet::after {
    animation: droplet 0.3s ease-out forwards;
  }
  @keyframes droplet {
    0% {
      opacity: 0.5;
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, 20px) scale(0.5); /* Droplet falls and fades */
    }
  }
`;

// Main NavBar component
const LiquidNav: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style>{styles}</style>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-16 bg-transparent"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative flex items-center px-6 py-2 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full shadow-lg cursor-pointer">
          <span className="text-white font-medium">Portfolio Nav</span>
          
          {isHovered && (
            <motion.div
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 flex space-x-4"
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="nav-button flex flex-col items-center justify-center w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg rounded-full shadow-md hover:bg-white/50 transition-colors"
                  variants={buttonVariants}
                  custom={index}
                  onAnimationStart={() => {
                    // Trigger droplet animation
                    setTimeout(() => {
                      document.querySelectorAll('.nav-button')[index]?.classList.add('animate-droplet');
                    }, index * 100);
                  }}
                  onAnimationComplete={() => {
                    // Remove droplet animation class after it runs
                    setTimeout(() => {
                      document.querySelectorAll('.nav-button')[index]?.classList.remove('animate-droplet');
                    }, 300);
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs text-white mt-1">{item.label}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default LiquidNav;
