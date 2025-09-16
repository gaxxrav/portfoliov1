import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/10 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20 backdrop-saturate-150' 
        : 'bg-black/5 backdrop-blur-lg backdrop-saturate-150'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl" style={{ fontFamily: '"Haarlem Deco", sans-serif' }}>
            <span className="text-primary">gaxrav</span>
            <span className="text-accent">.dev</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" style={{ fontFamily: '"Haarlem Deco", sans-serif' }}>
            <button onClick={() => scrollToSection('home')} className="text-xl text-primary hover:text-accent transition-colors tracking-wider">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-xl text-primary hover:text-accent transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-xl text-primary hover:text-accent transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-xl text-primary hover:text-accent transition-colors">Skills</button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border/20" style={{ fontFamily: '"TheTide", sans-serif' }}>
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-xl text-primary hover:text-accent transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-xl text-primary hover:text-accent transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-xl text-primary hover:text-accent transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-xl text-primary hover:text-accent transition-colors">Skills</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
