import { Button as MovingBorderButton } from '@/components/ui/moving-border';
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
              {/* <span className="block text-white" style={{ fontFamily: '"Haarlem Deco", cursive', fontSize: '1.2em', letterSpacing: '0.05em' }}>HEYA! I'M</span> */}
              <span className="block text-transparent bg-gradient-to-r from-yellow-500 via-red-100 to-indigo-800 bg-clip-text" style={{ fontFamily: '"Haarlem Deco", cursive', fontSize: '1.1em' }}>
                Gaurav Murali
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl" style={{ fontFamily: '"Haarlem Deco", cursive' }}>
              I'm a passionate problem-solver with an eye for design, driven to build meaningful projects that inspire me and benefit others.
            </p>

            <div className="mb-12 flex items-center space-x-6">
              <LiquidButton 
                href="https://drive.google.com/file/d/1PCQyOcwyLfOz7EIO4UgCaS24G9V7_QT4/view?usp=sharing"
                className="text-white/90 flex-shrink-0 bg-black/20 hover:bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300"
                style={{ fontFamily: '"Long Summer", cursive' }}
              >
                Download CV
              </LiquidButton>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/gaxxrav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:opacity-100"
                >
                  <img 
                    src="/assets/logos/github.png" 
                    alt="GitHub" 
                    className="h-auto w-10 object-contain"
                  />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/gaurav-murali-9098bb258/"
                  target="_blank"
                  rel="opener noreferrer"
                  className="block transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:opacity-100"
                >
                  <img 
                    src="/assets/logos/linkedin.png" 
                    alt="LinkedIn" 
                    className="h-auto w-10 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
