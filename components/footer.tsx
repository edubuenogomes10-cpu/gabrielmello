import Image from "next/image";
import Link from "next/link";
import { Camera, Instagram, MessageCircle } from "lucide-react";
import { withBasePath } from "@/lib/base-path";
import { siteContent } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="bg-brown py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12 grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="font-serif text-2xl tracking-wider text-white">
              <span className="text-gold">{siteContent.brand}</span>
            </Link>
            <p className="mt-4 leading-relaxed text-white/70">
              Fotografia de eventos com identidade, sensibilidade e presença para
              transformar momentos em memórias duradouras.
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#inicio"
                  className="text-sm text-white/70 transition-colors hover:text-gold"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-sm text-white/70 transition-colors hover:text-gold"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="text-sm text-white/70 transition-colors hover:text-gold"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="text-sm text-white/70 transition-colors hover:text-gold"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-sm text-white/70 transition-colors hover:text-gold"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg text-white">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href={siteContent.instagramUrl}
                target="_blank"
                rel="noreferrer"
                data-social="instagram"
                className="social-icon-link"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteContent.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                data-social="whatsapp"
                className="social-icon-link"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={siteContent.galleryUrl}
                target="_blank"
                rel="noreferrer"
                data-social="gallery"
                className="social-icon-link"
                aria-label="Galeria"
              >
                <Camera size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 md:flex-row md:justify-between">
          <p className="text-center text-sm text-white/50 md:text-left">
            © {new Date().getFullYear()} {siteContent.brand}. Todos os direitos reservados.
          </p>
          <a
            href="https://eduardobuenodev.com.br/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold"
          >
            <Image
              src={withBasePath("/eduardo-bueno-logo.ico")}
              alt="Logo Eduardo Bueno Dev"
              width={22}
              height={22}
              className="rounded-sm"
            />
            Desenvolvido por Eduardo Bueno
          </a>
        </div>
      </div>
    </footer>
  );
}
