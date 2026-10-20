// Dados e relatos enviados em 20/10/2026; sem atualização automática.
export const brand = {
  name: "Dr. Davi Oliveira Costa",
  businessName: "Campos Costa Assessoria Jurídica",
  specialty: "Assessoria Jurídica",
  registration: "OAB/MG 171.888",
  phone: "(33) 99811-0480",
  phoneDigits: "5533998110480",
  whatsappDigits: "5533998110480",
  address: "R. Geraldo Contador, 119 · Sala 101 · Centro · Inhapim — MG · CEP 35330-000",
  location: "Inhapim · Minas Gerais",
  logo: "/campos-costa-logo.png",
  portrait: "/davi-oliveira-costa.png",
  consultationImage: "/campos-costa-atendimento.png",
  researchImage: "/campos-costa-pesquisa.png",
  googleReviewCount: 19,
  googleRating: "5,0",
  instagram: "https://www.instagram.com/camposcosta.adv/",
  instagramHandle: "@camposcosta.adv",
};
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const reviews = maps;
// Transcrições fornecidas pelo cliente; sem inventar datas, fotos ou URLs individuais.
export const testimonials = [
  { name: "Bernardo Santana", text: "Profissionais altamente capacitados e dedicados, que oferecem um serviço jurídico de qualidade impecável. Com uma abordagem centrada no cliente e um profundo conhecimento das leis, eles superam as expectativas em cada caso. Confiei neles para lidar com questões legais complexas e sua expertise e comprometimento foram além do esperado. Recomendo fortemente Campos Costa a todos que buscam resultados eficazes e uma parceria de confiança no mundo jurídico.", source: reviews },
  { name: "Bruno Coutinho", text: "O escritório Campos Costa é composto por profissionais que demonstram um amplo conhecimento jurídico, capazes de lidar até mesmo com as questões mais complexas. A capacidade dos profissionais é verdadeiramente impressionante, e o tratamento especial que oferecem, transmite toda a credibilidade que possuem. São pessoas de elevado caráter, que proporcionam um serviço, atendimento e acompanhamento excepcionais.\nObrigado por tudo que fizeram a mim e minha família!", source: reviews },
  { name: "Rodrigo Araújo", text: "Recomendo fortemente Dr Davi e Dr Eduardo como advogados excepcionais. Valorizo muito o cuidado e descrição com que tratam cada pessoa. Percebo que a confiança, seriedade e comprometimento sejam fatores notáveis para que ofereçam assistência jurídica de alta qualidade.", source: reviews },
  { name: "Vitória Dafne Vieira Inácio", text: "O conhecimento jurídico demonstrado pelos advogados é impressionante. Recomendo a Campos Costa a qualquer pessoa que esteja procurando por serviços jurídicos de alta qualidade e um suporte excepcional!!!", source: reviews },
  { name: "Maria Alice Carvalho", text: "Muito grata pelo profissionalismo prestado, obrigada Campos Costa por conseguirem exercer o trabalho de vocês com tanta responsabilidade", source: reviews },
  { name: "Gisele Muniz de Andrade", text: "Serviço excepcional! Profissionais íntegros, acessíveis, competentes… Recomendo muito!!", source: reviews },
  { name: "Lídia Fernandes Miranda", text: "Excelente serviço, profissionais bem capacitados e educados. Indico a todos", source: reviews },
  { name: "Breno Arêdes", text: "Ótimo atendimento, profissionalismo excepcional, comunicação transparente e objetiva. Recomendo.", source: reviews },
  { name: "Isadora Souza", text: "Melhor escritório de advocacia da cidade. Super indico o trabalho dos queridos Davi e Eduardo.", source: reviews },
  { name: "Caio Coutinho", text: "Profissionais de excelência, atendimento de primeira, recomendo para todos!", source: reviews },
  { name: "Aline Paula Alves", text: "Excelência no serviço prestado, atendimento de forma ágil e eficiente.", source: reviews },
  { name: "Mysson", text: "Atendimento de excelência e competência. Top!", source: reviews },
  { name: "Marlon Fernandes", text: "Melhor escritório da região", source: reviews },
  { name: "Viviane Reis", text: "Ótimos profissionais", source: reviews },
  { name: "Cleber Penini", text: "Profissionais íntegros.", source: reviews },
];
export function contactFor(subject?: string) {
  const message = subject
    ? `Olá, Campos Costa! Gostaria de informações sobre ${subject}.`
    : "Olá, Campos Costa! Gostaria de agendar um atendimento jurídico.";
  return `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
export const telephone = `tel:+${brand.phoneDigits}`;
export const contact = contactFor();
export const contactAction = "Fale pelo WhatsApp";
