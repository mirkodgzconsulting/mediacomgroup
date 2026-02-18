"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  "/1.avif",
  "/2.avif",
  "/3.avif"
]

export function TailoredStrategies() {
  return (
    <section id="casi-studio" className="pt-20 md:pt-32 pb-0 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-semibold text-white leading-[1.1] tracking-tight mb-8">
            Strategie su misura, <br />
            <span className="text-gray-500">Risultati concreti</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Ogni progetto che realizziamo è un&apos;opportunità per trasformare idee in successi misurabili. Scopri come abbiamo aiutato aziende a crescere attraverso strategie di marketing, comunicazione e soluzioni digitali personalizzate.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-[#ff3067] text-white font-bold text-sm md:text-base flex items-center gap-2 mx-auto shadow-[0_0_30px_rgba(255,48,103,0.4)] hover:shadow-[0_0_50px_rgba(255,48,103,0.6)] transition-all duration-300"
          >
            Esplora i casi studio
          </motion.button>
        </div>

        {/* Stacked Images */}
        <div className="relative max-w-[90%] lg:max-w-[85%] mx-auto flex flex-col gap-10 lg:gap-32 pb-10">
          {images.map((src, i) => (
            <Card key={i} src={src} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

function Card({ src, index }: { src: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-32 w-full h-[70vh] md:h-[90vh] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl bg-[#050505]"
      style={{ 
        zIndex: index + 1,
        // Optional: Scale effect on scroll could be added here if we had a ref to the container
      }}
    >
        <Image 
          src={src} 
          alt={`Strategy ${index + 1}`} 
          fill 
          className="object-cover"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60" />
    </motion.div>
  )
}
