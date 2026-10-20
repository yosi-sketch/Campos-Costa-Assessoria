---
name: "Campos Costa Assessoria Jurídica"
description: "Leitura editorial clara, serifas expressivas, bronze e fotografias originais."
colors:
  ink: "#202729"
  ink-soft: "#505b5e"
  paper: "#ffffff"
  ivory: "#f6f7f6"
  linen: "#d6dcda"
  brand-50: "#eef1ef"
  brand-100: "#e7ece8"
  brand-200: "#ffe6a0"
  brand-300: "#ffd060"
  brand-400: "#d4ab55"
  brand-500: "#b78a31"
  brand-600: "#95691d"
  brand-700: "#805b25"
  brand-800: "#62471f"
  brand-900: "#263033"
  brand-950: "#172023"
typography:
  display:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(2.8rem, 3.9vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(1.8rem, 2.7vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.85
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.6
rounded:
  button: "2px"
  panel: "2px"
  card: "2px"
  portrait: "2px"
  dialog: "4px"
spacing:
  gutter-mobile: "20px"
  gutter-tablet: "24px"
  gutter-desktop: "32px"
  section-mobile: "54px"
  section-tablet: "64px"
  section-desktop: "88px"
components:
  button-primary:
    backgroundColor: "{colors.brand-950}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "13px 20px"
  button-primary-hover:
    backgroundColor: "{colors.brand-900}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "13px 20px"
---

# Design System: Campos Costa Assessoria Jurídica

## Overview

**Creative North Star: "Direito com clareza, atendimento com cuidado"**

O sistema organiza a presença do escritório como uma publicação editorial clara: grandes serifas, ênfases em bronze sem itálico, superfícies de papel e fotografias fornecidas. O logo dourado e branco permanece integral sem fundo próprio no cabeçalho e sobre o rodapé escuro.

A atualização responde à rejeição explícita do hero escuro e da página percebida como vazia. A referência enviada orienta composição e densidade; os fatos e a identidade permanecem da Campos Costa.

**Key Characteristics:**

- Merriweather com pesos 600/700 e sem itálico com Manrope na leitura e nos controles.
- Papel e cinza mineral predominantes; grafite nas ações e bronze nos detalhes; ouro na marca e nos detalhes sobre escuro.
- Fotografias originais, cartões de leitura e transições discretas entre superfícies.

## Colors

### Primary

O bronze sustenta links, ícones e trechos de destaque sobre claro. A variante profunda indica hover. Ouro e suas variações derivam do emblema; neutros e tons de leitura foram adaptados para contraste. A escala brand reúne metais e neutros, não uma rampa de matiz único.

### Neutral

Papel branco acolhe cartões e navegação; cinza mineral e superfícies minerais próximas separam seções. Tinta principal nos títulos e leitura, tinta suave nos textos auxiliares, linho nas bordas. Grafite na faixa de informações, nas ações, na legenda do retrato e no rodapé.

**The Contraste Contextual Rule.** Usar bronze nas ênfases sobre claro e grafite nas ações; ouro nos detalhes sobre carvão.

## Typography

Merriweather (600/700, somente normal) e Manrope (400/500/600/700) são carregadas por next/font com display swap. Títulos usam peso 700; bronze destaca trechos da mensagem.

H1 segue o display da frontmatter no desktop, com ajustes para 3.35rem abaixo de 1200px, 2.8rem abaixo de 1024px e escala móvel; abaixo de 480px usa 2.25rem. Títulos de seção próximos de 1.85rem no celular. Corpo global de 14px; parágrafos de cartões de atendimento e relatos de 13px, entrelinha 1.95. Títulos de cartões variam entre 20 e 27px conforme função e largura.

**The Ênfase Editorial Rule.** Preservar a relação entre serifa robusta escura e trechos retos em bronze, sem transformar os parágrafos em títulos.

## Layout

Contêiner máximo de 1180px, com margens mínimas de 32px no desktop, 24px abaixo de 1024px e 20px abaixo de 768px. Seções com 88px de espaçamento vertical, reduzidos para 64px e 54px. Cabeçalho sticky de 90px, reduzido para 82px no celular; navegação móvel abaixo de 1024px.

Hero em duas colunas (1.13fr/1fr), distância de 72px e retrato limitado a 460px. Abaixo de 768px, texto e retrato se empilham. A apresentação combina duas fotos editoriais; no celular o texto precede as imagens. Atendimento e relatos usam três colunas no desktop, duas em larguras intermediárias e uma abaixo de 480px. Compromissos em duas colunas; etapas, FAQ e contato combinam introdução e conteúdo, empilhados no celular.

## Elevation & Depth

Bordas de linho e alternância tonal organizam a maior parte da página. Fotografias recebem sombras suaves: cartão (0 14px 38px rgb(48 41 30 / 12%)) e retrato (0 12px 28px rgb(23 32 35 / 12%)). Ações principais são planas, sem sombra; diálogo usa sombra de sobreposição (0 20px 60px rgb(25 23 17 / 25%)).

## Shapes

Botões, cartões e fotografias usam cantos retos de 2px. Avatar de avaliação circular, sem fotografia inventada. Diálogo com raio de 4px. Logo e retrato mantêm proporção integral. Bordas finas e sombras difusas acompanham as superfícies claras.

## Components

### Buttons

Ação principal grafite com texto branco, altura mínima de 48px, ícone vetorial e hover profundo. Secundária branca com borda de linho e hover bronze. Foco visível de 2px e afastamento de 5px; no rodapé, foco ouro.

### Navigation

Cabeçalho branco com logo original sem placa de fundo. Links discretos e CTA grafite; menu móvel fecha por seleção e Escape, devolvendo foco ao botão.

### Cards / Containers

Seis cartões institucionais com ícone vetorial, título serifado, explicação e ação Saiba mais. Dois painéis de compromisso e três etapas numeradas aprofundam o conteúdo. As numerações representam sequência real de atendimento.

### Reviews

Quinze transcrições fornecidas em cartões brancos com autoria. Relatos longos mostram cinco linhas e botão para expandir ou recolher; texto integral preservado. Nota, total e origem temporal identificados como material enviado, sem atualização automática.

### FAQ and Dialogs

FAQ nativo details/summary. Diálogos com WhatsApp contextual, Escape, ciclo e retorno do foco, fundo inert e bloqueio de rolagem. Não há formulário sem destino.

### Contact and Motion

Telefone, Instagram, endereço e link externo para rotas no Google Maps. O painel de visita oferece conteúdo local em vez de depender de incorporação externa vazia. Revelação curta do retrato por clip-path; conteúdo não aguarda rolagem para aparecer. Movimento reduzido desativa animações e transições.

## Do's and Don'ts

- **Do** preservar arquivos originais, proporção da marca, retrato integral e autoria dos relatos.
- **Do** manter foco visível, texto legível, movimento reduzido e hierarquia clara em cada largura.
- **Don't** inventar especialidades, e-mail, horários, atendimento online, experiência, domínio ou resultados.
- **Don't** identificar o profissional das fotos editoriais como Dr. Davi; somente o retrato fornecido o identifica.
- **Don't** reconstruir o logo com texto ou copiar os fatos da referência visual.
