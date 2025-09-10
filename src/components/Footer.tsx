import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">My Links</span>
              <span className="text-accent"></span>
            </div>
            {/* <p className="text-muted-foreground text-sm">
              Building digital experiences with passion and precision.
            </p> */}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <MovingBorderButton
              as="a"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              borderRadius="1rem"
              containerClassName="h-12 w-12"
              className="bg-slate-900/80 text-foreground border-border/50"
              borderClassName="h-16 w-16 opacity-[0.8] bg-[radial-gradient(var(--green-500)_40%,transparent_60%)]"
              duration={2000}
            >
              <Github className="h-5 w-5" />
            </MovingBorderButton>
            
            <MovingBorderButton
              as="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              borderRadius="1rem"
              containerClassName="h-12 w-12"
              className="bg-slate-900/80 text-foreground border-border/50"
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
              className="bg-slate-900/80 text-foreground border-border/50"
              borderClassName="h-16 w-16 opacity-[0.8] bg-[radial-gradient(var(--red-500)_40%,transparent_60%)]"
              duration={3000}
            >
              <Mail className="h-5 w-5" />
            </MovingBorderButton>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end">
              {currentYear} Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Gaurav Murali
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
