"use client";

import Image from "next/image";
import { Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { siteContent } from "@/lib/site-content";

const mobilePreviewItems = siteContent.portfolioItems.slice(0, 2);
const remainingItemsCount = Math.max(siteContent.portfolioItems.length - mobilePreviewItems.length, 0);

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-gold animate-fade-up">
            Trabalhos Selecionados
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground animate-fade-up animation-delay-100 md:text-5xl">
            PortfÃ³lio
          </h2>
          <div className="section-divider mx-auto mt-6 h-px w-24 bg-gold animate-line-grow animation-delay-300" />
        </div>

        <div className="md:hidden">
          <Dialog>
            <div className="space-y-4">
              {mobilePreviewItems[0] ? (
                <div className="group shimmer-card relative aspect-[4/5] overflow-hidden rounded-[1.75rem] animate-fade-up">
                  <Image
                    src={mobilePreviewItems[0].image}
                    alt={mobilePreviewItems[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-6">
                    <p className="mb-2 text-xs uppercase tracking-[0.28em] text-gold">
                      {mobilePreviewItems[0].category}
                    </p>
                    <h3 className="font-serif text-2xl text-white">
                      {mobilePreviewItems[0].title}
                    </h3>
                  </div>
                </div>
              ) : null}

              {mobilePreviewItems[1] ? (
                <DialogTrigger asChild>
                  <button
                    type="button"
                    aria-label="Abrir mais fotos do portfÃ³lio"
                    className="group shimmer-card relative block aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] text-left animate-fade-up animation-delay-200"
                  >
                    <Image
                      src={mobilePreviewItems[1].image}
                      alt={mobilePreviewItems[1].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brown/55 backdrop-blur-[2px] transition-colors duration-300 group-hover:bg-brown/45" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold">
                        <Eye className="size-4" />
                        Ver mais
                      </span>
                      <h3 className="font-serif text-2xl">{mobilePreviewItems[1].title}</h3>
                      {remainingItemsCount > 0 ? (
                        <p className="mt-3 text-sm text-white/80">
                          +{remainingItemsCount} fotos para abrir
                        </p>
                      ) : null}
                    </div>
                  </button>
                </DialogTrigger>
              ) : null}
            </div>

            <DialogContent className="max-h-[88vh] overflow-y-auto border-gold/20 bg-background p-0 sm:max-w-4xl">
              <DialogHeader className="border-b border-border/70 px-6 py-5 text-left">
                <DialogTitle className="font-serif text-3xl font-light text-foreground">
                  Mais fotos
                </DialogTitle>
                <DialogDescription>
                  Uma seleÃ§Ã£o completa dos registros para navegar com mais calma no mobile.
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
                {siteContent.portfolioItems.map((item) => (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded-[1.5rem] border border-border/70 bg-card"
                  >
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2 px-5 py-4">
                      <p className="text-xs uppercase tracking-[0.28em] text-gold">
                        {item.category}
                      </p>
                      <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-6 pb-6">
                <DialogClose asChild>
                  <Button
                    variant="outline"
                    className="w-full border-gold/30 bg-transparent uppercase tracking-[0.2em] text-foreground hover:border-gold hover:bg-gold/10 hover:text-foreground"
                  >
                    Fechar
                  </Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="hidden md:block">
          <input
            id="portfolio-todos"
            type="radio"
            name="portfolio-filter"
            defaultChecked
            className="sr-only"
          />
          <input
            id="portfolio-casamentos"
            type="radio"
            name="portfolio-filter"
            className="sr-only"
          />
          <input
            id="portfolio-ensaios"
            type="radio"
            name="portfolio-filter"
            className="sr-only"
          />
          <input
            id="portfolio-formaturas"
            type="radio"
            name="portfolio-filter"
            className="sr-only"
          />
          <input
            id="portfolio-eventos"
            type="radio"
            name="portfolio-filter"
            className="sr-only"
          />

          <div className="mb-12 flex flex-wrap justify-center gap-4 animate-fade-up animation-delay-200">
            <label
              htmlFor="portfolio-todos"
              className="portfolio-filter hover-lift px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300"
            >
              Todos
            </label>
            <label
              htmlFor="portfolio-casamentos"
              className="portfolio-filter hover-lift px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300"
            >
              Casamentos
            </label>
            <label
              htmlFor="portfolio-ensaios"
              className="portfolio-filter hover-lift px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300"
            >
              Ensaios
            </label>
            <label
              htmlFor="portfolio-formaturas"
              className="portfolio-filter hover-lift px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300"
            >
              Formaturas
            </label>
            <label
              htmlFor="portfolio-eventos"
              className="portfolio-filter hover-lift px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300"
            >
              Eventos
            </label>
          </div>

          <div data-portfolio-grid className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteContent.portfolioItems.map((item, index) => (
              <div
                key={item.id}
                data-portfolio-item
                data-category={item.category}
                className="group shimmer-card hover-tilt relative aspect-[4/5] cursor-pointer overflow-hidden animate-fade-up"
                style={{ animationDelay: `${120 + index * 90}ms` }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-brown/10 transition-all duration-500 group-hover:bg-brown/60">
                  <div className="translate-y-4 text-center opacity-0 transition-opacity duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="mb-2 text-sm uppercase tracking-wider text-gold">
                      {item.category}
                    </p>
                    <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
