
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ProceduralCreature } from "./procedural-creature";

interface HandWrittenTitleProps {
    title?: string;
    subtitle?: string;
}

function HandWrittenTitle({
    title = "HANDS ON",
    subtitle = "and with a sense of DIRECTION\n (like this bug that follows your mouse!)",
}: HandWrittenTitleProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { duration: 0.5 },
            },
        },
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        setAnimationKey(prev => prev + 1); // Force re-animation
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left side - Hand written text with circle */}
                <div 
                    className="relative cursor-pointer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.svg
                            key={animationKey} // Force re-animation on hover
                            width="500"
                            height="240"
                            viewBox="0 0 400 140"
                            initial="hidden"
                            animate="visible"
                            className="absolute"
                            style={{ 
                                left: '50%', 
                                top: '50%', 
                                transform: 'translate(-50%, -50%)' 
                            }}
                        >
                            <title>Hand drawn circle around HANDS ON</title>
                            <motion.path
                                d="
                                M 50 70
                                  C 40 10, 120 -10, 200 10
                                  C 80 30, 370 50, 360 90
                                  C 350 130, 20 140, 140 135
                                  C 110 110, 410 110, 70 120
                                "                                      
                                fill="none"
                                strokeWidth="3"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                variants={draw}
                                className="text-accent opacity-70"
                            />
                        </motion.svg>
                    </div>
                    <div className="relative text-center z-10 flex flex-col items-center justify-center py-16">
                        <motion.h1
                            className="text-4xl md:text-6xl text-white tracking-tight font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            {title}
                        </motion.h1>
                    </div>
                </div>

                {/* Right side - Procedural creature animation */}
                <div className="flex flex-col items-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <ProceduralCreature />
                    </motion.div>
                    {subtitle && (
                        <motion.div
                            className="text-center max-w-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                        >
                            {subtitle.split('\n').map((line, index) => (
                                <p
                                    key={index}
                                    className={
                                        index === 0 
                                            ? "text-xl font-bold text-foreground mb-2" 
                                            : "text-lg text-muted-foreground"
                                    }
                                >
                                    {line.trim()}
                                </p>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}

export { HandWrittenTitle };
