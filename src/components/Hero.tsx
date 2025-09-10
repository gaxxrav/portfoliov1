import { GradientButton } from '@/components/ui/gradient-button'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'
import { SkillsCarousel } from '@/components/ui/skills-carousel'
import ShaderBackground from '@/components/ui/shader-background'
import { Download, Github, Linkedin, Mail, Heart, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <ShaderBackground className="min-h-screen bg-retro-black">
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-retro-black text-white">
        {/* CRT Screen Effect */}
        <div className="crt absolute inset-0 pointer-events-none"></div>
        
        {/* Pixel border effect */}
        <div className="absolute inset-0 border-4 border-retro-yellow m-2 pointer-events-none"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-retro-red text-white text-sm font-press-start mb-4">
                PLAYER 1 - READY
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-press-start">
              <span className="block text-retro-yellow mb-2">HEYA! I'M</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r 
                from-retro-red via-retro-yellow to-retro-cyan
                animate-glow">
                GAURAV
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-retro-cyan mb-8 max-w-3xl mx-auto font-orbitron tracking-wider">
              <span className="text-retro-yellow"></span><span className="text-retro-red"></span>
            </p>
            
            <div className="health-bar flex justify-center mb-8">
              <div className="w-full max-w-md h-6 bg-retro-dark border-2 border-retro-yellow p-1">
                <div className="h-full bg-gradient-to-r from-health-red via-health-yellow to-retro-green w-full flex items-center justify-end pr-2">
                  <span className="text-xs font-press-start text-retro-black">100%</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                className="pixel-button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="inline-block mr-2 h-4 w-4" />
                CHALLENGE ME
              </button>
              
              <a 
                href="/resume.pdf" 
                className="pixel-button bg-retro-blue hover:bg-retro-cyan"
                download
              >
                <Download className="inline-block mr-2 h-4 w-4" />
                DOWNLOAD CV
              </a>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/gaxxrav" target="_blank" rel="noopener noreferrer" 
                 className="text-retro-pink hover:text-retro-cyan transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/gaurav-murali-9098bb258/" target="_blank" rel="noopener noreferrer"
                 className="text-retro-pink hover:text-retro-cyan transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:gaurav.murali3@gmail.com" className="text-retro-pink hover:text-retro-cyan transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Pixel art decoration */}
        <div className="absolute bottom-8 left-8 w-16 h-16 border-4 border-retro-yellow flex items-center justify-center">
          <span className="font-press-start text-xs">1UP</span>
        </div>
        
        <div className="absolute bottom-8 right-8 text-retro-yellow font-press-start text-xs">
          2025 GAX
        </div>
      </section>
    </ShaderBackground>
  )
}

export default Hero
