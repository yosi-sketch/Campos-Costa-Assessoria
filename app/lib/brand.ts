// Informações e transcrições fornecidas em 18/10/2026; sem atualização automática.
export const brand = {
  name: "Michelle Morato",
  businessName: "Morato Advocacia",
  specialty: "Direito de Família",
  phone: "(31) 2568-2738",
  phoneDigits: "553125682738",
  // WhatsApp confirmado pelo usuário nesta atualização.
  whatsappDigits: "553125682738",
  address: "Av. João César de Oliveira, 1730 · Sala 104 · Eldorado · Contagem — MG · CEP 32310-000",
  location: "Contagem · Minas Gerais",
  logo: "/morato-advocacia-logo.png",
  portrait: "/michelle-morato.png",
  googleReviewCount: 40,
  googleRating: "5,0",
  instagram: "https://www.instagram.com/michellemoratoadvogada/",
  instagramHandle: "@michellemoratoadvogada",
  googleCid: "16209826547785592380",
};

export const reviews = `https://www.google.com/maps?cid=${brand.googleCid}`;

// Transcrições integrais do material enviado; links levam ao perfil do escritório.
export const testimonials = [
  { name: "frederico luiz", text: "Excelente escritório de advocacia. Está conduzindo o caso do meu irmão e também o meu com transparência, responsabilidade e profissionalismo. Atendimento claro e seguro. Recomendo.", source: reviews },
  { name: "Felipe Couto", text: "Excelente profissional do início ao fim do processo, sempre me prestando esclarecimentos. Recomendo.", source: reviews },
  { name: "Jessica Fontoura", text: "Profissional extremamente qualificada. Se preocupa em atender de forma individualizada, cuidando do cliente com muita excelencia.\nFaz questão simplificar a linguagem complexa do direito, para que o cliente leigo no assunto se sinta de fato seguro com relação ao seu processo.\nSuper indico!", source: reviews },
  { name: "Leonardo Patrick Nutricionista", text: "Recomendo 100%. A Dra. Michelle é extremamente competente, criteriosa e profissional.", source: reviews },
];

export function contactFor(subject?: string) {
  if (!brand.whatsappDigits) return telephone;
  const message = subject
    ? `Olá, Dra. Michelle! Gostaria de informações sobre ${subject}.`
    : "Olá, Dra. Michelle! Gostaria de agendar um atendimento sobre Direito de Família.";
  return `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
export const telephone = `tel:+${brand.phoneDigits}`;
export const contact = contactFor();
export const contactAction = brand.whatsappDigits ? "Fale pelo WhatsApp" : "Ligar para o escritório";
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
