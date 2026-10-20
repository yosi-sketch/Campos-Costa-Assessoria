# Campos Costa Assessoria Jurídica

Site institucional em pt-BR para o escritório em Inhapim/MG e o Dr. Davi Oliveira Costa, OAB/MG 171.888. Design editorial claro, Merriweather e Manrope, grafite nas ações e bronze nos detalhes e identidade dourada original.

## Executar

Next.js 16.3.5, React 19.2.8 e Tailwind CSS 4 conforme package.json.

    npm install
    npm run dev

Prévia padrão em http://localhost:3000. Para a prévia atual em 3002, usar npm run dev -- --port 3002. Produção: npm run build e npm run start. Verificações: npm run lint e npx tsc --noEmit. Leia AGENTS.md e node_modules/next/dist/docs/ antes de alterar código Next.js.

## Estrutura

- app/page.tsx: hero com retrato do Dr. Davi, apresentação fotográfica, seis cartões com diálogos, compromissos, etapas, quinze relatos expansíveis, FAQ, contato, menu e rodapé.
- app/lib/brand.ts: fatos, transcrições integrais, telefone e links de contato.
- app/globals.css: tema Tailwind 4 em @theme inline, responsividade, foco e movimento reduzido.
- app/layout.tsx: Merriweather, Manrope, metadados e favicon.
- public/campos-costa-logo.png: logo original (1944 × 809).
- public/campos-costa-atendimento.png, public/campos-costa-pesquisa.png e public/davi-oliveira-costa.png: fotografias originais (1254 × 1254).
- PRODUCT.md: fatos, fontes e limites.
- DESIGN.md e .impeccable/design.json: sistema aplicado e extensões visuais.
- .impeccable/campos-costa-direction.md: direção após a referência enviada pelo usuário.
- .impeccable/asset-origins.json: origens e hashes preservados.

## Contato e conteúdo

WhatsApp https://wa.me/5533998110480; telefone (33) 99811-0480. Instagram https://www.instagram.com/camposcosta.adv/. Sede: R. Geraldo Contador, 119, sala 101, Centro, Inhapim — MG, CEP 35330-000. O contato inclui painel de endereço e orientação para visita, com link externo de rotas Maps.

Os seis cartões descrevem atendimento institucional, sem presumir especialidades. E-mail, horários e atendimento online não foram informados. A inscrição OAB/MG 171.888 consta no retrato enviado. O profissional das duas fotos editoriais não é identificado como Dr. Davi.

Nota Google 5,0 e 19 avaliações conforme material de 20/10/2026, sem verificação ao vivo. Quinze transcrições integrais preservadas em brand.ts; relatos longos podem ser expandidos. Links levam à busca do escritório, sem presumir URLs de avaliações individuais.

## Domínio e metadados

Configure NEXT_PUBLIC_SITE_URL com a URL absoluta real, incluindo https://, quando confirmada e gere novo build. Sem a variável, metadataBase e imagens sociais explícitas são omitidos; com valor válido, o retrato compõe as imagens sociais. Valor inválido causa erro em new URL. Favicon utiliza o logo original.

## Verificação

Evidências atuais em .impeccable/review/campos-costa-reference/. O agente principal informou lint, TypeScript e build concluídos. Consulte validation.json, capturas e parecer vigente para o estado final. A documentação foi conferida no código, sem repetir testes, browser ou detector e sem presumir aprovação independente. Capturas e pareceres da pasta anterior campos-costa pertencem à versão rejeitada.
