"use client"

import { ReactNode } from 'react'

interface AquariumContainerProps {
  children: ReactNode
  className?: string
}

export default function AquariumContainer({ children, className = "" }: AquariumContainerProps) {
  return (
    <div className={`aquarium-wrapper ${className}`}>
      <div className="aquarium-container">
        {/* Main glass cuboid */}
        <div className="aquarium-cuboid">
          {/* Front face */}
          <div className="aquarium-face aquarium-front">
            {children}
          </div>
          
          {/* Top face */}
          <div className="aquarium-face aquarium-top"></div>
          
          {/* Right face */}
          <div className="aquarium-face aquarium-right"></div>
          
          {/* Bottom face */}
          <div className="aquarium-face aquarium-bottom"></div>
          
          {/* Left face */}
          <div className="aquarium-face aquarium-left"></div>
          
          {/* Back face */}
          <div className="aquarium-face aquarium-back"></div>
        </div>
        
        {/* Light refraction effects */}
        <div className="aquarium-reflections">
          <div className="reflection reflection-1"></div>
          <div className="reflection reflection-2"></div>
          <div className="reflection reflection-3"></div>
        </div>
        
        {/* Caustic light patterns */}
        <div className="aquarium-caustics">
          <div className="caustic caustic-1"></div>
          <div className="caustic caustic-2"></div>
        </div>
      </div>

      <style jsx>{`
        .aquarium-wrapper {
          perspective: 1000px;
          perspective-origin: center center;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 350px;
        }

        .aquarium-container {
          position: relative;
          transform-style: preserve-3d;
          animation: aquariumFloat 8s ease-in-out infinite,
                     aquariumTilt 12s ease-in-out infinite,
                     aquariumBob 6s ease-in-out infinite;
        }

        .aquarium-cuboid {
          position: relative;
          width: 400px;
          height: 300px;
          transform-style: preserve-3d;
          transform: rotateX(-10deg) rotateY(15deg);
        }

        .aquarium-face {
          position: absolute;
          border: 2px solid rgba(74, 222, 128, 0.3);
          background: rgba(6, 182, 212, 0.08);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .aquarium-front {
          width: 400px;
          height: 300px;
          transform: translateZ(50px);
          border-radius: 8px;
          box-shadow: 
            inset 0 0 20px rgba(74, 222, 128, 0.1),
            0 0 30px rgba(6, 182, 212, 0.2),
            0 0 60px rgba(6, 182, 212, 0.1);
        }

        .aquarium-back {
          width: 400px;
          height: 300px;
          transform: translateZ(-50px) rotateY(180deg);
          background: rgba(6, 182, 212, 0.05);
          border-radius: 8px;
        }

        .aquarium-top {
          width: 400px;
          height: 100px;
          transform: rotateX(90deg) translateZ(150px);
          background: linear-gradient(45deg, 
            rgba(74, 222, 128, 0.1), 
            rgba(6, 182, 212, 0.05));
          border-radius: 8px 8px 0 0;
        }

        .aquarium-bottom {
          width: 400px;
          height: 100px;
          transform: rotateX(-90deg) translateZ(150px);
          background: linear-gradient(45deg, 
            rgba(6, 182, 212, 0.08), 
            rgba(74, 222, 128, 0.05));
          border-radius: 0 0 8px 8px;
        }

        .aquarium-left {
          width: 100px;
          height: 300px;
          transform: rotateY(-90deg) translateZ(0px);
          background: linear-gradient(135deg, 
            rgba(74, 222, 128, 0.06), 
            rgba(6, 182, 212, 0.03));
          border-radius: 8px 0 0 8px;
        }

        .aquarium-right {
          width: 100px;
          height: 300px;
          transform: rotateY(90deg) translateZ(400px);
          background: linear-gradient(45deg, 
            rgba(6, 182, 212, 0.06), 
            rgba(74, 222, 128, 0.03));
          border-radius: 0 8px 8px 0;
        }

        .aquarium-reflections {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          transform-style: preserve-3d;
        }

        .reflection {
          position: absolute;
          background: linear-gradient(45deg, 
            rgba(255, 255, 255, 0.4), 
            transparent 70%);
          border-radius: 50%;
          animation: reflectionShimmer 4s ease-in-out infinite;
        }

        .reflection-1 {
          width: 60px;
          height: 120px;
          top: 20px;
          left: 30px;
          transform: translateZ(51px) rotate(-15deg);
          animation-delay: 0s;
        }

        .reflection-2 {
          width: 40px;
          height: 80px;
          top: 180px;
          right: 40px;
          transform: translateZ(51px) rotate(25deg);
          animation-delay: 1.5s;
        }

        .reflection-3 {
          width: 30px;
          height: 60px;
          top: 100px;
          left: 350px;
          transform: translateZ(51px) rotate(-30deg);
          animation-delay: 3s;
        }

        .aquarium-caustics {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          transform-style: preserve-3d;
        }

        .caustic {
          position: absolute;
          background: radial-gradient(ellipse, 
            rgba(74, 222, 128, 0.2) 0%, 
            rgba(6, 182, 212, 0.1) 40%, 
            transparent 70%);
          border-radius: 50%;
          animation: causticWave 6s ease-in-out infinite;
        }

        .caustic-1 {
          width: 80px;
          height: 40px;
          top: 50px;
          left: 100px;
          transform: translateZ(52px);
          animation-delay: 0s;
        }

        .caustic-2 {
          width: 60px;
          height: 30px;
          bottom: 80px;
          right: 120px;
          transform: translateZ(52px);
          animation-delay: 3s;
        }

        @keyframes aquariumFloat {
          0%, 100% { transform: translateY(0px) rotateX(-10deg) rotateY(15deg); }
          25% { transform: translateY(-25px) rotateX(-18deg) rotateY(25deg); }
          50% { transform: translateY(-15px) rotateX(-5deg) rotateY(8deg); }
          75% { transform: translateY(-35px) rotateX(-22deg) rotateY(30deg); }
        }

        @keyframes aquariumTilt {
          0%, 100% { transform: rotateZ(0deg); }
          33% { transform: rotateZ(4deg); }
          66% { transform: rotateZ(-3deg); }
        }

        @keyframes aquariumBob {
          0%, 100% { transform: translateX(0px); }
          25% { transform: translateX(15px); }
          50% { transform: translateX(-10px); }
          75% { transform: translateX(12px); }
        }

        @keyframes reflectionShimmer {
          0%, 100% { opacity: 0.3; transform: translateZ(51px) scale(1); }
          50% { opacity: 0.6; transform: translateZ(51px) scale(1.1); }
        }

        @keyframes causticWave {
          0%, 100% { 
            opacity: 0.2; 
            transform: translateZ(52px) scale(1) rotate(0deg); 
          }
          33% { 
            opacity: 0.4; 
            transform: translateZ(52px) scale(1.2) rotate(5deg); 
          }
          66% { 
            opacity: 0.3; 
            transform: translateZ(52px) scale(0.9) rotate(-3deg); 
          }
        }

        /* Ensure the canvas inside maintains its functionality */
        .aquarium-front canvas {
          border: none !important;
          background: transparent !important;
          border-radius: 6px;
        }
      `}</style>
    </div>
  )
}
