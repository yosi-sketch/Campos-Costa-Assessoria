---
name: "Heloísa de Almeida — Advogada"
description: "Preto quente, champanhe e marfim; presença clássica com escuta e clareza."
colors:
  ink: "#29251f"
  ink-soft: "#655e53"
  paper: "#fffdf8"
  ivory: "#f8f5ef"
  linen: "#dfd5c4"
  brand-50: "#f1eadd"
  brand-100: "#ece1cd"
  brand-200: "#ead4a6"
  brand-300: "#d8b87c"
  brand-400: "#c9a25f"
  brand-500: "#c09050"
  brand-600: "#9a783e"
  brand-700: "#76572d"
  brand-800: "#584123"
  brand-900: "#2a251e"
  brand-950: "#191713"
  gold-border: "rgb(216 184 124 / 40%)"
  gold-divider: "rgb(216 184 124 / 25%)"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "4.2rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  display-tablet:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "3.6rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  display-mobile:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "2.75rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "3.55rem"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  headline-tablet:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  headline-mobile:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "1.8rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "28px"
  body-spacious:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "32px"
  intro:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "28px"
  small:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "24px"
  metadata:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: "15px"
  label:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "20px"
rounded:
  sm: "0.25rem"
  modal-mobile: "1rem"
  full: "9999px"
spacing:
  gutter-mobile: "1.25rem"
  gutter-tablet: "2rem"
  gutter-desktop: "3rem"
  section-mobile: "5rem"
  section-tablet: "7rem"
  section-desktop: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.brand-300}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.875rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-200}"
    textColor: "{colors.ink}"
---

# Design System: Heloísa de Almeida

## Overview

**Creative North Star: "Escuta com presença"**

Logo dourado Móia Advogados, superfícies de preto quente e leitura em marfim para uma advocacia próxima em Andradas. A identidade combina contraste editorial com contato direto.

**Key Characteristics:**

- Bodoni Moda nos títulos e Source Sans 3 na leitura e nos controles.
- Dourado nas ações sobre preto quente; bronze profundo nos links sobre claro.
- Superfícies planas, divisórias finas e dois retratos fornecidos.

## Colors

Paleta refinada: preto quente dá profundidade ao logo; champanhe suaviza o dourado nas ações; bronze preserva a leitura sobre marfim. Avaliações usam um escuro mais elevado (brand-900), enquanto a faixa final em champanhe encerra o percurso com uma ação em preto quente.

Primária: brand-300 nas ações, brand-200 no hover. Bronze brand-700/800 nos destaques sobre claro. Neutros: brand-950 no cabeçalho, hero, etapas e rodapé; brand-900 nos relatos; ivory e paper nas áreas de leitura; ink e ink-soft para hierarquia textual.

**The Contrast Rule.** Usar bronze profundo sobre claro e dourado sobre preto quente; preservar foco visível em cada superfície.

## Typography

Bodoni Moda 400/500 e Source Sans 3 400/500/600/700, carregadas por next/font com display swap. H1 usa display-mobile, display-tablet em 640px e display em 1024px. H2 passa de 2.25rem a 3rem e headline nos mesmos marcos. Títulos de serviços passam de 1.55rem a title em 640px. Corpo em 16px/28px; apresentação e relatos em 16px/32px; descrições em 15px/28px. Logo com largura de 190px no celular e 220px a partir de 640px, com proporção original.

## Layout

Contêiner de 80rem, gutters e respiros definidos acima. Cabeçalho sticky de 104px, passando a 112px em 640px. Navegação desktop em 1024px. Hero empilhado até 1024px, depois em colunas 1.2fr/0.8fr; retrato de até 360px, passando a 390px em 640px. Segundo retrato até 350px, proporções preservadas. Temas em linhas; demais blocos principais passam a duas colunas no desktop. Quatro relatos em uma coluna, duas em 768px. Sem expansão de relatos.

## Elevation & Depth

Hierarquia por contraste e bordas finas. Sombra apenas no diálogo: 0 18px 48px rgb(41 37 31 / 18%). Fundo do diálogo em ink/55 com desfoque.

## Shapes

Botões com cantos sm; ícones e controles circulares. Diálogo móvel com cantos superiores de 1rem, raio sm em 640px, altura máxima de 90dvh e rolagem interna. Retratos retangulares, sem recorte destrutivo.

## Components

- WhatsApp: altura mínima de 44px; padding compacto 12px 20px, padrão 14px 24px e amplo 16px 28px. Hover claro e foco visível.
- Menu móvel em marfim, fecha por seleção ou Escape; botão informa aria-expanded e aria-controls. O seletor .brand-header #mobile-navigation :focus-visible usa brand-700, preservando contraste sobre claro.
- Três temas: Trabalho, Previdenciário e Família. Diálogos nomeados com Escape, ciclo e retorno de foco, fundo inert, bloqueio de rolagem e WhatsApp contextual.
- FAQ com details/summary. Quatro relatos fornecidos com autoria e link individual; total informado de dez avaliações em 18/10/2026, sem nota média ou classificação por estrelas.
- Contato direto, telefone, Instagram e mapa; dados centralizados em app/lib/brand.ts. Sem formulário.
- Retrato com revelação única por clip-path de 1s cubic-bezier(0.16, 1, 0.3, 1). Controles em 180–200ms; diálogo em 240ms. Conteúdo visível por padrão; respeitar movimento reduzido.

## Do's and Don'ts

### Do:

- Preservar os dois retratos e o logo Móia Advogados fornecido.
- Manter leitura responsiva, foco visível e movimento reduzido.
- Usar apenas fatos, contatos e relatos fornecidos.

### Don't:

- Distorcer, recortar ou recolorir o logo original.
- Inventar especializações, resultados, nota média ou estrelas.
- Usar dourado como texto pequeno sobre branco.
