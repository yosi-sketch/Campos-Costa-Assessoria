"use client";

import Image from "next/image";
import { useEffect, useState, useRef, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageCircle,
  MapPin,
  Menu,
  Scale,
  HeartHandshake,
  ShieldCheck,
  Camera,
  Star,
  X,
} from "lucide-react";
import BrandSignature from "./components/BrandSignature";
import GlowingButton from "./components/GlowingButton";
import { brand, testimonials, contact, contactAction, telephone, contactFor, maps, reviews } from "./lib/brand";

function ContactMark({size = 16, strokeWidth = 1.8}: {size?: number; strokeWidth?: number}) {
  const Icon = brand.whatsappDigits ? MessageCircle : Phone;
  return <Icon size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};

// Temas de orientação informados pela cliente, sem atribuição de especializações.
const areas = [
  {
    title: "Divórcio e partilha", icon: Scale,
    summary: "Clareza para encerrar um ciclo e compreender as decisões sobre o patrimônio construído em conjunto.",
    details: "O fim de uma relação envolve escolhas pessoais e patrimoniais. O atendimento começa pela escuta da sua situação e pela análise dos documentos, para explicar os caminhos possíveis para o divórcio e a partilha de bens.",
    topics: ["Orientação sobre divórcio", "Análise da situação patrimonial", "Partilha de bens"],
  },
  {
    title: "Alimentos", icon: ShieldCheck,
    summary: "Atenção às necessidades da família e às responsabilidades de cada pessoa.",
    details: "Dúvidas sobre pensão alimentícia merecem uma conversa cuidadosa sobre a realidade de quem precisa e de quem contribui. Na consulta, as informações e os documentos apresentados ajudam a compreender a demanda e os próximos passos.",
    topics: ["Orientação sobre pensão alimentícia", "Análise das necessidades e responsabilidades", "Organização de documentos para a consulta"],
  },
  {
    title: "Guarda e convivência", icon: HeartHandshake,
    summary: "Cuidado com os vínculos familiares e com as decisões que fazem parte da vida dos filhos.",
    details: "Questões de guarda e visitas envolvem a rotina e os vínculos da família. O atendimento busca compreender o contexto, ouvir suas dúvidas e explicar as alternativas para organizar a convivência com atenção a cada situação.",
    topics: ["Orientação sobre guarda", "Convivência familiar e visitas", "Análise individual do contexto familiar"],
  },
];

