import { GradientButton } from '@/components/ui/gradient-button'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'
import { SkillsCarousel } from '@/components/ui/skills-carousel'
import ShaderBackground from '@/components/ui/shader-background'
import { Download, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <ShaderBackground className="min-h-screen">
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-white">Heya! I'm</span>
              <span className="block text-transparent bg-gradient-to-r 
                from-yellow-500 via-red-100 to-indigo-800
                bg-clip-text">
                Gaurav Murali
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            I'm a passionate problem-solver with an eye for design, driven to build meaningful projects that inspire me and benefit others.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <GradientButton 
                asChild
                className="min-w-[200px]"
              >
                <a 
                  href="https://drive.google.com/file/d/1PCQyOcwyLfOz7EIO4UgCaS24G9V7_QT4/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </GradientButton>
            </div>

            <div className="flex justify-center space-x-4 mb-16">
              <MovingBorderButton
                as="a"
                href="https://github.com/gaxxrav"
                target="_blank"
                rel="noopener noreferrer"
                borderRadius="1rem"
                containerClassName="h-12 w-12"
                className="bg-white/10 backdrop-blur-sm text-white border-white/20"
                borderClassName="h-16 w-16 opacity-[0.8] bg-[radial-gradient(var(--green-500)_40%,transparent_60%)]"
                duration={2000}
              >
                <Github className="h-5 w-5" />
              </MovingBorderButton>
              
              <MovingBorderButton
                as="a"
                href="https://www.linkedin.com/in/gaurav-murali-9098bb258/"
                target="_blank"
                rel="noopener noreferrer"
                borderRadius="1rem"
                containerClassName="h-12 w-12"
                className="bg-white/10 backdrop-blur-sm text-white border-white/20"
                borderClassName="h-16 w-16 opacity-[0.8] bg-[radial-gradient(var(--blue-500)_40%,transparent_60%)]"
                duration={2500}
              >
                <Linkedin className="h-5 w-5" />
              </MovingBorderButton>
              
              <MovingBorderButton
                as="a"
                href="mailto:gaurav.murali3@gmail.com"
                borderRadius="1rem"
                containerClassName="h-12 w-12"
                className="bg-white/10 backdrop-blur-sm text-white border-white/20"
                borderClassName="h-16 w-16 opacity-[0.8] bg-[radial-gradient(var(--red-500)_40%,transparent_60%)]"
                duration={3000}
              >
                <Mail className="h-5 w-5" />
              </MovingBorderButton>
            </div>

            <SkillsCarousel className="mt-8" />
          </div>
        </div>
        
        {/* Gradient fade transition to dark background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none"></div>
      </section>
    </ShaderBackground>
  )
}

export default Hero
