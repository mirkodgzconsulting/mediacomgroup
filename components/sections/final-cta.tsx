"use client"

import { motion } from "framer-motion"

export function FinalCta() {
  return (
    <section className="pt-10 pb-32 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10 w-full flex flex-col items-center">
        
        {/* Background Glow similar to footer but subtle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none -z-10" />

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-semibold text-white leading-[1.1] tracking-tight mb-8">
          Ogni progetto realizzato <br className="hidden md:block" />
          <span className="text-gray-500">è un&apos;opportunità unica.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Sei pronto a fare il prossimo passo? Unisciti a noi e trasforma la tua visione in realtà con il supporto di esperti.
        </p>

        {/* Button */}
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-[#ff3067] text-white font-bold text-sm md:text-base flex items-center gap-2 shadow-[0_0_30px_rgba(255,48,103,0.4)] hover:shadow-[0_0_50px_rgba(255,48,103,0.6)] transition-all duration-300"
          >
            Fissa una call 20 min
        </motion.button>

      </div>
    </section>
  )
}
