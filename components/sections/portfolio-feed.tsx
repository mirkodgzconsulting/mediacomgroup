"use client"

import { motion } from "framer-motion"

import { ArrowRight, Rocket, Target, BarChart3 } from "lucide-react"

const steps = [
  {
    step: "Step 1",
    title: "Call Conoscitiva & Analisi",
    description: "La nostra prima call su Zoom o Google Meet serve per comprendere il tuo business, il tuo settore e a che punto sei nel tuo percorso digitale. Non stiamo ancora creando una strategia, ma stiamo raccogliendo dati essenziali per capire quali sono i tuoi bisogni e le opportunità da sfruttare.",
    icon: <Rocket className="w-6 h-6 text-cyan-400" />,
    tags: ["Comprensione delle esigenze", "Analisi preliminare"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-cyan-500/50"
  },
  {
    step: "Step 2",
    title: "Definizione della Strategia & Validazione",
    description: "Dopo aver analizzato il tuo business, elaboriamo una strategia su misura. Ti presentiamo il piano per la tua approvazione, testiamo e ottimizziamo ogni aspetto per assicurarci che sia perfettamente allineato con i tuoi obiettivi.",
    icon: <Target className="w-6 h-6 text-purple-400" />,
    tags: ["Strategia su misura", "Ottimizzazione pre-lancio"],
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    step: "Step 3",
    title: "Lancio, Monitoraggio & Ottimizzazione",
    description: "Dopo il lancio, monitoriamo costantemente i risultati e ottimizziamo le strategie per garantire il massimo impatto. Analizziamo i dati, scalando ciò che funziona e correggendo ciò che può essere migliorato.",
    icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
    tags: ["Analisi delle performance", "Accelerazione del Business"],
    color: "from-pink-500/20 to-red-500/20",
    border: "group-hover:border-pink-500/50",
    cta: true
  }
]

const randomParticles = Array.from({ length: 20 }, () => ({
  width: Math.random() * 3 + 1 + "px",
  height: Math.random() * 3 + 1 + "px",
  x: (Math.random() - 0.5) * 400,
  y: (Math.random() - 0.5) * 400,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 2,
}));

export function PortfolioFeed() {
  return (
    <section className="py-24 md:py-32 relative">
       
       <div className="container mx-auto px-4 md:px-6">
          
          {/* Centered Header */}
          <div className="mb-24 flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0d0d10] border border-white/10 rounded-full px-4 py-1.5 mb-8 shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)]">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
               </span>
               <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Come Lavoriamo?</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-semibold text-white leading-[1.1] tracking-tight mb-6">
              Rendiamo semplice il <br />
              percorso dal <span className="text-transparent bg-clip-text bg-linear-to-b from-gray-200 to-gray-600">design al Lancio.</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
              Dal primo contatto alla crescita scalabile: il nostro metodo vincente per trasformare la tua visione in realtà digitale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-7xl mx-auto">
             
             {/* Left Column: Cards Stack */}
             <div className="flex flex-col gap-24 relative pb-24">
                {/* Connecting Line */}
                <div className="absolute left-8 top-10 bottom-0 w-px bg-linear-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-20 hidden md:block" />

                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                    className={`group p-1 rounded-2xl bg-linear-to-br from-white/10 via-white/5 to-transparent border border-white/5 transition-all duration-500 sticky top-40 hover:border-white/20`}
                    style={{ zIndex: i + 1 }}
                  >
                    <div className="bg-linear-to-br from-[#0B0F19] to-[#02040A] p-8 rounded-xl relative overflow-hidden h-full shadow-2xl">
                       
                       {/* Inner Glow */}
                       <div className={`absolute top-0 right-0 w-80 h-80 bg-linear-to-br ${step.color} blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity`} />
                       
                       <div className="relative z-10">
                          <div className="flex justify-between items-start mb-6">
                             <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors shadow-lg">
                                {step.icon}
                             </div>
                             <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/60 tracking-wide">
                                {step.step}
                             </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4">
                            {step.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                             {step.tags.map((tag, t) => (
                               <span key={t} className="px-3 py-1.5 rounded-lg bg-[#0F121C] border border-white/5 text-[11px] text-gray-300 font-medium tracking-wide">
                                 {tag}
                               </span>
                             ))}
                          </div>

                          {step.cta && (
                            <button className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-[#ff3067] to-[#ff5c8a] text-white text-sm font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(255,48,103,0.3)] hover:shadow-[0_0_30px_rgba(255,48,103,0.5)] flex items-center justify-center gap-2 group/btn">
                              Fissa una call 20 min
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                          )}
                       </div>
                    </div>
                  </motion.div>
                ))}
             </div>

             {/* Right Column: Sticky Image */}
             <div className="sticky top-24 hidden lg:block self-start">
               <div className="relative w-full aspect-square flex items-center justify-center perspective-[500px]">
                  
                  {/* Deep Space Gradient */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,0,50,0.3),transparent_70%)] blur-3xl" />

                  {/* Chaos Particles - High quantity, small size */}
                  {randomParticles.map((particle, i) => (
                    <motion.div
                      key={`chaos-${i}`}
                      className={`absolute rounded-full bg-white opacity-40 blur-[1px]`}
                      style={{
                        width: particle.width,
                        height: particle.height,
                        left: "50%",
                        top: "50%",
                      }}
                      animate={{
                        x: [0, particle.x],
                        y: [0, particle.y],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: particle.delay,
                      }}
                    />
                  ))}

                  {/* Organized Orbits */}
                  <div className="relative w-[300px] h-[300px] flex items-center justify-center preserve-3d">
                    
                     {/* Orbit 1 */}
                     <motion.div 
                       animate={{ rotateZ: 360, rotateX: 20, rotateY: 10 }}
                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                       className="absolute inset-0 rounded-full border border-cyan-500/20 border-dashed"
                     >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full blur-[2px] shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                     </motion.div>

                     {/* Orbit 2 */}
                     <motion.div 
                       animate={{ rotateZ: -360, rotateX: -20, rotateY: 30 }}
                       transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                       className="absolute inset-[40px] rounded-full border border-purple-500/20 border-dotted"
                     >
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full blur-[2px] shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full blur-[1px]" />
                     </motion.div>

                     {/* Orbit 3 (Fast Inner) */}
                     <motion.div 
                       animate={{ rotateZ: 360, rotateX: 45 }}
                       transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                       className="absolute inset-[80px] rounded-full border border-white/10"
                     >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
                     </motion.div>

                     {/* Central Singularity */}
                     <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="w-16 h-16 bg-linear-to-r from-cyan-500 to-purple-600 rounded-full blur-xl" // Increased blur for nebulous look
                        />
                        <div className="w-8 h-8 bg-white rounded-full blur-md animate-pulse z-10" />
                     </div>

                  </div>

                  {/* Digital Streams (Shooting Lines) */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                       key={`stream-${i}`}
                       className="absolute h-[1px] bg-linear-to-r from-transparent via-cyan-400 to-transparent w-[200px]"
                       style={{
                         top: "50%",
                         left: "50%",
                         rotate: i * 72 + "deg",
                         transformOrigin: "left center",
                       }}
                       animate={{
                         x: [0, 200],
                         opacity: [0, 1, 0],
                         scaleX: [0.5, 1.5, 0.5]
                       }}
                       transition={{
                         duration: 2,
                         repeat: Infinity,
                         ease: "linear",
                         delay: i * 0.5,
                       }}
                    />
                  ))}
               </div>
             </div>

          </div>
       </div>
    </section>
  )
}
