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
  locationDisplay: "Av. Getúlio Vargas, Hulha Negra - RS, 96460-000",
  tagline: "Excelência • Sofisticação • Emoção",
  heroTitle: "Onde momentos se tornam eternos",
  heroDescription:
    "Fotografia de eventos com olhar sensível para casamentos, formaturas, rodeios, feiras e ensaios especiais no sul do Rio Grande do Sul.",
  aboutTitle: "Gabriel Mello",
  aboutParagraphs: [
    "Sou Gabriel Mello, fotógrafo, e transformei a fotografia em propósito: registrar momentos únicos com sensibilidade, presença e memória.",
    "Com base em Hulha Negra, uno direção leve, olhar atento e acabamento cuidadoso para entregar registros com identidade, elegância e emoção.",
  ],
  stats: [
    { value: "115", label: "publicações autorais no perfil" },
    { value: "20", label: "destaques públicos no Instagram" },
    { value: "+1,8 mil", label: "seguidores acompanhando o trabalho" },
    { value: "RS", label: "cobertura em Hulha Negra e região" },
  ],
  services: [
    {
      title: "Casamentos",
      whatsappMessage:
        "Olá, Gabriel Mello! Gostaria de solicitar um orçamento para cobertura de casamento. Podem me passar mais informações?",
      description:
        "Cobertura sensível do making of à celebração, com atenção aos detalhes, aos encontros e à emoção real de cada etapa.",
      features: [
        "Cerimônia e recepção",
        "Retratos do casal",
        "Registros espontâneos",
        "Entrega pensada para reviver o dia",
      ],
    },
    {
      title: "Formaturas",
      whatsappMessage:
        "Olá, Gabriel Mello! Tenho interesse em um orçamento para formatura. Queria saber como funciona a cobertura.",
      description:
        "Ensaios e coberturas que valorizam a conquista, a presença e a identidade de cada formando em um momento único.",
      features: [
        "Ensaios externos",
        "Sessões individuais ou em grupo",
        "Colação e celebração",
        "Estética elegante e atual",
      ],
    },
    {
      title: "Eventos e Rodeios",
      whatsappMessage:
        "Olá, Gabriel Mello! Quero solicitar um orçamento para cobertura de evento ou rodeio. Podem me passar os detalhes?",
      description:
        "Cobertura fotográfica para feiras, exposições, rodeios e eventos regionais, registrando público, bastidores e atmosfera.",
      features: [
        "Cobertura oficial",
        "Arena, palco e bastidores",
        "Material para divulgação",
        "Olhar técnico para grandes eventos",
      ],
    },
    {
      title: "Ensaios Especiais",
      whatsappMessage:
        "Olá, Gabriel Mello! Tenho interesse em um ensaio especial e queria pedir um orçamento. Podem falar comigo?",
      description:
        "Gestante, família, infantil e datas temáticas com direção leve e natural para criar memórias afetivas e autênticas.",
      features: [
        "Gestante",
        "Família",
        "Infantil e sazonal",
        "Condução tranquila e espontânea",
      ],
    },
  ],
  values: [
    {
      title: "Emoções reais",
      subtitle: "Meu olhar",
      content:
        "Fotografar vai além da imagem. É capturar emoções verdadeiras, detalhes que passam despercebidos e histórias que merecem ser lembradas para sempre.",
    },
    {
      title: "Experiência completa",
      subtitle: "Meu compromisso",
      content:
        "Cada cliente carrega uma história. Meu compromisso é entregar mais do que fotos: é oferecer uma experiência com profissionalismo, sensibilidade e excelência.",
    },
    {
      title: "Memória enquanto acontece",
      subtitle: "Minha presença",
      content:
        "Enquanto você vive o momento, eu cuido da memória com discrição, timing e atenção ao que faz cada evento ser único.",
    },
  ],
  portfolioCategories: ["Todos", "Casamentos", "Ensaios", "Formaturas", "Eventos"],
  portfolioItems: [
    {
      id: 1,
      category: "Casamentos",
      image: withBasePath("/gm-casamento.jpg"),
      title: "Histórias de Amor",
    },
    {
      id: 2,
      category: "Casamentos",
      image: withBasePath("/gm-noiva.jpg"),
      title: "Elegância em Cada Detalhe",
    },
    {
      id: 3,
      category: "Ensaios",
      image: withBasePath("/gm-gestante.jpg"),
      title: "Memórias que Começam Antes",
    },
    {
      id: 4,
      category: "Ensaios",
      image: withBasePath("/gm-pascoa.jpg"),
      title: "Família e Datas Especiais",
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
      title: "Rodeio e Tradição",
    },
    {
      id: 7,
      category: "Eventos",
      image: withBasePath("/gm-tratorfest.jpg"),
      title: "Cobertura de Feiras e Exposições",
    },
    {
      id: 8,
      category: "Eventos",
      image: withBasePath("/gm-evento-cavalo.jpg"),
      title: "Registros Espontâneos",
    },
    {
      id: 9,
      category: "Eventos",
      image: withBasePath("/gm-evento-corte-01.jpg"),
      title: "Desfile e Presença de Palco",
    },
    {
      id: 10,
      category: "Eventos",
      image: withBasePath("/gm-evento-corte-02.jpg"),
      title: "Elegância em Movimento",
    },
    {
      id: 11,
      category: "Eventos",
      image: withBasePath("/gm-evento-corte-05.jpg"),
      title: "Passarela e Cobertura Social",
    },
    {
      id: 12,
      category: "Eventos",
      image: withBasePath("/gm-evento-corte-07.jpg"),
      title: "Retratos de Evento ao Vivo",
    },
    {
      id: 13,
      category: "Eventos",
      image: withBasePath("/gm-evento-corte-08.jpg"),
      title: "Corte e Destaques da Noite",
    },
  ],
} as const;
