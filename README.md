# Morato Advocacia — Michelle Morato

Site institucional em pt-BR de Direito de Família, com atendimento presencial em Contagem/MG e online. Estrutura preservada: três temas com diálogos, sobre, etapas, FAQ, quatro relatos e contato direto. Verde profundo, dourado, bronze e marfim; Libre Caslon Display e Source Sans 3.

## Executar

Next.js 16.3.5, React 19.2.8 e Tailwind CSS 4, conforme package.json.

```sh
npm install
npm run dev
```

Prévia: [localhost:3000](http://localhost:3000). Para produção, execute npm run build e depois npm run start. Verificações disponíveis: npm run lint e npx tsc --noEmit. Leia AGENTS.md e os guias em node_modules/next/dist/docs/ antes de alterar código Next.js.

## Domínio e metadados

O domínio ainda não foi fornecido. Quando confirmado, configure NEXT_PUBLIC_SITE_URL em .env.local ou no ambiente de hospedagem com a URL absoluta real, incluindo https://, e gere novamente o build. app/layout.tsx usa new URL: um valor inválido causa erro; não usar domínio inventado. Sem a variável, metadataBase e imagens sociais explícitas são omitidos e o cartão Twitter usa summary. Com a variável válida, o retrato fornecido compõe as imagens sociais e o cartão usa summary_large_image. O favicon usa o logo original.

## Estrutura

- app/page.tsx: composição, três diálogos, menu móvel e FAQ.
- app/lib/brand.ts: identidade, contatos, nota/contagem e quatro transcrições completas; mensagens de WhatsApp contextualizadas.
- app/globals.css: tokens Tailwind CSS 4, foco, tipografia e movimento reduzido.
- app/layout.tsx: fontes, metadados e ícone.
- app/components/: assinatura com o logo original e botão de contato.
- public/morato-advocacia-logo.png: logo integral transparente, 2172 × 724.
- public/michelle-morato.png: retrato integral de Michelle Morato, 667 × 828.
- PRODUCT.md: fatos, fontes e limites; DESIGN.md e .impeccable/design.json: tokens reais e extensões visuais schemaVersion 2.
- .impeccable/morato-direction.md: contrato da direção aprovada.
- .impeccable/asset-origins.json: origens e hashes dos dois assets originais, registrados como idênticos às fontes.

## Contatos e conteúdo

- [WhatsApp confirmado](https://wa.me/553125682738): (31) 2568-2738; [telefone](tel:+553125682738).
- [Instagram @michellemoratoadvogada](https://www.instagram.com/michellemoratoadvogada/).
- Endereço: Av. João César de Oliveira, 1730, sala 104, Eldorado, Contagem — MG, CEP 32310-000.
- [Perfil no Google](https://www.google.com/maps?cid=16209826547785592380): nota informada 5,0 e 40 avaliações no material de 18/10/2026; sem verificação ao vivo ou atualização automática.

Atuação: divórcio, alimentos, guarda, visitas/convivência e partilha. Atendimento presencial e online confirmado pela bio original fornecida pelo usuário: “📍Atendimento presencial e online.” A arte do logo preserva Previdenciário e Trabalhista; o conteúdo institucional segue a atuação familiar enviada. E-mail, OAB, formação e domínio não informados.

Quatro relatos integrais preservados em app/lib/brand.ts: frederico luiz, Felipe Couto, Jessica Fontoura e Leonardo Patrick Nutricionista. Links levam ao perfil do escritório, sem presumir links individuais. Não alterar transcrições, inventar credenciais ou prometer resultados.

## Evidências e revisão

Registros fornecidos pelo agente principal em .impeccable/review/morato/validation.md, functional-checks.json e contrast.json: lint/tipos/build aprovados; quatro imagens e fontes carregadas; sem overflow horizontal em 320/390/518/768/1024/1440px; menu, três diálogos com WhatsApp contextual/teclado/foco/rolagem e FAQ online conferidos. Os cinco contrastes medidos variam de 5,76:1 a 9,90:1.

Parecer em .impeccable/review/morato/finish-review.md: disposition ship, sem correções materiais remanescentes no escopo. A avaliação visual examinou capturas integrais corrigidas em 1440/390/518px até o rodapé e primeiras telas desktop/mobile. As larguras úteis excluem a barra de 9px; os recortes superiores são nativos e sem preenchimento. A captura inicial inconsistente foi substituída. O passe final resolveu somente a comprovação do online pela bio original e reteve a avaliação completa anterior; não reexecutou auditoria visual ou funcional. Não houve edição de implementação após o build testado.

Esta atualização documental conferiu consistência com o código e os registros fornecidos; não executou testes, capturas ou detector. O único aviso consultivo do detector já fornecido era a divisória do rodapé, agora registrada em DESIGN.md.


Paleta refinada em19/10/2026 para harmonizar logo e retrato do hero. Valores atuais em DESIGN.md e app/globals.css; build, contrastes e inspeção desktop/mobile registrados na seção final de PRODUCT.md.
