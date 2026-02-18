"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { projects } from "@/lib/projects"
import { Footer } from "@/components/layout/footer"

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen text-white selection:bg-[#ff3067]/30">
      

      
      <section className="pt-24 md:pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 md:px-12 max-w-7xl">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#0d0d10] border border-white/10 rounded-full pl-1 pr-4 py-1 mb-8 shadow-[0_0_15px_-5px_rgba(255,48,103,0.5)]"
            >
               <span className="bg-[#ff3067] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">2025</span>
               <span className="text-gray-300 text-sm font-medium">Esplora i nostri casi studio</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-semibold text-white leading-[1.1] tracking-tight mb-6"
            >
              Strategie su misura, <br />
              <span className="text-white">Risultati concreti</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              Scopri come abbiamo aiutato aziende a crescere attraverso strategie di marketing, comunicazione e soluzioni digitali personalizzate.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-32">
            {projects.map((project, index) => (
              <Link key={index} href={`/casi-studio/${project.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-4/3 rounded-3xl overflow-hidden cursor-pointer border border-white/10"
                >
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay & Content */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 md:p-8">
                    <div className="bg-[#0a0a1a]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div>
                          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                          {/* Tags could go here if needed, but keeping it clean per design screenshot */}
                      </div>
                      <div className="px-3 py-1 bg-white/10 rounded-lg border border-white/10 text-xs font-mono text-gray-300">
                          {project.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-12 md:py-20 border-t border-white/10">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="mb-8"
             >
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300 backdrop-blur-sm">
                   ✨ Candidati ora con la tua azienda
                </span>
             </motion.div>
             
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-semibold text-white mb-8 leading-tight"
             >
                Ogni progetto realizzato <br />
                <span className="text-gray-400">è un&apos;opportunità unica.</span>
             </motion.h2>

             <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-400 text-lg mb-10 max-w-xl"
             >
                Sei pronto a fare il prossimo passo? Unisciti a noi e trasforma la tua visione in realtà con il supporto di esperti.
             </motion.p>

             <Link href="/contatti">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-[#ff3067] text-white font-bold text-lg shadow-[0_0_30px_rgba(255,48,103,0.4)] hover:shadow-[0_0_50px_rgba(255,48,103,0.6)] transition-all duration-300"
                >
                  Fissa una call 20 min
                </motion.button>
             </Link>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  )
}
