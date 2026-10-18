// Dados e relatos fornecidos pela cliente em 18/10/2026; sem atualização automática.
export const brand = {
  name: "Danielle Maria",
  businessName: "Danielle Maria — Advogada Previdenciarista",
  specialty: "Direito Previdenciário",
  phone: "(34) 99908-9393",
  phoneDigits: "5534999089393",
  whatsappDigits: "5534999089393",
  address: "Rua José de Santana, 1306 · Sala 509 · Centro · Patos de Minas — MG · CEP 38700-052",
  location: "Patos de Minas · Minas Gerais",
  logo: "/danielle-maria-logo.png",
  portrait: "/danielle-maria-institucional.png",
  googleReviewCount: 72,
  googleRating: "5,0",
  instagram: "https://www.instagram.com/daniellemariaadvocacia/",
  instagramHandle: "@daniellemariaadvocacia",
  googleCid: "6512141540918169075",
};

export const reviews = `https://www.google.com/maps?cid=${brand.googleCid}`;

// Transcrições integrais do material enviado; links levam ao perfil do escritório.
export const testimonials = [
  { name: "Andrea Cristine", text: "Excelente trabalho, sempre nos auxiliando com paciência e prestatividade.", source: reviews },
  { name: "Newton Cesar", text: "Equipe atenciosa e atendimento impecável. Fui muito bem recebido e sai confiante diante do que eu vi. São excelentes profissionais.", source: reviews },
  { name: "Giullia Santiago", text: "Fui super bem atendida, esclareceram perfeitamente minhas dúvidas e me ajudaram nas questões que eu precisava e indico demais👏🏻", source: reviews },
  { name: "Maria Helena Beltoldo", text: "Ótimo atendimento e uma excelente experiência. Recomendo.", source: reviews },
];

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Dra. Danielle! Gostaria de informações sobre ${subject}.`
    : "Olá, Dra. Danielle! Gostaria de agendar um atendimento sobre uma questão previdenciária.";
  return `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
