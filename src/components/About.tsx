import { HandWrittenTitle } from '@/components/ui/hand-writing-text'

const About = () => {
  return (
    <section id="about" className="py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <h5 className="text-3xl md:text-4xl font-bold mb-6 text-white">diving deeper...</h5>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60"></div> */}
        </div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="animate-slide-in">
            {/* <h3 className="text-2xl font-semibold mb-6 text-center">Passionate Developer & Problem Solver</h3> */}
            <p className="text-4xl md:text-6xl text-gray-300 mb-6 leading-tight text-left max-w-4xl font-bold">
              I thrive in collaborative environments where I can contribute to meaningful projects.
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
