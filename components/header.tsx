"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm animate-fade-down">
      <div className="container mx-auto px-6 py-3">
        <nav className="flex items-center justify-between">
          <Link href="/" className="group flex items-center">
            <Image
              src="/gabriel-mello-logo-header.png"
              alt="Gabriel Mello Fotografia"
              width={1632}
              height={612}
              priority
              unoptimized
              sizes="(min-width: 1024px) 220px, (min-width: 640px) 180px, 130px"
              className="h-auto w-full max-w-[7rem] shrink-0 transition-transform duration-500 group-hover:scale-[1.02] sm:max-w-[9rem] lg:max-w-[12.5rem]"
            />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link-animated text-sm font-light uppercase tracking-widest text-foreground transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground transition-colors hover:text-gold md:hidden"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-border bg-background animate-fade-down md:hidden">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 text-sm font-light uppercase tracking-widest text-foreground transition-colors duration-300 hover:bg-cream hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
