import { Button as MovingBorderButton } from '@/components/ui/moving-border';
import { SkillsCarousel } from '@/components/ui/skills-carousel';
import { LiquidButton } from '@/components/ui/liquid-button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="container mx-auto">
        <div className="animate-fade-in flex flex-col lg:flex-row items-start gap-12">
          {/* Left Column - Text Content */}
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-white" style={{ fontFamily: '"Long Summer", cursive', fontSize: '1em', letterSpacing: '0em' }}>HEYA! I'M</span>
              <span className="block text-transparent bg-gradient-to-r from-yellow-500 via-red-100 to-indigo-800 bg-clip-text" style={{ fontFamily: '"Long Summer", sans-serif', fontSize: '1em' }}>
                GAURAV MURALI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl" style={{ fontFamily: '"Haarlem Deco", cursive' }}>
              I'm a passionate problem-solver with an eye for design, driven to build meaningful projects that inspire me and benefit others.
            </p>

            <div className="mb-12">
              <LiquidButton 
                href="https://drive.google.com/file/d/1PCQyOcwyLfOz7EIO4UgCaS24G9V7_QT4/view?usp=sharing"
                className="text-white"
                style={{ fontFamily: '"Long Summer", cursive' }}
              >
                Download CV
              </LiquidButton>
            </div>
          </div>

          {/* Right Column - Social Buttons */}
          <div className="flex flex-col items-center lg:items-start lg:justify-center lg:pl-12 lg:border-l border-white/10 lg:min-h-[300px]">
            <div className="flex flex-col space-y-6">
              <a
                href="https://github.com/gaxxrav"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white 
                shadow-[0_0_12px_rgba(74,222,128,0.8),0_0_24px_rgba(74,222,128,0.6)] 
                hover:shadow-[0_0_20px_rgba(74,222,128,0.9),0_0_40px_rgba(74,222,128,0.7)] 
                transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/gaurav-murali-9098bb258/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 flex items-center justify-center rounded-xl 
                bg-white/5 backdrop-blur-sm border border-white/10 text-white 
                shadow-[0_0_12px_rgba(96,165,250,0.8),0_0_24px_rgba(96,165,250,0.6)] 
                hover:shadow-[0_0_20px_rgba(147,197,253,0.9),0_0_40px_rgba(147,197,253,0.7)] 
                transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              
              <a
                href="mailto:gaurav.murali3@gmail.com"
                className="h-14 w-14 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white 
                shadow-[0_0_12px_rgba(234,179,8,0.8),0_0_24px_rgba(234,179,8,0.6)] 
                hover:shadow-[0_0_20px_rgba(234,179,8,0.9),0_0_40px_rgba(234,179,8,0.7)] 
                transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkillsCarousel className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
