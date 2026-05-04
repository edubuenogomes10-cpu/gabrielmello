import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import { siteContent } from "@/lib/site-content";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-bg-pan"
        style={{
          backgroundImage: `url('${withBasePath("/gm-noiva.jpg")}')`,
        }}
      >
        <div className="absolute inset-0 bg-brown/40" />
      </div>

      <div className="absolute -left-16 top-28 h-48 w-48 rounded-full bg-gold/10 blur-3xl animate-float-soft" />
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-white/8 blur-3xl animate-float-alt" />
      <div className="absolute bottom-20 left-1/4 h-32 w-32 rounded-full border border-white/20 animate-float-soft animation-delay-300" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-light animate-fade-up">
          Fotografia de Eventos
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6 animate-fade-up animation-delay-200">
          {siteContent.heroTitle}
          <span className="block mt-2 text-gold italic">{siteContent.tagline}</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-300">
          {siteContent.heroDescription}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-500">
          <Link
            href="#portfolio"
            className="hover-lift px-8 py-4 bg-gold text-brown font-medium tracking-wider uppercase text-sm hover:bg-gold-light transition-colors duration-300"
          >
            Ver Portfólio
          </Link>
          <Link
            href={siteContent.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hover-lift px-8 py-4 border border-white text-white font-medium tracking-wider uppercase text-sm hover:bg-white hover:text-brown transition-colors duration-300"
          >
            Chamar no WhatsApp
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 animate-scroll-cue">
        <Link href="#portfolio" className="text-white/80 hover:text-gold transition-colors">
          <ArrowDown size={32} />
        </Link>
      </div>
    </section>
  );
}
