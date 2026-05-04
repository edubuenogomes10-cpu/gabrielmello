import { withBasePath } from "@/lib/base-path";

export const siteContent = {
  brand: "Gabriel Mello",
  brandShort: "Gabriel",
  person: "Gabriel Mello",
  handle: "@gabriel_mello_fotografia",
  instagramUrl: "https://www.instagram.com/gabriel_mello_fotografia/",
  whatsappUrl: "https://wa.me/5551995013100",
  galleryUrl: "https://www.fotto.com.br/gabriel.mello",
  phoneDisplay: "(51) 99501-3100",
  locationDisplay: "Av. GetÃºlio Vargas, Hulha Negra - RS, 96460-000",
  tagline: "ExcelÃªncia â€¢ SofisticaÃ§Ã£o â€¢ EmoÃ§Ã£o",
  heroTitle: "Onde momentos se tornam eternos",
  heroDescription:
    "Fotografia de eventos com olhar sensÃ­vel para casamentos, formaturas, rodeios, feiras e ensaios especiais no sul do Rio Grande do Sul.",
  aboutTitle: "Gabriel Mello",
  aboutParagraphs: [
    "Sou Gabriel Mello, fotÃ³grafo, e transformei a fotografia em propÃ³sito: registrar momentos Ãºnicos com sensibilidade, presenÃ§a e memÃ³ria.",
    "Com base em Hulha Negra, uno direÃ§Ã£o leve, olhar atento e acabamento cuidadoso para entregar registros com identidade, elegÃ¢ncia e emoÃ§Ã£o.",
  ],
  stats: [
    { value: "115", label: "publicaÃ§Ãµes autorais no perfil" },
    { value: "20", label: "destaques pÃºblicos no Instagram" },
    { value: "+1,8 mil", label: "seguidores acompanhando o trabalho" },
    { value: "RS", label: "cobertura em Hulha Negra e regiÃ£o" },
  ],
  services: [
    {
      title: "Casamentos",
      whatsappMessage:
        "OlÃ¡, Gabriel Mello! Gostaria de solicitar um orÃ§amento para cobertura de casamento. Podem me passar mais informaÃ§Ãµes?",
      description:
        "Cobertura sensÃ­vel do making of Ã  celebraÃ§Ã£o, com atenÃ§Ã£o aos detalhes, aos encontros e Ã  emoÃ§Ã£o real de cada etapa.",
      features: [
        "CerimÃ´nia e recepÃ§Ã£o",
        "Retratos do casal",
        "Registros espontÃ¢neos",
        "Entrega pensada para reviver o dia",
      ],
    },
    {
      title: "Formaturas",
      whatsappMessage:
        "OlÃ¡, Gabriel Mello! Tenho interesse em um orÃ§amento para formatura. Queria saber como funciona a cobertura.",
      description:
        "Ensaios e coberturas que valorizam a conquista, a presenÃ§a e a identidade de cada formando em um momento Ãºnico.",
      features: [
        "Ensaios externos",
        "SessÃµes individuais ou em grupo",
        "ColaÃ§Ã£o e celebraÃ§Ã£o",
        "EstÃ©tica elegante e atual",
      ],
    },
    {
      title: "Eventos e Rodeios",
      whatsappMessage:
        "OlÃ¡, Gabriel Mello! Quero solicitar um orÃ§amento para cobertura de evento ou rodeio. Podem me passar os detalhes?",
      description:
        "Cobertura fotogrÃ¡fica para feiras, exposiÃ§Ãµes, rodeios e eventos regionais, registrando pÃºblico, bastidores e atmosfera.",
      features: [
        "Cobertura oficial",
        "Arena, palco e bastidores",
        "Material para divulgaÃ§Ã£o",
        "Olhar tÃ©cnico para grandes eventos",
      ],
    },
    {
      title: "Ensaios Especiais",
      whatsappMessage:
        "OlÃ¡, Gabriel Mello! Tenho interesse em um ensaio especial e queria pedir um orÃ§amento. Podem falar comigo?",
      description:
        "Gestante, famÃ­lia, infantil e datas temÃ¡ticas com direÃ§Ã£o leve e natural para criar memÃ³rias afetivas e autÃªnticas.",
      features: [
        "Gestante",
        "FamÃ­lia",
        "Infantil e sazonal",
        "ConduÃ§Ã£o tranquila e espontÃ¢nea",
      ],
    },
  ],
  values: [
    {
      title: "EmoÃ§Ãµes reais",
      subtitle: "Meu olhar",
      content:
        "Fotografar vai alÃ©m da imagem. Ã‰ capturar emoÃ§Ãµes verdadeiras, detalhes que passam despercebidos e histÃ³rias que merecem ser lembradas para sempre.",
    },
    {
      title: "ExperiÃªncia completa",
      subtitle: "Meu compromisso",
      content:
        "Cada cliente carrega uma histÃ³ria. Meu compromisso Ã© entregar mais do que fotos: Ã© oferecer uma experiÃªncia com profissionalismo, sensibilidade e excelÃªncia.",
    },
    {
      title: "MemÃ³ria enquanto acontece",
      subtitle: "Minha presenÃ§a",
      content:
        "Enquanto vocÃª vive o momento, eu cuido da memÃ³ria com discriÃ§Ã£o, timing e atenÃ§Ã£o ao que faz cada evento ser Ãºnico.",
    },
  ],
  portfolioCategories: ["Todos", "Casamentos", "Ensaios", "Formaturas", "Eventos"],
  portfolioItems: [
    {
      id: 1,
      category: "Casamentos",
      image: withBasePath("/gm-casamento.jpg"),
      title: "HistÃ³rias de Amor",
    },
    {
      id: 2,
      category: "Casamentos",
      image: withBasePath("/gm-noiva.jpg"),
      title: "ElegÃ¢ncia em Cada Detalhe",
    },
    {
      id: 3,
      category: "Ensaios",
      image: withBasePath("/gm-gestante.jpg"),
      title: "MemÃ³rias que ComeÃ§am Antes",
    },
    {
      id: 4,
      category: "Ensaios",
      image: withBasePath("/gm-pascoa.jpg"),
      title: "FamÃ­lia e Datas Especiais",
    },
    {
      id: 5,
      category: "Formaturas",
      image: withBasePath("/gm-formatura.jpg"),
      title: "Um Marco",
    },
    {
      id: 6,
      category: "Eventos",
      image: withBasePath("/gm-rodeio.jpg"),
      title: "Rodeio e TradiÃ§Ã£o",
    },
    {
      id: 7,
      category: "Eventos",
      image: withBasePath("/gm-tratorfest.jpg"),
      title: "Cobertura de Feiras e ExposiÃ§Ãµes",
    },
    {
      id: 8,
      category: "Eventos",
      image: withBasePath("/gm-evento-cavalo.jpg"),
      title: "Registros EspontÃ¢neos",
    },
  ],
} as const;
