import FluidNav from '@/components/ui/FluidNav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import OceanDepthWrapper from '@/components/ui/ocean-depth-wrapper'

const Index = () => {
  return (
    <OceanDepthWrapper className="min-h-screen text-foreground">
      <FluidNav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
    </OceanDepthWrapper>
  )
}

export default Index
