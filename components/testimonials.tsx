import { Quote } from "lucide-react";
import { siteContent } from "@/lib/site-content";

export function Testimonials() {
  return (
    <section className="bg-brown py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-gold animate-fade-up">
            A Essência da Marca
          </p>
          <h2 className="font-serif text-4xl font-light text-white animate-fade-up animation-delay-100 md:text-5xl">
            O olhar de Gabriel Mello
          </h2>
          <div className="section-divider mx-auto mt-6 h-px w-24 bg-gold animate-line-grow animation-delay-200" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {siteContent.values.map((item, index) => (
            <div
              key={index}
              className="hover-lift animate-fade-up border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-gold/50"
              style={{ animationDelay: `${150 + index * 120}ms` }}
            >
              <Quote className="mb-6 text-gold animate-float-soft" size={40} />
              <p className="mb-6 leading-relaxed text-white/90 italic">
                &quot;{item.content}&quot;
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="font-serif text-xl text-white">{item.title}</p>
                <p className="text-sm text-gold">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