function Heading({
  children,
  description,
  light = false,
}: {
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">

      <h2
        className={
          light
            ? "font-display text-4xl leading-[1.07] tracking-[-0.035em] text-brand-50 sm:text-5xl lg:text-[3.55rem]"
            : "font-display text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-brand-100"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] =
    useState<(typeof areas)[number] | null>(null);

  const dialogRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (!activeArea) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const content = contentRef.current;
    content?.setAttribute("inert", "");
    const timer = window.setTimeout(() => dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus(), 0);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
      if (event.key !== "Tab") return;
      const controls = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
      content?.removeAttribute("inert");
      previousFocus?.focus();
    };
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-ivory text-ink">
        <div ref={contentRef}>
        <a href="#inicio" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-paper focus:p-4 focus:text-ink">Ir para o conteúdo</a>
        <header className="brand-header sticky top-0 z-40 border-b border-linen bg-paper text-ink">
          <div className="mx-auto flex h-[104px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[112px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Morato Advocacia — início"
              onClick={closeMenu}
              className="shrink-0"
            >
              <BrandSignature />
            </a>
            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#atuacao">
                Atendimento
              </a>
              <a className="nav-link" href="#sobre">
                Sobre
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações
              </a>
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </nav>
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={contact}
                target="_blank"
                rel="noreferrer"
                aria-label={`${contactAction} — Morato Advocacia`}
                className="grid size-11 place-items-center rounded-full border border-ink/20 text-brand-700 transition-colors hover:border-brand-700 hover:bg-brand-50"
              >
                <ContactMark size={17} strokeWidth={1.7} />
              </a>
              <GlowingButton
                href={contact}
                target="_blank"
                size="sm"
                className="rounded-sm"
              >
                WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 shrink-0 place-items-center rounded-sm border border-ink/20 text-brand-700 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="absolute inset-x-0 top-full overflow-hidden border-b border-ink/10 bg-ivory px-6 lg:hidden"
              >
                <div className="mx-auto flex max-h-[calc(100dvh-96px)] max-w-7xl flex-col gap-1 overflow-y-auto py-4 sm:max-h-[calc(100dvh-112px)]">
                  {[
                    ["Início", "#inicio"],
                    ["Atendimento", "#atuacao"],
                    ["Sobre", "#sobre"],
                    ["Avaliações no Google", "#avaliacoes"],
                    ["Contato", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm text-ink-soft transition-colors hover:text-brand-700"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-300 px-5 py-3.5 text-sm font-semibold text-ink"
                    href={contact}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <ContactMark size={15} /> {contactAction}
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <section
          id="inicio"
          className="brand-hero relative isolate overflow-hidden scroll-mt-28 border-b border-brand-300/20 bg-brand-950 text-white"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[650px] lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-12 lg:py-12">
            <motion.div
              initial={false}
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.h1
                variants={reveal}
                className="max-w-[720px] font-display text-[2.75rem] leading-[1.1] tracking-[-0.025em] text-brand-50 sm:text-[3.6rem] lg:text-[4.2rem]"
              >
                Sua família, sua história.{" "}
                <span className="text-brand-300">Um novo caminho, com cuidado.</span>
              </motion.h1>
              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-brand-100 sm:text-base sm:leading-8"
              >
                Direito de Família com Michelle Morato. Orientação em divórcio, alimentos, guarda, convivência e partilha, com estratégia jurídica e acolhimento em cada decisão.
              </motion.p>
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={contact}
                  target="_blank"
                  size="lg"
                  className="rounded-sm"
                >
                  <ContactMark size={17} /> {contactAction}
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-brand-100 transition-colors hover:text-brand-300"
                >
                  Áreas de atuação{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-brand-300/20 pt-5 text-xs text-brand-100"
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-brand-300" />
                  {brand.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MessageCircle size={15} className="text-brand-300" />
                  Presencial e online
                </span>
                <a href="#avaliacoes" className="inline-flex items-center gap-2 py-2 text-sm text-brand-300 underline underline-offset-4">
                  <Star size={15} fill="currentColor" aria-hidden="true" /> {brand.googleReviewCount} avaliações no Google
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[360px] sm:max-w-[390px] lg:ml-auto lg:mr-0"
            >
              <figure className="hero-signature border border-brand-300/30 p-3">
                <Image
                  src={brand.portrait}
                  alt="Michelle Morato, advogada de Direito de Família, sentada no escritório"
                  width={667}
                  height={828}
                  preload
                  sizes="(max-width: 639px) 90vw, 390px"
                  className="h-auto w-full"
                />
                <figcaption className="flex flex-col gap-2 px-2 pb-2 pt-5 text-center leading-6 text-brand-200">
                  <span className="font-display text-2xl text-brand-100">Estratégia jurídica com acolhimento.</span>
                  <span className="text-xs">Direito de Família · Contagem, MG</span>
                </figcaption>
              </figure>
            </motion.div>
          </div>
        </section>

        <section
          aria-label="Informações de atendimento"
          className="border-b border-ink/10 bg-paper/60"
        >
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["Atenção", "Escuta e análise do seu caso"],
              ["Proximidade", "Presencial e online"],
              ["Clareza", "Orientação em cada etapa"],
            ].map(([value, label], index) => (
              <div
                key={value}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-display text-2xl text-brand-700 sm:text-[1.7rem]">
                  {value}
                </span>
                <span className="max-w-[145px] text-xs leading-5 text-ink-soft">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="atuacao"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading

                description="Da reorganização da vida a dois ao cuidado com os filhos. Conheça os assuntos em que a Dra. Michelle pode orientar você."
              >
                Orientação para o que{" "}
                <span className="text-brand-700">importa para você.</span>
              </Heading>
              <p className="max-w-[250px] pb-1 text-xs leading-6 text-ink-soft">
                Cada situação tem sua história. A análise individual é o ponto de partida para compreender o seu caso.
              </p>
            </motion.div>
            <motion.div
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 divide-y divide-ink/15 border-y border-ink/15"
            >
              {areas.map((area) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.title}
                    variants={reveal}
                    className="group grid items-start gap-5 py-8 sm:grid-cols-[48px_1fr_auto] sm:gap-7 sm:py-9"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                        <Icon size={21} strokeWidth={1.5} />
                      </span>
                    </div>
                    <div>
                    <h3 className="max-w-xl font-display text-[1.55rem] sm:text-[1.8rem] leading-tight text-ink">
                      {area.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-7 text-ink-soft">
                      {area.summary}
                    </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      aria-haspopup="dialog"
                      aria-label={`Saiba mais sobre ${area.title.toLowerCase()}`}
                      className="group/link inline-flex min-h-11 w-fit items-center gap-2 text-xs font-semibold text-brand-800 hover:text-brand-700 sm:self-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
                    >
                      Saiba mais{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="sobre" className="scroll-mt-28 bg-paper py-20 sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-12">
            <figure className="about-signature mx-auto w-full max-w-[420px] border border-linen bg-ivory px-7 py-12 sm:px-10 sm:py-16 lg:mx-0">
              <Image src={brand.logo} alt={brand.businessName} width={2172} height={724} sizes="(max-width: 639px) 80vw, 340px" className="h-auto w-full" />
              <figcaption className="mt-10 border-t border-linen pt-6 text-center text-sm leading-6 text-brand-700">Michelle Morato · Direito de Família<br />Contagem, Minas Gerais</figcaption>
            </figure>
            <div>
              <Heading>Clareza para orientar.{" "}<span className="text-brand-700">Sensibilidade para acolher.</span></Heading>
              <h3 className="mt-7 font-display text-3xl text-brand-800">Dra. Michelle Morato</h3>
              <p className="mt-2 text-sm font-medium text-ink-soft">Advogada de família em Contagem, Minas Gerais</p>
              <p className="mt-6 max-w-xl text-base leading-8 text-ink-soft">Michelle Morato atua em Direito de Família, com atenção a questões de divórcio, alimentos, guarda, visitas e partilha. Na Morato Advocacia, estratégia jurídica e acolhimento caminham juntos.</p>
              <p className="mt-4 max-w-xl text-base leading-8 text-ink-soft">Cada família tem sua história. O atendimento presencial em Eldorado, Contagem, ou online é um espaço para ouvir você, compreender suas dúvidas e explicar os caminhos possíveis com clareza e atenção.</p>
              <a href={contact} target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex min-h-11 items-center gap-2 border-b border-brand-700/40 py-2 text-sm font-semibold text-brand-800 transition-colors hover:text-brand-700">Conheça o atendimento <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 lg:px-12">
            <Heading

              light
              description="Decisões sobre seus direitos merecem informação e cuidado. Do primeiro contato ao acompanhamento, entenda como funciona o atendimento."
            >
              Clareza para compreender cada{" "}
              <span className="text-brand-200">etapa.</span>
            </Heading>
            <motion.div
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/15"
            >
              {[
                [
                  "Primeiro, a sua história",
                  "Entre em contato com o escritório e receba as informações para agendar seu atendimento presencial ou online com a Dra. Michelle.",
                ],
                [
                  "Depois, os documentos",
                  "Os documentos indicados para a sua demanda ajudam a compreender os fatos. A orientação sobre o que reunir acontece no agendamento.",
                ],
                [
                  "Um caminho compreensível",
                  "Você recebe explicações sobre as alternativas, os próximos passos e o acompanhamento da sua demanda, com atenção e sigilo.",
                ],
              ].map(([title, description]) => (
                <motion.div
                  key={title}
                  variants={reveal}
                  className="py-6 first:pt-0 sm:py-7"
                >
                  <div>
                    <h3 className="font-display text-2xl">{title}</h3>
                    <p className="mt-2 max-w-lg text-base leading-7 text-brand-100">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-brand-50 py-20 sm:py-24" aria-labelledby="questions-title">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
            <h2 id="questions-title" className="font-display text-3xl leading-tight text-ink sm:text-4xl">Antes da nossa primeira conversa.</h2>
            <div className="divide-y divide-ink/15 border-y border-ink/15">
              {[
                ["Como funciona o primeiro contato?", `Envie uma mensagem pelo WhatsApp ou ligue para ${brand.phone} para receber informações sobre o agendamento e os documentos iniciais necessários.`],
                ["Onde fica o escritório?", `O escritório fica na ${brand.address}. Entre em contato para combinar sua visita.`],
                ["O atendimento pode ser online?", "Sim. A Morato Advocacia realiza atendimentos presenciais e online. Entre em contato para combinar a modalidade e agendar sua conversa."],
                ["Quais situações posso apresentar?", "Você pode trazer dúvidas sobre divórcio, pensão alimentícia, guarda, visitas e partilha. O primeiro contato ajuda a organizar o agendamento e a documentação para sua consulta."],
                ["Quais documentos devo separar?", "Os documentos variam conforme o assunto. Durante o agendamento, informe brevemente sua dúvida para receber orientação sobre os documentos pertinentes à consulta."],
              ].map(([question, answer]) => (
                <details key={question} className="group py-6">
                  <summary className="cursor-pointer text-base font-semibold text-ink marker:text-brand-700">{question}</summary>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-ink-soft">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="avaliacoes"
          className="reviews-section scroll-mt-24 border-y border-brand-300/20 bg-brand-900 py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <Heading light description="Experiências reais de quem confiou seu atendimento ao escritório. Relatos publicados no Google, com autoria preservada.">
                A confiança se constrói{" "}
                <span className="text-brand-300">em cada atendimento.</span>
              </Heading>
              <a href={reviews} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 w-fit shrink-0 flex-col items-start gap-3 border-b border-brand-300/30 pb-4 text-brand-100 transition-colors hover:text-brand-300">
                <span className="inline-flex items-center gap-3 font-display text-2xl"><Star size={20} fill="currentColor" aria-hidden="true" /> {brand.googleRating} no Google</span>
                <span className="inline-flex items-center gap-2 text-sm">{brand.googleReviewCount} avaliações no Google <ArrowUpRight size={15} aria-hidden="true" /></span>
              </a>
            </div>
            <div id="review-list" className="mt-12 grid gap-px border border-brand-300/20 bg-brand-300/20 md:grid-cols-2 lg:grid-cols-2">
              {testimonials.map(testimonial => (
                <figure key={testimonial.name} className="flex min-w-0 flex-col justify-between gap-8 bg-brand-900 px-6 py-8 sm:px-8 sm:py-10">
                  <div>
                    <blockquote className="mt-6 text-base leading-8 text-brand-100"><p>“{testimonial.text}”</p></blockquote>
                  </div>
                  <figcaption className="border-t border-brand-300/15 pt-5">
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <a href={testimonial.source} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex min-h-11 items-center gap-2 text-xs text-brand-200 underline-offset-4 hover:underline">Ver perfil no Google<ArrowUpRight size={12} aria-hidden="true" /></a>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <p className="max-w-md text-xs leading-6 text-brand-200">
                Relatos e total de avaliações enviados em 18/10/2026. Consulte o perfil no Google para informações atualizadas.
              </p>

            </div>
          </div>

        </section>

        <section
          id="contato"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading

                description="Tem dúvidas sobre uma questão de família? Fale com o escritório para agendar seu atendimento com a Dra. Michelle, presencial ou online."
              >
                Um primeiro contato com{" "}
                <span className="text-brand-700">tranquilidade.</span>
              </Heading>
              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={contact}
                  target="_blank"
                  size="lg"
                  className="rounded-sm"
                >
                  <ContactMark size={17} /> {contactAction}
                </GlowingButton>
                <a href={telephone} className="inline-flex min-h-11 items-center gap-2 text-sm text-brand-700 hover:text-brand-800"><Phone size={16} /> Ligue: {brand.phone}</a>
                <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 py-2 text-sm text-brand-700 hover:text-brand-800"><Camera size={16} /> {brand.instagramHandle}</a>
              </div>
            </div>
            <div className="relative overflow-hidden border border-ink/10 bg-paper p-7 sm:p-10">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <MapPin size={21} strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink">Encontre o escritório em Contagem</h3>
                </div>
              </div>
              <p className="mt-6 text-sm font-semibold text-brand-700">Morato Advocacia · Eldorado</p>
              <address className="mt-2 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                {brand.address}
              </address>
              <div className="my-7 h-px bg-ink/10" />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Entre em contato para agendar sua visita.
                </p>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  Ver no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-300 px-5 py-14 text-ink sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
                O primeiro passo é conversar.
              </h2>
            </div>
            <a
              href={contact}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-11 w-fit shrink-0 items-center gap-3 rounded-sm bg-brand-950 px-6 py-4 text-sm font-semibold text-brand-100 transition-colors hover:bg-brand-900"
            >
              {contactAction} <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <footer className="brand-footer bg-brand-950 px-5 py-12 text-brand-100 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <div className="inline-flex max-w-full bg-ivory px-4 py-3">
                <BrandSignature />
              </div>
              <p className="mt-4 max-w-xs text-xs leading-6 text-ink-soft">
                Direito de Família com estratégia jurídica e acolhimento. Atendimento presencial em Contagem e online.
              </p>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-ink-soft">
                <a className="footer-link" href="#atuacao">
                  Áreas de atuação
                </a>
                <a className="footer-link" href="#sobre">
                  Conheça a Michelle
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Perfil no Google
                </a>
                <a className="footer-link" href="#contato">
                  Contato e endereço
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                Informações
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-ink-soft">
                <a
                  href={telephone}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={14} /> {brand.phone}
                </a>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  {brand.address}
                </a>
                <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="footer-link inline-flex items-center gap-2"><Camera size={14} /> {brand.instagramHandle}</a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-ink/15 pt-5 text-[10px] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {brand.businessName}. Todos os direitos
              reservados.
            </p>
            <p>
              Conteúdo informativo. Cada situação deve ser analisada
              individualmente.
            </p>
          </div>
        </footer>

        </div>
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-ink/55 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90dvh] w-full overflow-y-auto rounded-t-2xl bg-ivory p-7 shadow-card sm:max-w-xl sm:rounded-sm sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes do atendimento"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:text-brand-700"
                >
                  <X size={18} />
                </button>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-display text-[1.7rem] leading-tight text-ink sm:text-3xl"
                >
                  {activeArea.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>
                <ul className="mt-6 space-y-3">
                  {activeArea.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-3 text-sm leading-6 text-ink"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-700" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <GlowingButton
                  href={contactFor(activeArea.title.toLowerCase())}
                  target="_blank"
                  size="md"
                  className="mt-8 w-full rounded-sm sm:w-auto"
                >
                  <ContactMark size={15} /> {contactAction}
                  <ArrowUpRight size={15} />
                </GlowingButton>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
