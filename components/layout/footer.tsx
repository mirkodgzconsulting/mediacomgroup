"use client"
import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative pt-10 pb-10 bg-black overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* CTA Banner */}


        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-none pt-0">
           <div className="col-span-1 md:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <span className="text-3xl font-black text-white tracking-tighter">MC.</span>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Agenzia di comunicazione e marketing digitale con sede a Milano. Eccellenza e innovazione dal 2024.
              </p>
              <div className="flex gap-4">
                 {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                   <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                     <Icon className="w-4 h-4" />
                   </a>
                 ))}
              </div>
           </div>

           <div>
              <h4 className="font-bold text-white mb-6">Agenzia</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                {["Chi Siamo", "Il Team", "Carriere", "Contatti"].map(l => (
                  <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
           </div>

           <div>
              <h4 className="font-bold text-white mb-6">Servizi</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                {["Sviluppo Web", "Social Media", "SEO & ADS", "Eventi Digitali"].map(l => (
                  <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
           </div>

           <div>
              <h4 className="font-bold text-white mb-6">Legale</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                {["Privacy Policy", "Cookie Policy", "Termini di Servizio"].map(l => (
                  <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
           </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
           <p>© 2026 Mediacom Group. Tutti i diritti riservati.</p>
           <p>Designed with ❤️ in Milano.</p>
        </div>

      </div>
    </footer>
  )
}
