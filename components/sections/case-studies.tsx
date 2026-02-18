"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const cases = [
  {
    company: "ZVENIA Platform",
    description: "E-commerce e community privata per ingegneri minerari con abbonamenti.",
    tags: ["WEB DEVELOPMENT", "E-COMMERCE"],
    image: "/zvenia.avif",
    id: "CS_01"
  },
  {
    company: "CREACOS SRL",
    description: "Strategia di marketing 360°, dalla fase iniziale al successo attuale.",
    tags: ["SITO WEB", "STRATEGIA"],
    image: "/creacos.avif",
    id: "CS_02"
  },
  {
    company: "NOVOTEL",
    description: "Strategia Marketing 360° per la catena ospitalità leader.",
    tags: ["MARKETING 360"],
    image: "/novotel.avif",
    badge: "PARTNER",
    id: "CS_03"
  }
]

export function CaseStudies() {
  return (
    <section id="casi-studio" className="py-20 md:py-32 overflow-hidden relative">
      
      {/* Background Tech Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-linear-to-l from-transparent via-cyan-500/50 to-transparent" />


      
      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-black to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-hidden">
            <motion.div 
              className="flex gap-8 px-4 flex-none"
              animate={{ x: "-50%" }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop" 
              }}
            >
              {/* Double array for seamless loop */}
              {[...cases, ...cases, ...cases, ...cases].map((item, i) => (
                <div
                  key={i}
                  className="group relative w-[280px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[400px] md:h-[480px] shrink-0 rounded-[24px] md:rounded-[32px] overflow-hidden cursor-pointer"
                >
                  {/* Full Background Image */}
                  <Image 
                    src={item.image} 
                    alt={item.company}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  
                  {/* Modern Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {/* Badge / Tags Row */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.badge && (
                           <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-[9px] md:text-[10px] font-bold text-purple-300 uppercase tracking-wider backdrop-blur-md">
                             {item.badge}
                           </span>
                        )}
                        {item.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-white/10 border border-white/10 text-[9px] md:text-[10px] font-bold text-gray-300 uppercase tracking-wider backdrop-blur-md transition-colors group-hover:bg-white/20 group-hover:text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-end mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none">
                          {item.company}
                        </h3>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 backdrop-blur-md border border-white/10">
                           <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
        </div>
      </div>
    </section>
  )
}
