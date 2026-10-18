# Danielle Maria — Advogada Previdenciarista

Site institucional em pt-BR para advocacia previdenciária em Patos de Minas, MG. Estrutura preservada com três temas de atendimento, diálogos, FAQ, quatro relatos e contato direto. Bodoni Moda e Source Sans 3; grafite, champanhe, bronze e marfim.

## Executar

Next.js 16.3.5, React 19.2.8 e Tailwind CSS 4, conforme package.json.

- Instalar dependências: npm install
- Desenvolvimento: npm run dev (prévia em http://localhost:3000)
- Verificações disponíveis: npm run lint, npx tsc --noEmit e npm run build

Os resultados das verificações executadas pelo agente principal estão registrados abaixo. Leia AGENTS.md e os guias em node_modules/next/dist/docs/ antes de alterar código Next.js. Configure NEXT_PUBLIC_SITE_URL somente com o domínio real informado; sem a variável, imagens sociais são omitidas.

## Estrutura

- app/page.tsx: seções, três diálogos, menu móvel e FAQ.
- app/lib/brand.ts: identidade, contatos, nota, total de avaliações e quatro transcrições fornecidas.
- app/globals.css: tokens, tipografia, foco e movimento reduzido.
- app/layout.tsx: fontes, metadados e referência ao favicon.
- app/components/: assinatura com o logo original e botão de contato.
- public/danielle-maria-logo.png: logo transparente integral, 2172 × 724; cabeçalho claro, sobre em marfim e placa marfim no rodapé.
- public/danielle-maria-institucional.png: fotografia integral, 661 × 849; duas mulheres em um auditório, sem atribuição de identidades.
- PRODUCT.md: fatos e limites.
- DESIGN.md e .impeccable/design.json: sistema visual extraído da implementação.
- .impeccable/danielle-maria-direction.md: direção e critérios de verificação.
- .impeccable/asset-origins.json: fontes e hashes somente dos dois novos assets.

## Contatos e conteúdo

- WhatsApp: https://wa.me/5534999089393
- Telefone: (34) 99908-9393
- Instagram: https://www.instagram.com/daniellemariaadvocacia/
- Endereço: Rua José de Santana, 1306, sala 509, Centro, Patos de Minas — MG, CEP 38700-052.
- Perfil no Google: https://www.google.com/maps?cid=6512141540918169075

Atuação apresentada: aposentadorias, BPC, benefícios por incapacidade, pensão por morte, auxílio-acidente e salário-maternidade. Nota informada 5,0 e total de 72 avaliações no material de 18/10/2026, sem atualização automática. As quatro transcrições em app/lib/brand.ts preservam texto e autoria; seus links apontam para o perfil do escritório.

OAB, e-mail, formação e domínio não informados. Não inventar contatos, credenciais ou promessas de resultado.

## Estado da verificação

Evidência do agente principal em [.impeccable/review/danielle/validation.md](.impeccable/review/danielle/validation.md):

- npm run lint, npx tsc --noEmit e npm run build concluídos com exit 0; página estática gerada.
- Browser CUA: quatro instâncias de imagem carregadas; sem rolagem horizontal em 320, 390, 527, 768, 1024 e 1440px.
- Três diálogos com WhatsApp contextual correto; Tab ciclando entre fechar e link, Escape, retorno ao acionador e restauração da rolagem conferidos.
- Menu móvel: abertura, seleção de link e fechamento conferidos.
- Logo e foto idênticos aos originais por SHA-256. Contrastes medidos registrados no arquivo de validação.

Esta etapa documental incorporou as evidências do agente principal, sem repetir os testes ou executar novamente o detector.

Conforme conclusão do revisor independente, disposition: ship, sem material_fixes. Escopo da revisão: 11 capturas de viewports segmentadas em .impeccable/review/danielle/, leitura de código e verificação de dados/metadados. O parecer se limita às capturas e às verificações descritas; não abrange capturas full page.
