import Image from "next/image";
import { Award, Camera, Clock, Heart } from "lucide-react";
import { withBasePath } from "@/lib/base-path";
import { siteContent } from "@/lib/site-content";

const stats = [
  { icon: Camera, ...siteContent.stats[0] },
  { icon: Award, ...siteContent.stats[1] },
  { icon: Heart, ...siteContent.stats[2] },
  { icon: Clock, ...siteContent.stats[3] },
];

export function About() {
  return (
    <section id="sobre" className="bg-cream py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative animate-fade-scale">
            <div className="relative aspect-[3/4] overflow-hidden animate-glow">
              <Image
                src={withBasePath("/gm-about.jpg")}
                alt={`${siteContent.person} - fotógrafo`}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full animate-border-drift border-2 border-gold" />
          </div>

          <div>
            <h2 className="mb-6 font-serif text-4xl font-light text-foreground animate-fade-up md:text-5xl">
              {siteContent.aboutTitle}
            </h2>
            <div className="section-divider mb-8 h-px w-24 bg-gold animate-line-grow animation-delay-200" />
            <p className="mb-6 leading-relaxed text-brown-light animate-fade-up animation-delay-200">
              {siteContent.aboutParagraphs[0]}
            </p>
            <p className="mb-8 leading-relaxed text-brown-light animate-fade-up animation-delay-300">
              {siteContent.aboutParagraphs[1]}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="hover-lift flex items-center gap-4 rounded-sm animate-fade-up"
                  style={{ animationDelay: `${350 + index * 100}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-gold text-gold animate-float-soft">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-foreground">{stat.value}</p>
                    <p className="text-sm text-brown-light">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
