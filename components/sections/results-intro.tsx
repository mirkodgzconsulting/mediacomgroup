"use client"

import { motion } from "framer-motion"

export function ResultsIntro() {
  const words1 = "Risultati Concreti Che".split(" ")
  const words2 = "Spingono il Tuo Successo".split(" ")

  return (
    <section className="relative py-40 bg-transparent overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Architectural Brackets (The "Frame") */}
      <div className="absolute inset-0 pointer-events-none max-w-6xl mx-auto h-[80%] top-[10%]">
         {/* Top Left */}
         <motion.div 
           initial={{ width: 0, height: 0 }}
           whileInView={{ width: 100, height: 100 }}
           transition={{ duration: 1, ease: "circOut" }}
           viewport={{ once: true }}
           className="absolute top-0 left-0 border-t-2 border-l-2 border-white/20 rounded-tl-3xl"
         />
         {/* Top Right */}
         <motion.div 
           initial={{ width: 0, height: 0 }}
           whileInView={{ width: 100, height: 100 }}
           transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
           viewport={{ once: true }}
           className="absolute top-0 right-0 border-t-2 border-r-2 border-white/20 rounded-tr-3xl"
         />
         {/* Bottom Left */}
         <motion.div 
           initial={{ width: 0, height: 0 }}
           whileInView={{ width: 100, height: 100 }}
           transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
           viewport={{ once: true }}
           className="absolute bottom-0 left-0 border-b-2 border-l-2 border-white/20 rounded-bl-3xl"
         />
         {/* Bottom Right */}
         <motion.div 
           initial={{ width: 0, height: 0 }}
           whileInView={{ width: 100, height: 100 }}
           transition={{ duration: 1, ease: "circOut" }}
           viewport={{ once: true }}
           className="absolute bottom-0 right-0 border-b-2 border-r-2 border-white/20 rounded-br-3xl"
         />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl perspective-1000">
        
        {/* Badge - Pulse */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 bg-[#0d0d10] border border-white/10 rounded-full px-4 py-1.5 mb-12 shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)]"
        >
          <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Casi Studio</span>
        </motion.div>

        {/* Headline - 3D Word Flip */}
        <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-semibold text-white leading-[1.1] tracking-tight mb-10 perspective-1000 group">
          <div className="flex flex-wrap justify-center gap-x-4 mb-2">
            {words1.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, rotateX: 90, y: 20 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                className="inline-block transform-style-3d text-white"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-4">
             {words2.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, rotateX: 90, y: 20 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + (i * 0.1), ease: [0.215, 0.61, 0.355, 1] }}
                className="inline-block transform-style-3d text-transparent bg-clip-text bg-linear-to-b from-gray-200 to-gray-600"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h2>

        {/* Description - Fade Up */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-14 border-l-2 border-blue-500/20 pl-6"
        >
          Al centro di tutto ciò che facciamo c&apos;è un impegno costante nel fornire
          risultati misurabili che fanno crescere il tuo business.
        </motion.p>

        {/* Button - Cyber Scanner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
           <button className="relative overflow-hidden px-10 py-5 bg-[#ff3067] text-white font-bold text-sm rounded-lg shadow-2xl group transition-all hover:scale-105">
             <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] w-full h-full skew-x-12" />
             <span className="relative flex items-center gap-2">
               FISSA UNA CALL 20 MIN
               <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
             </span>
           </button>
        </motion.div>

      </div>
    </section>
  )
}
