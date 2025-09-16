import { FeaturedProjects } from '@/components/ui/featured-projects'

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Featured Projects</h2>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-4"></div> */}
          <p className="text-gray-300 mb-6 leading-relaxed text-center max-w-4xl mx-auto">
            A showcase of my recent work, demonstrating various technologies and problem-solving approaches.
          </p>
        </div>

        {/* Featured Projects with Hover Effect */}
        <FeaturedProjects />
      </div>
    </section>
  )
}

export default Projects
