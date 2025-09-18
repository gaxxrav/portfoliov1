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
              <span 
                className="relative inline-block"
                style={{
                  fontFamily: '"Haarlem Deco", cursive',
                  fontSize: '3.2rem',
                  fontWeight: 'bold',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
                }}
              >
                {/* Base glass layer */}
                <span 
                  className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-white/10 backdrop-blur-sm rounded-lg"
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15))',
                  }}
                >
                  Gaurav
                </span>
                
                {/* Main reflection */}
                <span 
                  className="relative"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.3) 60%, rgba(255, 255, 255, 0.1) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Gaurav
                </span>
                
                {/* Edge highlight */}
                <span 
                  className="absolute inset-0 opacity-70"
                  style={{
                    background: 'linear-gradient(145deg, transparent 0%, rgba(255, 255, 255, 0.15) 30%, transparent 70%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'blur(0.5px)',
                  }}
                >
                  Gaurav
                </span>
              </span>
            </h1>
            
            <p className="text-4xl md:text-6xl text-gray-300 mb-6 leading-tight text-left max-w-4xl font-bold">
              I'm a passionate problem-solver with an eye for design, driven to build meaningful projects that inspire me and benefit others.
            </p>

            <div className="mb-12 flex items-center space-x-6">
              <LiquidButton 
                href="https://drive.google.com/file/d/1PCQyOcwyLfOz7EIO4UgCaS24G9V7_QT4/view?usp=sharing"
                className="text-white/90 flex-shrink-0 bg-black/20 hover:bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300 border border-transparent hover:border-white/50 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.5),0_0_15px_2px_rgba(255,255,255,0.3)]"
                style={{ 
                  fontFamily: '"Long Summer", cursive',
                }}
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
