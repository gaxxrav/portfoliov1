import { useState } from 'react'
import { GlowCard } from '@/components/ui/spotlight-card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        "Python",
        "JavaScript",
        "C++",
        "HTML5",
        "CSS",
        "SASS",
        "GDScript",
        "SQL",
        "Bash"
      ]
    },
    {
      title: "Backend & Architecture",
      skills: [
        "RESTful API Design",
        "REST APIs",
        "Server-side Architecture",
        "Django",
        "Django REST Framework",
        "Node.js",
        "JWT",
        "OAuth"
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        "React.js",
        "React Native",
        "Django Framework",
        "TensorFlow",
        "Scikit-learn",
        "OpenCV",
        "Bootstrap",
        "Material UI"
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "SQLite",
        "Redis",
        "AWS",
        "GCP",
        "Firebase"
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        "GitHub",
        "Docker",
        "Postman",
        "Swagger",
        "Mailtrap",
        "Auth0",
        "Stripe",
        "Twilio", 
        "Vercel"
      ]
    },
    {
      title: "APIs & Integrations",
      skills: [
        "Google APIs",
      ]
    },
    {
      title: "AI/ML",
      skills: [
        "Machine Learning",
        "Artificial Intelligence (AI)",
      ]
    },
    {
      title: "Hardware & Embedded",
      skills: [
        "Microcontrollers",
        "Arduino",
        "Embedded Systems"
      ]
    },
    {
      title: "Design & Game Dev",
      skills: [
        "Blender",
        "Godot Game Engine"
      ]
    }
  ]

  const additionalSkills = [
    "SASS", "MediaPipe", "Tesseract.js", "Wagtail CMS", "Godot Game Engine", 
    "SQLite", "DjangoDB", "Twilio", "Google Maps API", "Stripe", 
    "Mailtrap", "Redis", "Auth0", "Machine Learning", "AI", 
    "IoT", "Azure ML", "Microcontrollers", "Arduino", "Cybersecurity", 
    "Embedded Systems", "Blender"
  ]

  // Filter skills based on search term
  const filteredCategories = skillCategories.map(category => ({
    ...category,
    skills: category.skills.filter(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.skills.length > 0)

  const filteredAdditionalSkills = additionalSkills.filter(skill => 
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const hasResults = filteredCategories.length > 0 || filteredAdditionalSkills.length > 0

  return (
    <section id="skills" className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Technical Skills</h2>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-4"></div> */}
          <p className="text-gray-300 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
            A comprehensive overview of my technical expertise across various domains.
          </p>
          
          {/* Search Input */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50 border-border/30 focus:border-primary/50 placeholder-gray-100"
              />
            </div>
          </div>
        </div>

        {!hasResults && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No skills found matching "{searchTerm}"</p>
          </div>
        )}

        {hasResults && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => {
              const glowColors: Array<'blue' | 'purple' | 'green' | 'red' | 'orange'> = ['blue', 'purple', 'green', 'red', 'orange'];
              const glowColor = glowColors[index % glowColors.length];
              
              return (
                <GlowCard 
                  key={index} 
                  glowColor={glowColor}
                  customSize={true}
                  className="w-full h-auto min-h-[150] bg-background/40 backdrop-blur-md border-border/20 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1.5 bg-accent/10 hover:bg-accent/20 rounded-full text-sm font-medium transition-colors duration-200 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        )}

        {/* Additional Skills Tags - Only show when searching and results found */}
        {hasResults && filteredAdditionalSkills.length > 0 && searchTerm && (
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {filteredAdditionalSkills.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-card border border-border/20 rounded-full text-sm hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
