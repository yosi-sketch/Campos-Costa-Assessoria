# Heloísa de Almeida — Advogada

Site institucional em pt-BR para atendimento em Direito do Trabalho, Previdenciário e de Família em Andradas, MG. Bodoni Moda e Source Sans 3; preto quente, champanhe e marfim. Logo Móia Advogados no cabeçalho e rodapé, conforme pedido mais recente da cliente.

## Executar

Next.js 16.3.5, React 19.2.8 e Tailwind CSS 4.

- Instalar: npm install
- Desenvolvimento: npm run dev (prévia em http://localhost:3000)
- Verificar: npm run lint; npx tsc --noEmit; npm run build

Leia AGENTS.md e os guias em node_modules/next/dist/docs antes de alterar APIs. Configure NEXT_PUBLIC_SITE_URL somente com o domínio real; sem a variável, imagens sociais são omitidas.

## Estrutura

- app/page.tsx: seções, três diálogos, menu móvel e FAQ.
- app/lib/brand.ts: identidade, contatos, links e quatro relatos fornecidos.
- app/globals.css: tokens, tipografia, foco e movimento reduzido.
- app/layout.tsx: fontes, metadados e favicon H.
- app/components/: logo compartilhado e botão de contato.
- public/: heloisa-almeida-retrato.png (438 × 510) e heloisa-almeida-sobre.png (393 × 785), preservados integralmente.
- PRODUCT.md: fatos e limites; DESIGN.md e .impeccable/design.json: sistema visual.

## Contatos e conteúdo

- WhatsApp: https://wa.me/5535998868578
- Telefone: (35) 99886-8578
- Instagram: https://www.instagram.com/heloalmeida.adv/
- Endereço: Rua da Saudade, 180, Sala 02, Centro, Andradas — MG, CEP 37938-014.
- Google Maps: https://www.google.com/maps?cid=2661713746485173089

Quatro relatos fornecidos, com autoria e links individuais. Total informado: dez avaliações em 18/10/2026, sem atualização automática, nota média ou classificação por estrelas. Cliente confirmou ausência de e-mail; não inventar OAB, credenciais, domínio ou promessas de resultado.

## Validação recebida

Build, TypeScript e ESLint aprovados na implementação. Sem overflow nas larguras 320, 390, 527, 768 e 1440px. Revisão SHIP; ajuste de foco móvel já aplicado com brand-700 sobre marfim.
