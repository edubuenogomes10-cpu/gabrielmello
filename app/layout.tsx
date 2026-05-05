import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteContent } from "@/lib/site-content";
import { withBasePath } from "@/lib/base-path";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: `${siteContent.person} | Fotografia`,
  description: `${siteContent.person} é fotógrafo de eventos com cobertura para casamentos, formaturas, rodeios, feiras e ensaios em Hulha Negra e região.`,
  keywords: [
    "Gabriel Mello",
    "fotografia de eventos",
    "casamento",
    "formatura",
    "rodeio",
    "ensaio",
    "Hulha Negra",
  ],
  icons: {
    icon: withBasePath("/gm-logo-mark-hq.png"),
    shortcut: withBasePath("/gm-logo-mark-hq.png"),
    apple: withBasePath("/gm-logo-mark-hq.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
