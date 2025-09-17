import { FeaturedProjects } from '@/components/ui/featured-projects'

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-4">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Featured Projects</h2>
        </div>

        {/* Featured Projects with Hover Effect */}
        <div className="w-full">
          <FeaturedProjects />
        </div>
      </div>
    </section>
  )
}

export default Projects
