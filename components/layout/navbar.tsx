"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-black/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group relative z-50">
           {/* Using Image component for SVG if configured, or embedding simple img tag for direct local access if Next image optimization is tricky with local SVG without config. 
               Since logo.svg is in app/, it needs to be in public/ to be accessible via URL /logo.svg. 
               I will assume for now we might need to move it or import it. 
               Let's try to use valid Next.js Image assuming I will move the file to public/logo.svg next.
           */}
           <Image 
             src="/logo.svg" 
             alt="MEDIACOM Logo" 
             width={140} 
             height={40} 
             className="h-8 md:h-10 w-auto object-contain" 
           />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {[
            { name: "Home", href: "/" },
            { name: "Casi Studio", href: "/casi-studio" },
            { name: "Contatto", href: "/contatti" }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium text-gray-400 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contatti">
            <Button 
              className="bg-[#ff3067] hover:bg-[#ff3067]/90 text-white font-medium rounded-lg px-6 py-2 shadow-[0_0_15px_rgba(255,48,103,0.4)] transition-all hover:shadow-[0_0_25px_rgba(255,48,103,0.6)] border-0"
            >
              Fissa una Call
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-[#ff3067] transition-colors relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 animate-in fade-in duration-200">
           {[
             { name: "Home", href: "/" },
             { name: "Casi Studio", href: "/casi-studio" },
             { name: "Contatto", href: "/contatti" }
           ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-bold text-white hover:text-[#ff3067] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contatti" onClick={() => setIsOpen(false)}>
              <Button 
                className="bg-[#ff3067] text-white font-bold rounded-lg px-8 py-3 text-lg mt-4 shadow-[0_0_20px_rgba(255,48,103,0.5)]"
              >
                Fissa una Call
              </Button>
            </Link>
        </div>
      )}
    </header>
  )
}
