"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Award, BookOpen, Camera, Check, CheckCheck,
  ChevronDown, ClipboardList, FileCheck2, FileSearch, HeartHandshake,
  LockKeyhole, MapPin, Menu, MessageCircle, Phone, Scale, ShieldCheck,
  Star, UsersRound, X,
} from "lucide-react";
import BrandSignature from "./components/BrandSignature";
import { brand, contact, contactFor, maps, reviews, telephone, testimonials } from "./lib/brand";

const services = [
  { icon: MessageCircle, title: "Consulta e orientação", description: "Um espaço para apresentar sua situação, esclarecer dúvidas e compreender os próximos passos.", details: "A consulta começa com a escuta da sua necessidade. Apresente os fatos e suas dúvidas para receber uma orientação que considere o contexto e os documentos disponíveis.", topics: ["Escuta da sua necessidade", "Esclarecimento de dúvidas", "Orientação sobre os próximos passos"] },
  { icon: FileSearch, title: "Análise de documentos", description: "Atenção aos detalhes que ajudam a compreender os fatos e organizar a sua demanda.", details: "Os documentos ajudam a reconstruir os fatos e compreender a situação. No primeiro contato, informe o assunto para que a equipe oriente quais registros reunir para a consulta.", topics: ["Identificação dos documentos pertinentes", "Organização das informações", "Análise individual do contexto"] },
  { icon: ShieldCheck, title: "Orientação preventiva", description: "Informação jurídica para avaliar decisões com cuidado e entender possíveis implicações.", details: "Antes de tomar uma decisão, é possível buscar esclarecimentos sobre suas implicações jurídicas. A orientação depende da análise individual do assunto e das informações apresentadas.", topics: ["Compreensão de direitos e responsabilidades", "Avaliação do contexto da decisão", "Esclarecimento de possíveis implicações"] },
  { icon: Scale, title: "Avaliação de alternativas", description: "Clareza sobre os caminhos que podem ser considerados para a sua situação.", details: "Cada demanda tem suas particularidades. A análise dos fatos permite conversar sobre alternativas, documentos necessários e medidas que podem ser avaliadas, sem promessas de resultado.", topics: ["Análise dos fatos apresentados", "Explicação das alternativas", "Definição dos próximos passos"] },
  { icon: ClipboardList, title: "Organização da demanda", description: "Uma visão compreensível das informações, dos documentos e das etapas do atendimento.", details: "Organizar uma demanda significa reunir informações e alinhar os próximos passos. A equipe pode esclarecer a documentação necessária, o escopo do atendimento e as etapas a considerar.", topics: ["Organização dos fatos e registros", "Alinhamento do escopo do atendimento", "Orientação sobre a documentação"] },
  { icon: HeartHandshake, title: "Acompanhamento jurídico", description: "Comunicação próxima e atenção ao longo do serviço definido para o seu caso.", details: "O acompanhamento é combinado conforme a demanda e o serviço contratado. Converse com o escritório sobre as etapas do atendimento e os canais de comunicação para receber esclarecimentos.", topics: ["Definição do serviço necessário", "Comunicação com o escritório", "Atenção e confidencialidade"] },
];

const faqs = [
  ["Como agendar uma consulta?", "Envie uma mensagem pelo WhatsApp ou ligue para (33) 99811-0480. Conte brevemente o motivo do contato para receber as informações sobre o agendamento."],
  ["Onde fica o escritório?", "Estamos na R. Geraldo Contador, 119, sala 101, Centro, em Inhapim — MG, CEP 35330-000. Entre em contato antes da visita para combinar seu atendimento."],
  ["Quais documentos devo reunir?", "Os documentos variam conforme a situação. No primeiro contato, descreva sua necessidade para receber orientação sobre o que levar à consulta."],
  ["Como saber se o escritório atende à minha demanda?", "Apresente o assunto pelo WhatsApp. A equipe poderá informar sobre o atendimento à sua necessidade e a organização da consulta."],
  ["É possível conversar sobre a modalidade de atendimento?", "Sim. Consulte o escritório pelo WhatsApp para conhecer as modalidades disponíveis e combinar o atendimento adequado à sua situação."],
];

