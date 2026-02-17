"use client"

import { motion } from "framer-motion"
import { Send, Mail, MapPin, Phone, type LucideIcon } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contatti" className="py-20 md:py-32 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Content */}
          <div className="space-y-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-semibold text-white leading-[1.1] tracking-tight mb-8"
              >
                Let&apos;s build <br />
                <span className="text-gray-500">
                  something epic.
                </span>
              </motion.h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Siamo pronti a portare la tua visione al livello successivo. 
                Compila il form o contattaci direttamente.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-white/10">
              <ContactItem icon={Mail} label="Email" value="hello@zmediagroup.it" />
              <ContactItem icon={Phone} label="Telefono" value="+39 02 1234 5678" />
              <ContactItem icon={MapPin} label="Ufficio" value="Via Montenapoleone, Milano" />
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
                <InputGroup label="Nome" placeholder="Il tuo nome" />
                <InputGroup label="Azienda" placeholder="Brand / Azienda" />
              </div>
              
              <InputGroup label="Email" placeholder="nome@azienda.com" type="email" />
              
              <div className="space-y-4">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block pl-1">Interesse</label>
                <div className="flex flex-wrap gap-3">
                  {["Branding", "Sviluppo Web", "Marketing", "SEO", "Altro"].map(tag => (
                    <label key={tag} className="cursor-pointer">
                      <input type="checkbox" className="hidden peer" />
                      <span className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm font-medium transition-all peer-checked:bg-white peer-checked:text-black peer-checked:border-white hover:border-white/30">
                        {tag}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block pl-1">Messaggio</label>
                <textarea 
                  rows={3}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl focus:outline-hidden focus:border-white transition-all placeholder:text-gray-700 resize-none min-h-[100px]"
                  placeholder="Raccontaci del tuo progetto..."
                />
              </div>

              <div className="pt-4">
                <button className="w-full md:w-auto px-10 py-4 bg-white text-black rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]">
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
      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block pl-1 group-focus-within:text-white transition-colors">{label}</label>
      <input 
        type={type}
        className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl focus:outline-hidden focus:border-white transition-all placeholder:text-gray-600"
        placeholder={placeholder}
      />
    </div>
  )
}
