"use client"

import { motion } from "framer-motion"

const logos = [
  // Ria
  { name: "Ria", component: (
    <svg viewBox="0 0 100 30" fill="currentColor" className="w-full h-full">
      <path d="M10,5 L10,25 L15,25 L15,18 L20,25 L26,25 L20,17 C23,16 25,14 25,11 C25,7 22,5 18,5 L10,5 Z M15,9 L18,9 C20,9 21,10 21,11 C21,12 20,13 18,13 L15,13 L15,9 Z M30,5 L35,5 L35,25 L30,25 Z M45,25 L43,19 L57,19 L55,25 L61,25 L50,5 L40,25 Z M50,9 L55,15 L45,15 Z" /> 
      <circle cx="85" cy="15" r="8" opacity="0.8" />
    </svg>
  )},
  // KLM
  { name: "KLM", component: (
    <svg viewBox="0 0 100 30" fill="currentColor" className="w-full h-full">
      <path d="M10,5 L16,5 L16,13 L24,5 L32,5 L22,15 L32,25 L24,25 L16,17 L16,25 L10,25 Z M40,5 L46,5 L46,20 L60,20 L60,25 L40,25 Z M70,5 L79,5 L82,20 L85,5 L94,5 L94,25 L88,25 L88,10 L85,25 L79,25 L76,10 L76,25 L70,25 Z" />
      <path d="M50,2 L52,0 L54,2 L52,4 Z M48,7 L56,7 L52,11 Z" opacity="0.7" />
    </svg>
  )},
  // Novotel
  { name: "Novotel", component: (
    <svg viewBox="0 0 100 30" fill="currentColor" className="w-full h-full">
         <path d="M10,5 L15,5 L25,20 L25,5 L30,5 L30,25 L25,25 L15,10 L15,25 L10,25 Z M40,15 C40,9 44,5 50,5 C56,5 60,9 60,15 C60,21 56,25 50,25 C44,25 40,21 40,15 Z M45,15 C45,18 47,21 50,21 C53,21 55,18 55,15 C55,12 53,9 50,9 C47,9 45,12 45,15 Z M70,5 L76,5 L82,25 L76,25 L75,20 L67,20 L66,25 L60,25 Z M71,9 L68,16 L74,16 Z" />
         <path d="M70,2 Q80,0 90,2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
    </svg>
  )},
  // Samsung
  { name: "Samsung", component: (
    <svg viewBox="0 0 100 30" fill="currentColor" className="w-full h-full">
       <ellipse cx="50" cy="15" rx="48" ry="14" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-15 50 15)" opacity="0.5" />
       <path d="M20,10 C18,10 16,12 16,14 C16,16 18,17 22,18 C26,19 28,21 28,24 C28,28 24,29 20,29 C15,29 12,27 12,25 M35,29 L39,10 L44,29 M50,10 L55,29 L59,10 L63,29 M70,10 C72,10 74,12 74,14 C74,16 72,17 68,18 C64,19 62,21 62,24 C62,28 66,29 70,29" stroke="none" />
    </svg>
  )},
  // Accenture
  { name: "Accenture", component: (
    <svg viewBox="0 0 100 30" fill="currentColor" className="w-full h-full">
      <path d="M15,20 L20,10 L25,20 M18,18 L22,18 M30,15 C30,12 32,10 35,10 C37,10 39,11 40,12 M45,15 C45,12 47,10 50,10 C52,10 54,11 55,12 M60,15 C60,18 62,20 65,20 M70,10 L75,20 L80,10 M85,10 L90,10 M90,10 L90,20" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M10,12 L15,12 L12,16 Z" fill="currentColor" />
    </svg>
  )},
]

export function LogoTicker() {
  return (
    <section className="py-8 bg-black/20 backdrop-blur-sm border-t border-white/5 overflow-hidden relative">
      
      {/* Vignette Effects */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-background to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-background to-transparent z-20"></div>

      <div className="container mx-auto px-6">
        <div className="flex overflow-hidden relative">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop" 
            }}
            className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32 whitespace-nowrap"
            style={{ width: "max-content" }}
          >
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => ( // Quadruple specifically for seamless loop with fewer items
               <div 
                 key={i} 
                 className="relative w-32 h-12 text-gray-400 hover:text-white transition-all duration-500 opacity-80 hover:opacity-100 flex items-center justify-center cursor-pointer group"
               >
                 {logo.component}
               </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
