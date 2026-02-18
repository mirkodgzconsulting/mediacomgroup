import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Footer } from "@/components/layout/footer"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  // Filter out current project for "Guarda altri"
  const otherProjects = projects.filter((p) => p.slug !== params.slug).slice(0, 2)

  return (
    <main className="min-h-screen text-white selection:bg-[#ff3067]/30 pt-24 pb-12 md:pt-32 md:pb-20">
      


      <div className="container mx-auto px-4 md:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mb-16 md:mb-20 items-start">
           {/* Main Content */}
           <div className="lg:col-span-2 space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-[#ff3067] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide w-fit">
                {project.fullDate}
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-2">
                 {project.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-[10px] md:text-xs font-bold text-gray-300 border border-white/10 uppercase tracking-wider">
                     {tag}
                   </span>
                 ))}
              </div>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
                {project.description}
              </p>
           </div>

           {/* Sidebar Info */}
           <div className="order-1 lg:order-2 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-6 md:space-y-8 w-full">
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Services</h4>
                <p className="text-white font-medium text-sm md:text-base">{project.services || "N/A"}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Category</h4>
                <p className="text-white font-medium text-sm md:text-base">{project.category || "N/A"}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Client</h4>
                <p className="text-white font-medium text-sm md:text-base">{project.client || "N/A"}</p>
              </div>

              {project.websiteUrl && (
                <a 
                  href={project.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-3 md:py-4 bg-[#ff3067] text-white rounded-xl font-bold text-center text-sm md:text-base hover:bg-[#ff3067]/90 transition-all shadow-[0_0_20px_rgba(255,48,103,0.3)] mt-4"
                >
                  Show Live Website
                </a>
              )}
           </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden mb-16 md:mb-32 border border-white/10 shadow-2xl">
           <Image 
             src={project.image} 
             alt={project.title}
             fill
             className="object-cover"
             priority
           />
        </div>

        {/* Section 1: Descrittiva */}
        {project.longDescription1 && (
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 mb-16 md:mb-32">
             <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">{project.section1Title || "Sito Web"}</h2>
                <div className="w-16 md:w-20 h-1 bg-[#ff3067] rounded-full" />
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {project.longDescription1}
                </p>
                {project.showPerformance && (
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                     <span className="text-white font-bold text-sm md:text-base">Performance</span>
                     <span className="bg-[#ff3067] text-white text-[10px] md:text-xs font-bold px-1.5 py-0.5 rounded">100</span>
                  </div>
                )}
             </div>
             
             {project.longDescription2 && (
               <p className="text-gray-400 text-base md:text-lg leading-relaxed border-l-2 border-white/10 pl-4 md:pl-6">
                 {project.longDescription2}
               </p>
             )}
          </div>
        )}

        {/* Middle Section (Optional) */}
        {project.middleSectionTitle && (
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 mb-16 md:mb-32">
             <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">{project.middleSectionTitle}</h3>
             <p className="text-gray-400 text-base md:text-lg leading-relaxed">
               {project.middleSectionText}
             </p>
          </div>
        )}

        {/* Gallery Grid */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16 md:mb-32">
             {project.galleryImages.map((img, i) => (
                <div key={i} className="aspect-video md:aspect-4/3 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl">
                   <Image 
                     src={img} 
                     alt={`${project.title} gallery ${i+1}`}
                     fill
                     className="object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                </div>
             ))}
          </div>
        )}

        {/* Section 2: Advanced Features */}
        {project.section2Title && (
          <div className="max-w-4xl mx-auto mb-20 md:mb-32 space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight">
              {project.section2Title}
            </h2>
             <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              {project.section2Text}
            </p>
          </div>
        )}

        {/* Guarda Altri Projects */}
        <div className="border-t border-white/10 pt-16 md:pt-20 mb-16 md:mb-32">
           <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-4">
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center md:text-left">Guarda altri</h2>
             <Link href="/casi-studio">
               <button className="px-6 py-2 bg-[#ff3067] text-white rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(255,48,103,0.3)] hover:bg-[#ff3067]/90 transition-all">
                  Vedi tutti
               </button>
             </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {otherProjects.map((p, index) => (
                <Link key={index} href={`/casi-studio/${p.slug}`}>
                  <div className="group relative aspect-video md:aspect-4/3 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 cursor-pointer">
                    <Image 
                      src={p.image} 
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                       <div className="flex justify-between items-end">
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-1 transition-colors">{p.title}</h3>
                            <p className="text-[10px] md:text-xs text-gray-400 font-mono">{p.year}</p>
                          </div>
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 backdrop-blur-md">
                             <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                          </div>
                       </div>
                    </div>
                  </div>
                </Link>
             ))}
           </div>
        </div>

      </div>
      <Footer />
    </main>
  )
}
