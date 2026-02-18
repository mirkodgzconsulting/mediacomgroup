"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const strategies = [
  {
    title: "Agenzia di Comunicazione",
    badge: "MEET DI PERSONA",
    badgeColor: "bg-pink-500 text-white",
    description: "Diamo voce alla tua azienda con strategie efficaci e mirate.",
    items: [
      "Comunicazione — Costruiamo la tua immagine e miglioriamo la tua presenza sul mercato.",
      "Eventi e Conferenze — Gestiamo e organizziamo 360 eventi aziendali e conferenze per massimizzare il tuo impatto.",
      "Ufficio Stampa — Creiamo e gestiamo le relazioni con i media per una visibilità costante."
    ],
    highlight: "blue"
  },
  {
    title: "Marketing e Pubblicità",
    description: "Dalla strategia alla conversione: tutto il marketing di cui hai bisogno.",
    items: [
      "Pubblicità a pagamento — Creiamo e ottimizziamo campagne su Google ADS, Meta ADS e Amazon ADS.",
      "Consulenza Marketing — Strategie personalizzate per accelerare la crescita della tua azienda.",
      "Marketing & Strategia — Pianificazione su misura per garantire il massimo ritorno sugli investimenti."
    ],
    highlight: "purple"
  },
  {
    title: "Siti Web & eCommerce",
    description: "Diamo forma alla tua presenza digitale con soluzioni innovative.",
    items: [
      "Sito WordPress — Realizziamo siti web professionali in meno di 7 giorni.",
      "Sviluppo Web Personalizzato — Codice e UX su misura per un'esperienza unica.",
      "Siti e-Commerce — Ti aiutiamo a vendere online con piattaforme ottimizzate per il tuo business."
    ],
    highlight: "cyan"
  },
  {
    title: "Produzione Multimediale",
    badge: "CALL",
    badgeColor: "bg-pink-500 text-white",
    description: "Contenuti visivi che fanno la differenza.",
    items: [
      "Realizzazione Video — Riprese professionali e montaggio video per raccontare la tua storia.",
      "Servizi Fotografici — Immagini di alta qualità per valorizzare il tuo brand.",
      "Spot Pubblicitari — Video promozionali creati per catturare l'attenzione del tuo pubblico."
    ],
    highlight: "orange"
  },
  {
    title: "Consulenza Privata / Aziendale",
    dot: true,
    description: "(Creare strategie su misura per crescere, posizionarsi e ottenere risultati concreti.)",
    items: [
      "Consulenza per l'Organizzazione di Eventi Grandi — Supporto per pianificare, gestire e realizzare eventi, dalla strategia alla logistica.",
      "Strategia di Marketing Digitale 360° — Sviluppo di piani di marketing su misura per aumentare visibilità, lead e conversioni.",
      "Consulenza Privata di Marketing e Business — Sessioni personalizzate per aziende e professionisti per crescere e migliorare le strategie digitali."
    ],
    highlight: "yellow"
  },
  {
    title: "Soluzioni di intelligenza artificiale e automazione",
    badge: "CALL",
    badgeColor: "bg-pink-500 text-white",
    description: "Automatizzare il marketing, aumentare le vendite e migliorare la comunicazione con i clienti grazie all'IA.",
    items: [
      "WhatsApp IA e Automazione delle Risposte — Chatbot avanzati per rispondere ai clienti, gestire conversazioni e qualificare lead su WhatsApp.",
      "Automazione delle Vendite con CRM Intelligente — Sistema AI per gestire vendite, follow-up automatici e migliorare le conversioni.",
      "Creazione di Agente AI per Chiamate Automatiche — Assistente virtuale che chiama i clienti, risponde ai dubbi e segue i lead con voce AI."
    ],
    highlight: "green"
  }
]

// Helper to get color classes safely
const getColorClasses = (color: string) => {
  const colors: Record<string, { border: string; glow: string; bg: string }> = {
    blue: { border: "via-blue-500", glow: "shadow-blue-500/50", bg: "from-blue-500/10" },
    purple: { border: "via-purple-500", glow: "shadow-purple-500/50", bg: "from-purple-500/10" },
    cyan: { border: "via-cyan-500", glow: "shadow-cyan-500/50", bg: "from-cyan-500/10" },
    orange: { border: "via-orange-500", glow: "shadow-orange-500/50", bg: "from-orange-500/10" },
    yellow: { border: "via-yellow-500", glow: "shadow-yellow-500/50", bg: "from-yellow-500/10" },
    green: { border: "via-green-500", glow: "shadow-green-500/50", bg: "from-green-500/10" },
  }
  return colors[color] || colors.blue
}

export function StrategiesGrid() {
  return (
    <section className="py-24 md:py-32 relative">
       
       <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#0d0d10] border border-white/10 rounded-full px-4 py-1.5 mb-8 shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)]">
            <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Ciò che amiamo creare</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-semibold text-white leading-[1.1] tracking-tight mb-6">
            Strategie <span className="text-transparent bg-clip-text bg-linear-to-b from-gray-200 to-gray-600">Digitali</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Offriamo soluzioni integrate per far crescere la tua azienda, unendo strategia digitale, comunicazione, pubblicità e sviluppo web. Dal branding alla produzione multimediale, siamo il partner ideale per il tuo successo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 perspective-[2000px]">
          {strategies.map((strategy, i) => {
            const colors = getColorClasses('blue')
            
            return (
              <Link href="/contatti" key={i} className="block h-full group">
                <motion.div
                  initial={{ opacity: 0, y: 50, rotateX: -20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  whileHover={{ translateY: -5, rotateX: 5 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 60, damping: 20, delay: i * 0.05 }}
                  className="relative bg-[#080808] border border-white/5 rounded-3xl p-8 transition-all overflow-hidden transform-gpu h-full"
                >
                  {/* Top Glowing Border Effect */}
                  <div className={`absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent ${colors.border} to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent ${colors.border} to-transparent blur opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />

                  {/* Subtle Top Tint */}
                  <div className={`absolute inset-x-0 top-0 h-40 bg-linear-to-b ${colors.bg} to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-white">{strategy.title}</h3>
                      {strategy.badge && (
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase ${strategy.badgeColor}`}>
                          {strategy.badge}
                        </span>
                      )}
                      {strategy.dot && (
                        <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                      )}
                    </div>

                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                      {strategy.description}
                    </p>

                    <ul className="space-y-4">
                      {strategy.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                          <div className="mt-1 min-w-5 min-h-5 rounded bg-green-500/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-green-500" />
                          </div>
                          <span className="leading-relaxed">
                            {item.split("—")[0]} 
                            <span className="text-gray-500"> — {item.split("—")[1]}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
       </div>
    </section>
  )
}
