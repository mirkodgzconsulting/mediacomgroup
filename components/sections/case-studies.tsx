"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const cases = [
  {
    company: "ZVENIA Platform",
    description: "E-commerce e community privata per ingegneri minerari con abbonamenti.",
    tags: ["WEB DEVELOPMENT", "E-COMMERCE"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    id: "CS_01"
  },
  {
    company: "CREACOS SRL",
    description: "Strategia di marketing 360°, dalla fase iniziale al successo attuale.",
    tags: ["SITO WEB", "STRATEGIA"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    id: "CS_02"
  },
  {
    company: "NOVOTEL",
    description: "Strategia Marketing 360° per la catena ospitalità leader.",
    tags: ["MARKETING 360"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    badge: "PARTNER",
    id: "CS_03"
  },
  {
    company: "GENESIS Luxury",
    description: "Rebranding completo e posizionamento per servizi esclusivi.",
    tags: ["BRANDING", "UX/UI"],
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    id: "CS_04"
  },
    {
    company: "LUMINARY",
    description: "Piattaforma formazione per creatori digitali con AI.",
    tags: ["AI INTEGRATION", "LMS"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    id: "CS_05"
  }
]

export function CaseStudies() {
  return (
    <section id="casi-studio" className="py-32 overflow-hidden relative">
      
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
              {[...cases, ...cases].map((item, i) => (
                <div
                  key={i}
                  className="group relative w-[350px] md:w-[400px] h-[500px] md:h-[580px] shrink-0 rounded-[32px] overflow-hidden cursor-pointer"
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
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {/* Badge / Tags Row */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.badge && (
                           <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-[10px] font-bold text-purple-300 uppercase tracking-wider backdrop-blur-md">
                             {item.badge}
                           </span>
                        )}
                        {item.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold text-gray-300 uppercase tracking-wider backdrop-blur-md transition-colors group-hover:bg-white/20 group-hover:text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-end mb-3">
                        <h3 className="text-3xl font-bold text-white tracking-tight leading-none">
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
