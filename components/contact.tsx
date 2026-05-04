"use client";

import { Camera, ExternalLink, Instagram, MapPin, MessageCircle } from "lucide-react";

import { siteContent } from "@/lib/site-content";

const mapsQuery = encodeURIComponent(
  "Gabriel Mello Fotografia, Av. Getúlio Vargas, Hulha Negra - RS, 96460-000",
);
const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&z=18&output=embed`;
const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export function Contact() {
  return (
    <section id="contato" className="bg-cream py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-gold animate-fade-up">
            Vamos Conversar
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground animate-fade-up animation-delay-100 md:text-5xl">
            Entre em Contato
          </h2>
          <div className="section-divider mx-auto mt-6 h-px w-24 bg-gold animate-line-grow animation-delay-200" />
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div className="animate-fade-up animation-delay-200">
            <h3 className="mb-6 font-serif text-2xl text-foreground">Informações de Contato</h3>
            <p className="mb-8 leading-relaxed text-brown-light">
              Agendamentos e orçamentos podem ser feitos pelo WhatsApp, Instagram ou pela
              localização no mapa ao lado.
            </p>

            <div className="space-y-6">
              <div
                className="hover-lift flex items-center gap-4 animate-fade-up"
                style={{ animationDelay: "300ms" }}
              >
                <div className="flex h-12 w-12 items-center justify-center border border-gold text-gold animate-float-soft">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-brown-light">Localização</p>
                  <p className="max-w-sm text-foreground">{siteContent.locationDisplay}</p>
                </div>
              </div>

              <div
                className="hover-lift flex items-center gap-4 animate-fade-up"
                style={{ animationDelay: "400ms" }}
              >
                <div className="flex h-12 w-12 items-center justify-center border border-gold text-gold animate-float-soft animation-delay-100">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-sm text-brown-light">WhatsApp</p>
                  <a
                    href={siteContent.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground transition-colors hover:text-gold"
                  >
                    {siteContent.phoneDisplay}
                  </a>
                </div>
              </div>

              <div
                className="hover-lift flex items-center gap-4 animate-fade-up"
                style={{ animationDelay: "500ms" }}
              >
                <div className="flex h-12 w-12 items-center justify-center border border-gold text-gold animate-float-soft animation-delay-200">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-sm text-brown-light">Instagram</p>
                  <a
                    href={siteContent.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground transition-colors hover:text-gold"
                  >
                    {siteContent.handle}
                  </a>
                </div>
              </div>

              <div
                className="hover-lift flex items-center gap-4 animate-fade-up"
                style={{ animationDelay: "600ms" }}
              >
                <div className="flex h-12 w-12 items-center justify-center border border-gold text-gold animate-float-soft animation-delay-300">
                  <Camera size={20} />
                </div>
                <div>
                  <p className="text-sm text-brown-light">Galeria</p>
                  <a
                    href={siteContent.galleryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground transition-colors hover:text-gold"
                  >
                    Encontre suas fotos aqui
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-scale animation-delay-300">
            <div className="shimmer-card overflow-hidden border border-border/80 bg-background/50 p-4 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between gap-4 border-b border-border/70 pb-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-gold">Mapa</p>
                  <h3 className="font-serif text-2xl text-foreground">Gabriel Mello Fotografia</h3>
                  <p className="mt-1 text-sm text-brown-light">{siteContent.locationDisplay}</p>
                </div>
                <a
                  href={mapsOpenUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover-lift inline-flex items-center gap-2 border border-gold px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-gold transition-colors duration-300 hover:bg-gold hover:text-brown"
                >
                  <ExternalLink size={14} />
                  Abrir no Maps
                </a>
              </div>

              <div className="overflow-hidden border border-border/70 bg-white">
                <iframe
                  title="Mapa de Gabriel Mello Fotografia"
                  src={mapsEmbedUrl}
                  className="h-[420px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
