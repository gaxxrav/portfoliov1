import { Button as MovingBorderButton } from '@/components/ui/moving-border';
import { SkillsCarousel } from '@/components/ui/skills-carousel';
import ShaderBackground from '@/components/ui/shader-background';
import { LiquidButton } from '@/components/ui/liquid-button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <ShaderBackground className="min-h-screen">
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-white" style={{ fontFamily: '"Long Summer", cursive', fontSize: '1.5em' }}>HEYA, I'M</span>
              <span className="block text-transparent bg-gradient-to-r from-yellow-500 via-red-100 to-indigo-800 bg-clip-text" style={{ fontFamily: '"Long Summer", cursive', fontSize: '1.2em' }}>
                GAURAV MURALI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto" style={{ fontFamily: '"Long Summer", cursive' }}>
              I'm a passionate problem-solver with an eye for design, driven to build meaningful projects that inspire me and benefit others.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <LiquidButton 
                href="https://drive.google.com/file/d/1PCQyOcwyLfOz7EIO4UgCaS24G9V7_QT4/view?usp=sharing"
                className="text-white"
                style={{ fontFamily: '"Long Summer", cursive' }}
              >
                Download CV
              </LiquidButton>
            </div>

            <div className="flex justify-center space-x-6 mb-16">
              <a
                href="https://github.com/gaxxrav"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white shadow-[0_0_8px_rgba(74,222,128,0.5)] hover:shadow-[0_0_15px_rgba(74,222,128,0.7)] transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/gaurav-murali-9098bb258/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 flex items-center justify-center rounded-xl 
bg-white/5 backdrop-blur-sm border border-white/10 text-white 
shadow-[0_0_12px_rgba(96,165,250,0.8),0_0_24px_rgba(96,165,250,0.6)] 
hover:shadow-[0_0_20px_rgba(147,197,253,0.9),0_0_40px_rgba(147,197,253,0.7)] 
transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
              <a
                href="mailto:gaurav.murali3@gmail.com"
                className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white shadow-[0_0_8px_rgba(234,179,8,0.5)] hover:shadow-[0_0_15px_rgba(234,179,8,0.7)] transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <SkillsCarousel className="mt-8" />
          </div>
        </div>
        
        {/* Gradient fade transition to dark background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none"></div>
      </section>
    </ShaderBackground>
  );
};

export default Hero;
