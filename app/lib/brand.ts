// Dados e relatos fornecidos pela cliente em 18/10/2026. Sem atualização automática.
export const brand = {
  name: "Heloísa de Almeida",
  businessName: "Heloísa de Almeida — Advogada",
  specialty: "Direito do Trabalho, Previdenciário e de Família",
  phone: "(35) 99886-8578",
  phoneDigits: "5535998868578",
  whatsappDigits: "5535998868578",
  address: "Rua da Saudade, 180 · Sala 02 · Centro · Andradas — MG · CEP 37938-014",
  location: "Andradas · Minas Gerais",
  logo: "/moia-advogados-logo.png",
  portrait: "/heloisa-almeida-retrato.png",
  aboutPortrait: "/heloisa-almeida-sobre.png",
  googleReviewCount: 10,
  instagram: "https://www.instagram.com/heloalmeida.adv/",
  instagramHandle: "@heloalmeida.adv",
  googleCid: "2661713746485173089",
};

// Os quatro relatos enviados pela cliente; não representam o total de avaliações.
export const testimonials = [
  { name: "Leonardo Inácio", text: "Muito atenciosa e profissional.", source: "https://www.google.com/maps/contrib/117542393870028232072/reviews?hl=pt-BR" },
  { name: "Thais cristina da silva Silva", text: "Ótima super atenciosa ... recomendo...", source: "https://www.google.com/maps/contrib/101608279190204830609/reviews?hl=pt-BR" },
  { name: "Flávia Teodoro Vicente", text: "Excelente profissional ! Sucesso e mais sucesso!", source: "https://www.google.com/maps/contrib/111891816554094840802/reviews?hl=pt-BR" },
  { name: "Fa Aleixo", text: "Profissional de excelência!!", source: "https://www.google.com/maps/contrib/105715044277237229699/reviews?hl=pt-BR" },
];

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Dra. Heloísa! Gostaria de informações sobre ${subject}.`
    : "Olá, Dra. Heloísa! Gostaria de informações para agendar um atendimento jurídico.";
  return `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const reviews = `https://www.google.com/maps?cid=${brand.googleCid}`;
