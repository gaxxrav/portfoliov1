import { InfiniteSlider } from './infinite-slider';
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

interface SkillsCarouselProps {
  className?: string;
}

export function SkillsCarousel({ className }: SkillsCarouselProps) {
  return (
    <div className={className}>
      {/* Intentionally no heading (per user's last preference) */}
      <InfiniteSlider
        gap={24}
        duration={100}
        durationOnHover={140}
        className="w-full"
      >
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-3 bg-black/20 backdrop-blur-md \
                       border border-white/10 rounded-lg hover:bg-black/30 \
                       transition-all duration-300 min-w-fit whitespace-nowrap \
                       shadow-lg hover:shadow-xl hover:border-white/20 \
                       backdrop-saturate-150"
          >
            <div className="text-white">{skill.icon}</div>
            <span className="text-sm font-medium text-white">{skill.name}</span>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}