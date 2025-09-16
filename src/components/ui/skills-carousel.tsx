import { useState, useEffect } from 'react';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiGodotengine,
  SiReact,
  SiDjango,
  SiExpress,
  SiBootstrap,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGooglecloud,
  SiFirebase,
  SiLinux,
  SiGit,
  SiGnubash,
  SiFigma,
  SiBlender,
  SiAuth0,
} from 'react-icons/si';
import { Mail } from 'lucide-react';
import type { ReactNode } from 'react';

interface SkillItem {
  name: string;
  icon: ReactNode;
  category: string;
}

const skillsData: SkillItem[] = [
  // Languages
  { name: 'Python', icon: <SiPython className="w-5 h-5" />, category: 'Languages' },
  { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5" />, category: 'Languages' },
  { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5" />, category: 'Languages' },
  { name: 'C++', icon: <SiCplusplus className="w-5 h-5" />, category: 'Languages' },
  { name: 'GDScript', icon: <SiGodotengine className="w-5 h-5" />, category: 'Languages' },

  // Frameworks
  { name: 'React.js', icon: <SiReact className="w-5 h-5" />, category: 'Frameworks' },
  { name: 'React Native', icon: <SiReact className="w-5 h-5" />, category: 'Frameworks' },
  { name: 'Django', icon: <SiDjango className="w-5 h-5" />, category: 'Frameworks' },
  { name: 'Express.js', icon: <SiExpress className="w-5 h-5" />, category: 'Frameworks' },
  { name: 'Bootstrap', icon: <SiBootstrap className="w-5 h-5" />, category: 'Frameworks' },
  { name: 'TensorFlow', icon: <SiTensorflow className="w-5 h-5" />, category: 'Frameworks' },
  { name: 'Scikit-learn', icon: <SiScikitlearn className="w-5 h-5" />, category: 'Frameworks' },
  { name: 'OpenCV', icon: <SiOpencv className="w-5 h-5" />, category: 'Frameworks' },

  // Databases
  { name: 'MongoDB', icon: <SiMongodb className="w-5 h-5" />, category: 'Databases' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5" />, category: 'Databases' },
  { name: 'MySQL', icon: <SiMysql className="w-5 h-5" />, category: 'Databases' },
  { name: 'Redis', icon: <SiRedis className="w-5 h-5" />, category: 'Databases' },

  // Cloud & DevOps
  { name: 'GCP', icon: <SiGooglecloud className="w-5 h-5" />, category: 'Cloud & DevOps' },
  { name: 'Firebase', icon: <SiFirebase className="w-5 h-5" />, category: 'Cloud & DevOps' },
  { name: 'Linux', icon: <SiLinux className="w-5 h-5" />, category: 'Cloud & DevOps' },

  // Tools
  { name: 'Git', icon: <SiGit className="w-5 h-5" />, category: 'Tools' },
  { name: 'Bash', icon: <SiGnubash className="w-5 h-5" />, category: 'Tools' },
  { name: 'Figma', icon: <SiFigma className="w-5 h-5" />, category: 'Tools' },
  { name: 'Blender', icon: <SiBlender className="w-5 h-5" />, category: 'Tools' },
  { name: 'Mailtrap', icon: <Mail className="w-5 h-5" />, category: 'Tools' },
  { name: 'Auth0', icon: <SiAuth0 className="w-5 h-5" />, category: 'Tools' },

  // Game Engines
  { name: 'Godot', icon: <SiGodotengine className="w-5 h-5" />, category: 'Game Engines' },
];

// Custom InfiniteSlider Component with smooth hover transitions
function InfiniteSlider({ 
  children, 
  gap = 32, 
  duration = 80, 
  className = "" 
}: { 
  children: ReactNode[], 
  gap?: number, 
  duration?: number, 
  className?: string 
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Double the children to create seamless loop
  const doubledChildren = [...children, ...children];
  
  return (
    <div className={`w-full overflow-visible ${className}`}>
      <div
        className="flex items-center"
        style={{
          gap: `${gap}px`,
          animation: `infiniteSlide ${duration}s linear infinite`,
          animationPlayState: isHovered ? 'paused' : 'running',
          width: 'max-content',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {doubledChildren.map((child, index) => (
          <div key={index} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes infiniteSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - ${gap / 2}px));
            animation-timing-function: ease-in-out;
          }
        }
      `}</style>
    </div>
  );
}

interface SkillsCarouselProps {
  className?: string;
}

export function SkillsCarousel({ className }: SkillsCarouselProps) {
  const allSkills = [...skillsData];
  
  return (
    <div className={className}>
      <div className="relative py-16 w-screen left-1/2 right-1/2 -mx-[50vw]">
        
        <InfiniteSlider
          gap={40}
          duration={180} // Slowed down further from 120 to 180
          className="py-8 z-0 relative w-full"
        >
          {allSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center justify-center gap-4 px-6 py-4 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.05] backdrop-blur-md border border-white/20 hover:border-primary/70 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 cursor-pointer"
              style={{
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                minWidth: '200px',
                height: '90px',
                animation: `bob 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite`,
                animationDelay: `${index * 0.25}s`,
                transformOrigin: 'center bottom',
                willChange: 'transform, opacity',
                position: 'relative',
                zIndex: 10,
              }}
            >
              <div className="text-3xl transform transition-transform duration-300 hover:scale-110 flex-shrink-0">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-center flex-shrink-0 whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </InfiniteSlider>
        
        {/* Custom CSS for bob animation with controlled vertical movement */}
        <style jsx>{`
          @keyframes bob {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.85;
          }
          50% {
            transform: translateY(-15px) scale(1.03);
            opacity: 0.95;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }
          }
        `}</style>

      </div>
    </div>
  );
}

export default SkillsCarousel;