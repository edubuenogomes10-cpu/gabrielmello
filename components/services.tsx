import Link from "next/link";
import { Baby, Camera, GraduationCap, Heart } from "lucide-react";
import { siteContent } from "@/lib/site-content";

const services = [
  {
    icon: Heart,
    ...siteContent.services[0],
  },
  {
    icon: GraduationCap,
    ...siteContent.services[1],
  },
  {
    icon: Camera,
    ...siteContent.services[2],
  },
  {
    icon: Baby,
    ...siteContent.services[3],
  },
];

export function Services() {
  const getWhatsappUrl = (message: string) =>
    `${siteContent.whatsappUrl}?text=${encodeURIComponent(message)}`;

  return (
    <section id="servicos" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-gold animate-fade-up">
            Coberturas e Ensaios
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground animate-fade-up animation-delay-100 md:text-5xl">
            Serviços
          </h2>
          <div className="section-divider mx-auto mt-6 h-px w-24 bg-gold animate-line-grow animation-delay-200" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group shimmer-card hover-lift animate-fade-up border border-border bg-card p-8 transition-all duration-500 hover:border-gold"
              style={{ animationDelay: `${150 + index * 110}ms` }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center border border-gold text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-brown animate-float-alt">
                <service.icon size={32} />
              </div>
              <h3 className="mb-4 font-serif text-2xl text-foreground">{service.title}</h3>
              <p className="mb-6 leading-relaxed text-brown-light">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={getWhatsappUrl(service.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center border border-gold px-6 py-3 text-xs font-medium uppercase tracking-wider text-gold transition-colors duration-300 hover:bg-gold hover:text-brown"
              >
                Pedir orçamento
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
