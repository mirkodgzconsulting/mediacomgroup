"use client"

import { motion } from "framer-motion"

export function ActiveBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none">
      
      {/* 1. Deep Atmospheric Glow (Base) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,30,1)_0%,#000000_100%)]" />

      {/* 2. Primary Fluid Mesh - Deep Royal Blue */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] left-[10%] w-[80vw] h-[80vw] bg-blue-900 rounded-full blur-[80px] md:blur-[180px] opacity-10 mix-blend-screen transform-gpu will-change-transform"
      />

      {/* 3. Secondary Fluid Mesh - Dark Indigo (Subtle Contrast) */}
      <motion.div
        animate={{
          x: [0, -50, 100, 0],
          y: [0, 50, -100, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[90vw] h-[90vw] bg-indigo-950 rounded-full blur-[90px] md:blur-[200px] opacity-10 mix-blend-screen transform-gpu will-change-transform"
      />

      {/* 4. Drifting Nebula - Mid Blue */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 20, -20, 0],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-[#1e3a8a] rounded-full blur-[70px] md:blur-[150px] opacity-5 mix-blend-screen transform-gpu will-change-transform"
      />

      {/* 5. Minimal Grid - Very Faint */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.03)_1px,transparent_1px)] bg-size-[100px_100px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* 6. Floating "Data Dust" Particles (White/Blue Tint) */}
      {[...Array(20)].map((_, i) => (
        <Particle key={i} index={i} />
      ))}
      
      {/* 7. Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

    </div>
  )
}

function Particle({ index }: { index: number }) {
    // Deterministic random based on index
    const random = (seed: number) => {
        const x = Math.sin(index + seed) * 10000;
        return x - Math.floor(x);
    }

    const size = random(1) * 3 + 1 + "px"
    const top = random(2) * 100 + "%"
    const left = random(3) * 100 + "%"
    const duration = random(4) * 10 + 10
    const delay = random(5) * 5

    return (
        <motion.div
            className="absolute rounded-full bg-white blur-[1px]"
            style={{
                width: size,
                height: size,
                top: top,
                left: left,
                opacity: random(6) * 0.3 + 0.1
            }}
            animate={{
                y: [0, -100],
                opacity: [0, 0.5, 0]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay
            }}
        />
    )
}
