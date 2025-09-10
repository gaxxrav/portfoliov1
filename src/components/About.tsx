import { HandWrittenTitle } from '@/components/ui/hand-writing-text'

const About = () => {
  return (
    <section id="about" className="py-12 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="animate-slide-in">
            {/* <h3 className="text-2xl font-semibold mb-6 text-center">Passionate Developer & Problem Solver</h3> */}
            <p className="text-gray-300 mb-6 leading-relaxed text-center max-w-4xl mx-auto">
              I thrive in collaborative environments where I can contribute to meaningful projects 
              while continuously learning and growing. I'm at my best when I work...
            </p>
          </div>

          <HandWrittenTitle 
            title="HANDS ON" 
            subtitle="and with a sense of DIRECTION
            (like this lovely guy that follows your cursor!)" 
          />
        </div>
      </div>
    </section>
  )
}

export default About
