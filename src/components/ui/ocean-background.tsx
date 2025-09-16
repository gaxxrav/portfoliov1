"use client"
import { useEffect, useRef, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

interface OceanBackgroundProps {
  className?: string
  children?: React.ReactNode
  depth?: 'surface' | 'shallow' | 'medium' | 'deep'
}

export default function OceanBackground({ 
  className = "", 
  children, 
  depth = 'surface' 
}: OceanBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  // Define depth-based overlay opacity and colors
  const depthConfig = {
    surface: {
      overlayOpacity: 'opacity-0',
      overlayColor: 'bg-slate-900/0',
      meshOpacity: 'opacity-100'
    },
    shallow: {
      overlayOpacity: 'opacity-30',
      overlayColor: 'bg-slate-900/30',
      meshOpacity: 'opacity-90'
    },
    medium: {
      overlayOpacity: 'opacity-50',
      overlayColor: 'bg-slate-900/50',
      meshOpacity: 'opacity-80'
    },
    deep: {
      overlayOpacity: 'opacity-70',
      overlayColor: 'bg-slate-900/70',
      meshOpacity: 'opacity-70'
    }
  }

  const config = depthConfig[depth]

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect-bg" x="-50%" y="-50%" width="200%" height="200%">
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
      <div className={`absolute inset-0 w-full h-full ${config.meshOpacity}`}>
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
      </div>

      {/* Depth Overlay - Simulates decreasing light */}
      <div className={`absolute inset-0 w-full h-full ${config.overlayColor} ${config.overlayOpacity} transition-opacity duration-1000`} />

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
