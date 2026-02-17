"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-20 overflow-hidden text-left">
      
      {/* Background Gradient - Subtle Ambient Light Right */}
      <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,rgba(30,58,138,0.4)_0,transparent_70%)] pointer-events-none opacity-60" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
        
        {/* Left Content */}
        <div className="max-w-4xl relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-lg px-3 py-2 pr-5 mb-8 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
          >
            <span className="bg-[#ff3067] text-white text-xs font-bold px-2 py-1 rounded shadow-lg shadow-pink-500/20">#7</span>
            <span className="text-gray-300 text-sm font-medium tracking-wide">Top 10 Marketing Agencies in Milan</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-semibold text-white leading-[1.1] tracking-tight mb-8 will-change-opacity"
          >
            Agenzia di Comunicazione,<br />
            Marketing e Ufficio Stampa
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base text-[#94a3b8] max-w-[500px] leading-relaxed mb-10 font-medium will-change-opacity"
          >
            Collaboriamo esclusivamente con aziende che superano il nostro processo di selezione e che dimostrano di essere pronte a crescere e dominare il mercato
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button 
              className="h-12 w-full sm:w-auto bg-gray-200 hover:bg-white text-black font-bold text-sm rounded-lg px-6 shadow-sm transition-all"
            >
              Candida la tua azienda
            </Button>
            
            <Button 
              className="h-12 w-full sm:w-auto bg-[#1e2030] hover:bg-[#2e3248] text-gray-200 hover:text-white font-bold text-sm rounded-lg px-6 border border-white/5 transition-all"
            >
              Casi Studio
            </Button>
          </motion.div>
        </div>

        {/* Right Abstract Visual */}
        <div className="relative lg:absolute lg:right-[-5%] lg:top-1/2 lg:-translate-y-1/2 w-[340px] h-[340px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mt-16 lg:mt-0 mx-auto pointer-events-none select-none">
          {/* Main Gradient Blob - Pulsing */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: 0.8
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-600/20 via-purple-600/20 to-transparent rounded-full blur-[60px]"
          />
          
          {/* Spinning Rings - Faster & More Visible */}
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-white/10 rounded-full"
          />
          <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] border border-white/5 rounded-full border-dashed"
          />

          {/* Glass Card Floating Animation - Pro Abstract Tech */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 perspective-1000"
          >
             <motion.div
               animate={{ 
                 y: [0, -15, 0], // Subtle Levitation
                 rotateX: [0, 5, 0] // 3D Breathing
               }}
               transition={{ 
                 duration: 8, 
                 repeat: Infinity, 
                 ease: "easeInOut" 
               }}
               className="w-72 h-96 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden"
             >
                 {/* Holographic Scanner Beam */}
                 <motion.div 
                   animate={{ top: ["-20%", "120%"] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                   className="absolute left-0 w-full h-24 bg-linear-to-b from-transparent via-white/5 to-transparent -skew-y-12 pointer-events-none z-0"
                 />

                 {/* Internal Glow Effects */}
                 <div className="absolute top-0 right-0 w-full h-full bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/20 blur-3xl rounded-full" />
                 
                 {/* Header - Abstract Tech Header */}
                 <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4 relative z-10">
                   <div className="h-1 w-16 bg-white/40 rounded-full" />
                   <div className="flex gap-1.5">
                      <div className="w-1 h-1 bg-white/20 rounded-full" />
                      <div className="w-1 h-1 bg-white/20 rounded-full" />
                      <div className="w-1 h-1 bg-white/20 rounded-full" />
                   </div>
                 </div>
    
                 {/* Center - Abstract Pulsing Core */}
                 <div className="relative w-full h-32 mb-8 flex items-center justify-center z-10">
                    {/* Orbiting Electrons */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute w-28 h-28 rounded-full border border-white/5"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]" />
                    </motion.div>
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="absolute w-20 h-20 rounded-full border border-white/5"
                    >
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full shadow-[0_0_15px_rgba(244,114,182,1)]" />
                    </motion.div>

                    {/* Ripples */}
                    <motion.div 
                      animate={{ scale: [1, 1.5], opacity: [0.6, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute w-16 h-16 rounded-full border border-pink-500/30"
                    />
                    <motion.div 
                      animate={{ scale: [1, 1.2], opacity: [0.8, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="absolute w-24 h-24 rounded-full border border-blue-500/20"
                    />
                    
                    {/* Core */}
                    <div className="relative w-12 h-12 bg-linear-to-tr from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <div className="w-4 h-4 bg-white rounded-full blur-[2px]" />
                    </div>
                 </div>
    
                 {/* Footer - Animated Metric Bars */}
                 <div className="space-y-4">
                   <div>
                      <div className="flex justify-between mb-1">
                        <div className="h-1 w-8 bg-white/20 rounded-full" />
                        <div className="h-1 w-4 bg-white/10 rounded-full" />
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ width: ["20%", "70%", "40%"] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          className="h-full bg-linear-to-r from-blue-500 to-cyan-400 rounded-full"
                        />
                      </div>
                   </div>
                   <div>
                      <div className="flex justify-between mb-1">
                        <div className="h-1 w-12 bg-white/20 rounded-full" />
                        <div className="h-1 w-3 bg-white/10 rounded-full" />
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                          animate={{ width: ["40%", "20%", "80%"] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          className="h-full bg-linear-to-r from-pink-500 to-purple-500 rounded-full" 
                         />
                      </div>
                   </div>
                 </div>
             </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
