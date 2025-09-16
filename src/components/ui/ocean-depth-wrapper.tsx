"use client"
import { useEffect, useRef, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

interface OceanDepthWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function OceanDepthWrapper({ children, className = "" }: OceanDepthWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollDepth, setScrollDepth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      
      // Calculate scroll depth as a percentage (0 to 1)
      const depth = Math.min(scrollTop / documentHeight, 1)
      setScrollDepth(depth)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate overlay opacity based on scroll depth
  // Surface: 0% opacity, Deep ocean: 80% opacity
  const overlayOpacity = Math.min(scrollDepth * 0.8, 0.8)
  
  return (
    <div ref={containerRef} className={`relative min-h-screen ${className}`}>
      {/* Fixed Ocean Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        {/* SVG Filters */}
        <svg className="absolute inset-0 w-0 h-0">
          <defs>
            <filter id="ocean-glass-effect" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0.02
                        0 1 0 0 0.02
                        0 0 1 0 0.05
                        0 0 0 0.9 0"
                result="tint"
              />
            </filter>
          </defs>
        </svg>

        {/* Primary Mesh Gradient - Ocean Base */}
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={["#141313", "#06b6d4", "#0891b2", "#164e63", "#f97316"]}
          speed={0.3}
          backgroundColor="#141313"
        />
        
        {/* Secondary Wireframe Overlay */}
        <MeshGradient
          className="absolute inset-0 w-full h-full opacity-40"
          colors={["#141313", "#ffffff", "#06b6d4", "#f97316"]}
          speed={0.2}
          wireframe="true"
          backgroundColor="transparent"
        />

        {/* Progressive Depth Overlay */}
        <div 
          className="absolute inset-0 w-full h-full bg-slate-900 transition-opacity duration-300 ease-out"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
