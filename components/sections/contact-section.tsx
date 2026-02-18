"use client"

import { motion } from "framer-motion"
import { Send, Mail, MapPin, type LucideIcon } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contatti" className="py-12 md:py-32 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 max-w-7xl relative z-10">
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#0d0d10] border border-white/10 rounded-full pl-1 pr-4 py-1 mb-8 shadow-[0_0_15px_-5px_rgba(255,48,103,0.5)]"
          >
             <span className="bg-[#ff3067] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">24/7</span>
             <span className="text-gray-300 text-sm font-medium">Vuoi lavorare con noi?</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-semibold text-white leading-[1.1] tracking-tight mb-6"
          >
            Comunichiamo con le persone giuste <br className="hidden md:block" />
            <span className="text-white">nel momento giusto</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Affidati a noi per far crescere il tuo business con strategie mirate ed efficaci. Se non riesci a fissare una call, compila il nostro form e inviaci un messaggio! 🚀
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-12 lg:sticky lg:top-32">
            <div className="space-y-8 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Contatti Diretti</h3>
              <ContactItem icon={Mail} label="Email" value="info@mediacomgroup.it" />
              <ContactItem icon={MapPin} label="Ufficio" value="Situati a pochi passi dalla Stazione Milano Centrale: Via Settembrini 15, Milano – Italia." />
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputGroup label="Nome*" placeholder="Mario" />
                <InputGroup label="Cognome*" placeholder="Rossi" />
              </div>
              
              <InputGroup label="E-mail" placeholder="mariorossi99@gmail.com" type="email" />
              
              <div className="space-y-4">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block pl-1">Messaggio</label>
                <textarea 
                  rows={3}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl focus:outline-hidden focus:border-[#ff3067] transition-all placeholder:text-gray-700 resize-none min-h-[100px]"
                  placeholder="Messaggio..."
                />
              </div>

              <div className="pt-4">
                <button className="w-full md:w-auto px-10 py-4 bg-[#ff3067] text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#ff3067]/90 transition-all shadow-[0_0_20px_rgba(255,48,103,0.3)]">
                    Invia Richiesta
                    <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon: Icon, label, value }: { icon: LucideIcon, label: string, value: string }) {
  return (
    <div className="flex items-center gap-5 group">
      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
      <div>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{label}</p>
        <p className="text-white font-medium text-lg">{value}</p>
      </div>
    </div>
  )
}

function InputGroup({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
  return (
    <div className="space-y-2 group">
      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block pl-1 group-focus-within:text-[#ff3067] transition-colors">{label}</label>
      <input 
        type={type}
        className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl focus:outline-hidden focus:border-[#ff3067] transition-all placeholder:text-gray-600"
        placeholder={placeholder}
      />
    </div>
  )
}
