"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const tags = [
  "Marketing",
  "Organizzazione di Eventi",
  "Social Media",
  "Branding",
  "Pubblicità",
  "SEO",
  "Siti web",
  "Crescita Aziendale",
  "Consulenza",
  "Strategia Digitale"
]

export function IdeaToStrategy() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#0d0d10] border border-white/10 rounded-full px-4 py-1.5 mb-8 shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)]"
          >
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
             </span>
             <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Marketing & Comunicazione a 360</span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-semibold text-white leading-[1.1] tracking-tight mb-16">
            <motion.span 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="block text-white"
            >
              Dall&apos;idea alla strategia
            </motion.span>
            <motion.span 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
               className="block text-transparent bg-clip-text bg-linear-to-b from-gray-400 to-gray-700"
            >
              Dalla creatività all&apos;azione
            </motion.span>
          </h2>

          {/* Tags Grid - Staggered Entry */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 min-h-[150px]">
            {tags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.05, 
                  type: "spring", 
                  stiffness: 100 
                }}
                whileHover={{ scale: 1.05, y: -3, zIndex: 10 }}
                className="group relative cursor-pointer"
              >
                <div className="px-6 py-3 rounded-2xl bg-[#0d0d10] border border-white/10 text-gray-400 font-medium text-sm md:text-base transition-all duration-300 group-hover:border-white group-hover:text-white group-hover:bg-white/5 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  {tag}
                </div>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.a
                href="#contatti"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: tags.length * 0.05, 
                  type: "spring", 
                  stiffness: 100 
                }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2.5 rounded-2xl bg-white border border-white text-black font-medium text-sm md:text-base flex items-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer hover:bg-gray-200"
            >
              Contattaci
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

        </div>

        {/* Decorative Background Shape */}
        <div className="absolute right-0 bottom-0 w-[40%] h-[80%] bg-linear-to-tl from-[#1a1a1a] to-transparent opacity-50 rounded-tl-[100px] -z-10 pointer-events-none blur-3xl" />
        
        {/* Subtle Scanline Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)] pointer-events-none opacity-50" />

      </div>
    </section>
  )
}