function Stars({ size = 13 }: { size?: number }) {
  return <span className="stars" aria-label="5 de 5 estrelas">{[0,1,2,3,4].map(i => <Star key={i} size={size} fill="currentColor" aria-hidden="true" />)}</span>;
}

function ContactButton({ children = "Converse pelo WhatsApp", className = "", subject }: { children?: React.ReactNode; className?: string; subject?: string }) {
  return <a className={`button button-primary ${className}`} href={subject ? contactFor(subject) : contact} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} aria-hidden="true" /><span>{children}</span><ArrowUpRight size={15} aria-hidden="true" /></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<(typeof services)[number] | null>(null);
  const [expandedReviews, setExpandedReviews] = useState<string[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { setMenuOpen(false); menuButtonRef.current?.focus(); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!activeService) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    const content = contentRef.current;
    document.body.style.overflow = "hidden";
    content?.setAttribute("inert", "");
    dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveService(null);
      if (event.key !== "Tab") return;
      const controls = dialogRef.current?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])');
      if (!controls?.length) return;
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      content?.removeAttribute("inert");
      previousFocus?.focus();
    };
  }, [activeService]);

  const toggleReview = (name: string) => setExpandedReviews(current => current.includes(name) ? current.filter(item => item !== name) : [...current, name]);

  return <>
    <div ref={contentRef}>
      <a href="#inicio" className="skip-link">Ir para o conteúdo</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="header-brand" href="#inicio" aria-label="Campos Costa Assessoria Jurídica — início" onClick={() => setMenuOpen(false)}><BrandSignature /></a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#sobre">O escritório</a><a href="#atendimento">Atendimento</a><a href="#diferenciais">Nosso compromisso</a><a href="#avaliacoes">Avaliações</a><a href="#contato">Contato</a>
          </nav>
          <div className="header-actions"><a className="icon-button instagram-button" href={brand.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Campos Costa"><Camera size={17} /></a><ContactButton className="header-cta">Fale com a equipe</ContactButton></div>
          <button ref={menuButtonRef} className="icon-button menu-toggle" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
        </div>
        {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel">{[["O escritório","#sobre"],["Atendimento","#atendimento"],["Nosso compromisso","#diferenciais"],["Avaliações","#avaliacoes"],["Contato","#contato"]].map(([label,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}<ArrowRight size={15} /></a>)}<ContactButton /></nav>}
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Sua história merece atenção. <em>Seus direitos, uma orientação clara.</em></h1>
              <p className="hero-description">Na <strong>Campos Costa Assessoria Jurídica</strong>, cada atendimento começa pela escuta. Conte com a atenção do <strong>Dr. Davi Oliveira Costa, OAB/MG 171.888</strong>, para compreender sua situação e conversar sobre os próximos passos.</p>
              <div className="hero-buttons"><ContactButton>Fale com a Campos Costa</ContactButton><a className="button button-secondary" href="#atendimento">Conheça o atendimento <ArrowRight size={16} /></a></div>
              <div className="hero-details">
                <a href="#avaliacoes"><Star size={14} fill="currentColor" /><span><strong>5,0 no Google</strong> · 19 avaliações</span></a>
                <span><Award size={15} /> OAB/MG 171.888</span>
                <a href={maps} target="_blank" rel="noopener noreferrer"><MapPin size={15} /> Centro de Inhapim · MG</a>
                <a href={brand.instagram} target="_blank" rel="noopener noreferrer"><Camera size={15} /> {brand.instagramHandle}</a>
              </div>
            </div>
            <div className="hero-visual">
              <figure className="portrait-frame">
                <Image src={brand.portrait} alt="Dr. Davi Oliveira Costa, advogado da Campos Costa, OAB/MG 171.888" width={1254} height={1254} preload sizes="(max-width: 767px) 90vw, (max-width: 1199px) 42vw, 460px" className="hero-portrait" />
                <figcaption className="portrait-caption"><span><strong>Dr. Davi Oliveira Costa</strong><small>Assessoria jurídica · Inhapim, MG</small></span><Scale size={26} strokeWidth={1.3} aria-hidden="true" /></figcaption>
              </figure>
              <a href="#avaliacoes" className="rating-float"><span className="rating-symbol" aria-hidden="true">G</span><span><span className="rating-line"><Stars size={10} /> <strong>5,0</strong><span>/ 5,0</span></span><small>19 avaliações no Google</small></span></a>
            </div>
          </div>
        </section>

        <div className="trust-strip" aria-label="Informações do escritório"><div className="container trust-strip-grid">
          <div><Star size={23} /><span><strong>5,0 no Google</strong><small>19 avaliações no Google</small></span></div>
          <div><MapPin size={23} /><span><strong>Inhapim, MG</strong><small>Escritório no Centro</small></span></div>
          <div><HeartHandshake size={23} /><span><strong>Atendimento próximo</strong><small>Escuta, diálogo e atenção</small></span></div>
          <div><LockKeyhole size={22} /><span><strong>Sigilo e cuidado</strong><small>Respeito à sua história</small></span></div>
        </div></div>

        <section id="sobre" className="section about-section">
          <div className="container about-grid">
            <div className="about-visual">
              <Image src={brand.consultationImage} alt="Profissional durante a análise de documentos no escritório" width={1254} height={1254} sizes="(max-width: 767px) 90vw, 450px" className="about-photo" />
              <Image src={brand.researchImage} alt="Consulta a livros jurídicos durante a preparação do atendimento" width={1254} height={1254} sizes="155px" className="about-research" />
              <div className="about-note"><BookOpen size={24} /><span><strong>Atenção aos detalhes.</strong><small>O cuidado começa antes de cada decisão.</small></span></div>
            </div>
            <div className="about-copy">
              <h2>Mais do que uma demanda. <em>Uma história que merece ser ouvida.</em></h2>
              <p>Há decisões que pedem uma conversa cuidadosa. A <strong>Campos Costa Assessoria Jurídica</strong> é um espaço para apresentar suas dúvidas, compreender o contexto e receber uma orientação clara, com seriedade e respeito.</p>
              <p>Com sede no centro de <strong>Inhapim, Minas Gerais</strong>, o escritório valoriza o atendimento próximo e a comunicação compreensível. O Dr. Davi Oliveira Costa é advogado inscrito na OAB/MG sob o nº 171.888.</p>
              <blockquote className="about-statement">Escutar com atenção. Explicar com clareza. Tratar cada situação com responsabilidade.</blockquote>
              <div className="about-principles"><div><CheckCheck size={19} /><strong>Clareza</strong><small>Informação compreensível</small></div><div><ShieldCheck size={19} /><strong>Seriedade</strong><small>Análise individual do caso</small></div><div><UsersRound size={19} /><strong>Proximidade</strong><small>Diálogo com o escritório</small></div></div>
              <div className="about-links"><ContactButton>Converse com a equipe</ContactButton><a href={telephone}><Phone size={15} /> {brand.phone}</a></div>
            </div>
          </div>
        </section>

        <section id="atendimento" className="section services-section">
          <div className="container">
            <div className="section-intro"><div><h2>Informação para compreender.<br /><em>Orientação para decidir.</em></h2><p>Conheça os pilares do nosso atendimento. O ponto de partida é sempre a sua necessidade, com atenção às particularidades de cada situação.</p></div><p className="section-aside">Selecione um tema para entender como organizar a sua conversa com o escritório.</p></div>
            <div className="services-grid">{services.map(service=>{const Icon=service.icon;return <article className="service-card" key={service.title}><span className="service-icon"><Icon size={23} strokeWidth={1.4} /></span><h3>{service.title}</h3><p>{service.description}</p><button type="button" aria-haspopup="dialog" aria-label={`Saiba mais sobre ${service.title.toLowerCase()}`} onClick={()=>setActiveService(service)}>Saiba mais <ArrowRight size={15} /></button></article>;})}</div>
            <p className="service-footnote"><ShieldCheck size={15} /> O atendimento à sua demanda e o serviço necessário são definidos após contato e análise individual.</p>
          </div>
        </section>

        <section id="diferenciais" className="section commitment-section">
          <div className="container">
            <div className="section-intro"><div><h2>Confiança se constrói com <em>clareza e responsabilidade.</em></h2><p>Uma relação próxima começa quando você entende o atendimento e encontra espaço para ser ouvido.</p></div><ContactButton>Fale com o escritório</ContactButton></div>
            <div className="commitment-grid">
              <article className="commitment-card"><div className="commitment-heading"><FileCheck2 size={26} strokeWidth={1.3} /></div><h3>Seu caso merece atenção aos detalhes.</h3><p>Antes de indicar os próximos passos, é preciso compreender os fatos. Uma conversa cuidadosa e os documentos pertinentes ajudam a organizar a análise.</p><ul><li><Check size={16} /> Escuta da sua necessidade e das suas dúvidas</li><li><Check size={16} /> Atenção ao contexto e à documentação</li><li><Check size={16} /> Explicação das alternativas que podem ser avaliadas</li></ul><a href={contactFor("uma consulta jurídica")} target="_blank" rel="noopener noreferrer">Quero apresentar minha situação <ArrowRight size={15} /></a></article>
              <article className="commitment-card"><div className="commitment-heading"><HeartHandshake size={26} strokeWidth={1.3} /></div><h3>Você participa da conversa com informação.</h3><p>O atendimento deve ser compreensível. Converse com o escritório sobre suas dúvidas, as etapas do serviço e os canais de comunicação para a sua demanda.</p><ul><li><Check size={16} /> Linguagem clara ao explicar o atendimento</li><li><Check size={16} /> Alinhamento sobre os próximos passos</li><li><Check size={16} /> Respeito e confidencialidade das informações</li></ul><a href={contactFor("como funciona o atendimento")} target="_blank" rel="noopener noreferrer">Entenda como funciona <ArrowRight size={15} /></a></article>
            </div>
          </div>
        </section>

        <section id="etapas" className="section process-section">
          <div className="container process-grid"><div><h2>Uma conversa.<br />Um contexto.<br /><em>Um próximo passo.</em></h2><p>Saiba como começar o seu atendimento com a Campos Costa.</p><div className="process-note"><MessageCircle size={23} /><p>Não é preciso ter todas as respostas para entrar em contato. Comece contando o que você precisa.</p><a href={contact} target="_blank" rel="noopener noreferrer">Iniciar uma conversa <ArrowUpRight size={14} /></a></div></div><ol className="steps">
              <li><span>01</span><div><h3>Conte a sua necessidade</h3><p>Fale pelo WhatsApp ou telefone. Apresente brevemente o assunto para receber as informações sobre o agendamento.</p></div></li>
              <li><span>02</span><div><h3>Reúna os documentos</h3><p>A equipe orienta o que pode ser necessário para a consulta. Os registros ajudam a compreender os fatos e a sua situação.</p></div></li>
              <li><span>03</span><div><h3>Converse sobre os caminhos</h3><p>Na consulta, apresente suas dúvidas e conheça os próximos passos que podem ser considerados após a análise individual.</p></div></li>
            </ol></div>
        </section>

        <section id="avaliacoes" className="section reviews-section">
          <div className="container"><div className="section-intro"><div><h2>Quem já confiou, conta.<br /><em>Experiências que dizem muito.</em></h2><p>Profissionalismo, atenção e clareza nas palavras de quem compartilhou sua experiência com a Campos Costa.</p></div><a className="google-summary" href={reviews} target="_blank" rel="noopener noreferrer"><span className="rating-symbol" aria-hidden="true">G</span><span><strong>5,0 <Stars size={12} /></strong><small>19 avaliações no Google</small></span><ArrowUpRight size={17} /></a></div>
          <div className="review-grid">{testimonials.map((testimonial,index)=>{const expanded=expandedReviews.includes(testimonial.name);const long=testimonial.text.length>300;return <figure key={testimonial.name} className="review-card"><Stars size={12} /><blockquote id={`review-${index}`} className={long&&!expanded?"review-excerpt":""}><p>“{testimonial.text}”</p></blockquote>{long&&<button className="review-toggle" aria-expanded={expanded} aria-controls={`review-${index}`} onClick={()=>toggleReview(testimonial.name)}>{expanded?"Recolher relato":"Ler relato completo"}<ChevronDown size={13} className={expanded?"is-expanded":""} /></button>}<figcaption><span className="review-avatar" aria-hidden="true">{testimonial.name.split(" ").slice(0,2).map(n=>n[0]).join("")}</span><span><strong>{testimonial.name}</strong><small>Avaliação no Google</small></span></figcaption></figure>;})}</div>
          <div className="reviews-bottom"><p>Relatos, nota e total de avaliações fornecidos em 20/10/2026. Consulte o Google para informações atualizadas.</p><a className="text-link" href={reviews} target="_blank" rel="noopener noreferrer">Consultar avaliações no Google <ArrowUpRight size={15} /></a></div>
          </div>
        </section>

        <section className="section questions-section"><div className="container questions-grid"><div><h2>Antes da primeira conversa, <em>algumas respostas.</em></h2><p>Se a sua dúvida não está aqui, fale com a equipe pelo WhatsApp.</p><a className="text-link" href={contact} target="_blank" rel="noopener noreferrer">Tire sua dúvida com o escritório <ArrowUpRight size={15} /></a></div><div className="faq-list">{faqs.map(([question,answer])=><details key={question}><summary>{question}<ChevronDown size={17} /></summary><p>{answer}</p></details>)}</div></div></section>

        <section id="contato" className="section contact-section"><div className="container contact-grid"><div className="contact-copy"><h2>O primeiro passo pode ser <em>uma boa conversa.</em></h2><p>Conte o que você precisa e receba as informações para agendar seu atendimento com a Campos Costa.</p><ContactButton>Agende seu atendimento</ContactButton><div className="contact-methods"><a href={telephone}><Phone size={19} /><span><small>Telefone e WhatsApp</small><strong>{brand.phone}</strong></span><ArrowUpRight size={15} /></a><a href={brand.instagram} target="_blank" rel="noopener noreferrer"><Camera size={19} /><span><small>Acompanhe o escritório</small><strong>{brand.instagramHandle}</strong></span><ArrowUpRight size={15} /></a></div></div><div className="office-panel"><div className="office-heading"><MapPin size={25} strokeWidth={1.3} /><div><h3>Estamos no centro de Inhapim.</h3><address>R. Geraldo Contador, 119 · Sala 101<br />Centro · Inhapim — MG · CEP 35330-000</address></div></div><div className="office-visit"><h4>Antes de vir, converse com a equipe.</h4><p>Combine seu atendimento pelo WhatsApp e confirme quais documentos trazer para a primeira conversa.</p><a className="text-link" href={contact} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> Conversar sobre minha visita <ArrowUpRight size={14} /></a></div><div className="office-bottom"><span>Entre em contato antes da sua visita.</span><a className="text-link" href={maps} target="_blank" rel="noopener noreferrer">Como chegar <ArrowUpRight size={14} /></a></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div><BrandSignature /><p>Assessoria jurídica com atenção, clareza e responsabilidade. Inhapim, Minas Gerais.</p><span className="footer-registration">Dr. Davi Oliveira Costa · OAB/MG 171.888</span></div><div><h2>Conheça a Campos Costa</h2><a href="#sobre">O escritório</a><a href="#atendimento">Nosso atendimento</a><a href="#diferenciais">Nosso compromisso</a><a href="#avaliacoes">Avaliações</a></div><div><h2>Converse com o escritório</h2><a href={telephone}><Phone size={14} />{brand.phone}</a><a href={brand.instagram} target="_blank" rel="noopener noreferrer"><Camera size={14} />{brand.instagramHandle}</a><a href={maps} target="_blank" rel="noopener noreferrer"><MapPin size={15} /><span>R. Geraldo Contador, 119 · Sala 101<br />Centro · Inhapim, MG</span></a></div></div><div className="container footer-bottom"><p>© {new Date().getFullYear()} Campos Costa Assessoria Jurídica.</p><p>Conteúdo informativo. Cada situação depende de análise individual.</p></div></footer>
    </div>
    {activeService&&<div className="dialog-backdrop" onClick={()=>setActiveService(null)}><section ref={dialogRef} className="service-dialog" role="dialog" aria-modal="true" aria-labelledby="service-dialog-title" onClick={e=>e.stopPropagation()}><button className="dialog-close icon-button" aria-label="Fechar detalhes do atendimento" onClick={()=>setActiveService(null)}><X size={21} /></button><span className="service-icon"><activeService.icon size={25} strokeWidth={1.4} /></span><h2 id="service-dialog-title">{activeService.title}</h2><p>{activeService.details}</p><ul>{activeService.topics.map(topic=><li key={topic}><Check size={17} />{topic}</li>)}</ul><ContactButton subject={activeService.title.toLowerCase()}>Converse sobre este atendimento</ContactButton></section></div>}
  </>;
}
