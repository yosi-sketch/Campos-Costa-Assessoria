# Morato Advocacia — Michelle Morato

<!-- impeccable:product-schema 1 -->

## Platform
web

## Users
Pessoas e famílias em busca de orientação sobre divórcio, alimentos, guarda, visitas/convivência e partilha, com atendimento presencial em Contagem, Minas Gerais, e online.

## Product Purpose
Apresentar Michelle Morato e a Morato Advocacia, explicar os temas de Direito de Família e facilitar o agendamento por WhatsApp, telefone, Instagram e localização do escritório.

## Positioning
Estratégia jurídica com acolhimento, escuta e clareza em cada decisão familiar. Sem promessas de resultado ou credenciais não fornecidas.

## Operating Context
Página pt-BR com estrutura e funções preservadas por autorização explícita: cabeçalho, hero, informações de atendimento, três temas com diálogos, sobre, etapas, FAQ, quatro relatos, contato, ação final e rodapé. Contato direto, sem formulário. Dados e relatos em app/lib/brand.ts; tokens em app/globals.css; fontes/metadados em app/layout.tsx; composição em app/page.tsx.

## Capabilities and Constraints
Next.js 16.3.5, React 19.2.8, Tailwind CSS 4, Framer Motion e Lucide conforme package.json. Ler AGENTS.md e os guias locais em node_modules/next/dist/docs/ antes de alterar código Next.js.

Diálogos com WhatsApp contextual, Escape, ciclo de foco, fundo inert, bloqueio de rolagem e retorno do foco; menu fecha por seleção ou Escape. CSS e MotionConfig contemplam movimento reduzido. Evidências de execução fornecidas pelo agente principal em .impeccable/review/morato/; esta etapa documental não repetiu testes nem detector.

NEXT_PUBLIC_SITE_URL recebe somente a URL absoluta do domínio real confirmado. Sem a variável, metadataBase e imagens sociais explícitas são omitidos; não atribuir um domínio. E-mail, OAB, formação, experiência, horários e abrangência geográfica do atendimento online não foram informados.

## Brand Commitments
Rebrand autorizado para Morato Advocacia/Michelle Morato, preservando estrutura e funcionalidades. Direção em .impeccable/morato-direction.md.

Logo original transparente em public/morato-advocacia-logo.png (2172 × 724), íntegro no cabeçalho, sobre e placa marfim do rodapé. A arte mantém o subtítulo original Previdenciário e Trabalhista; o texto institucional segue Direito de Família conforme material fornecido. Não deduzir serviços adicionais da arte.

Retrato integral de Michelle Morato em public/michelle-morato.png (667 × 828), sem recorte, distorção ou recoloração. Proveniência e igualdade byte a byte com os originais registradas pelos hashes em .impeccable/asset-origins.json; não revalidadas nesta etapa documental.

Paleta derivada dos pixels do logo e adaptada para superfícies e contraste em app/globals.css. Extração fornecida: alpha >= 220, quantização em passos de 16; principais amostras e contagens: #001010 (20053), #001000 (9225), #000000 (8006), #c09050 (5971), #002010 (5952), #d0a060 (5742), #a07030 (5439), #704010 (5032), #b08040 (5024), #e0b070 (4787), #f0d090 (4718). São amostras, não uma escala de tokens. DESIGN.md registra os valores aplicados.

Libre Caslon Display 400 aproxima as serifas clássicas do logo; Source Sans 3 400/500/600/700 sustenta leitura e controles. Fontes por next/font com display swap.

## Evidence on Hand
Dados e relatos fornecidos em 18/10/2026, registrados em app/lib/brand.ts:

- Michelle Morato; Morato Advocacia; Direito de Família.
- Temas: Divórcio e partilha; Alimentos; Guarda e convivência, incluindo visitas.
- Telefone: (31) 2568-2738; tel:+553125682738. WhatsApp 553125682738 confirmado pelo usuário.
- Endereço: Av. João César de Oliveira, 1730, sala 104, Eldorado, Contagem — MG, CEP 32310-000.
- Instagram: https://www.instagram.com/michellemoratoadvogada/ — @michellemoratoadvogada.
- Atendimento presencial e online confirmado pela bio original enviada pelo usuário: “📍Atendimento presencial e online.” Sem consulta ao vivo.
- Google: nota informada 5,0, 40 avaliações, CID 16209826547785592380; referência do material em 18/10/2026, sem verificação ao vivo ou atualização automática.
- Quatro transcrições completas em app/lib/brand.ts: frederico luiz, Felipe Couto, Jessica Fontoura e Leonardo Patrick Nutricionista. Preservar texto e autoria, inclusive grafia; os links apontam para o perfil do escritório, não para avaliações individuais.

Evidência do agente principal em .impeccable/review/morato/validation.md e functional-checks.json: lint, TypeScript e build com saída 0; quatro elementos de imagem e fontes carregados; sem overflow horizontal em 320, 390, 518, 768, 1024 e 1440px; menu fecha ao selecionar; três diálogos com WhatsApp contextual, ciclo de foco, Escape, retorno ao acionador e restauração da rolagem; FAQ sobre online expandido. O teste de troca entre diálogos foi repetido após aguardar o fim da animação de saída.

Contrastes fornecidos em contrast.json: secundário/marfim 5,76:1; bronze/claro 6,61:1; texto/botão 7,90:1; dourado/verde profundo 9,21:1; secundário/verde 9,90:1.

Parecer independente em .impeccable/review/morato/finish-review.md: disposition ship, sem material_fixes remanescentes. Revisão visual completa de desktop 1440px, celular 390px e largura 518px em capturas integrais corrigidas, inspecionadas por recortes nativos até o rodapé, mais primeiras telas desktop/mobile; sem defeitos visuais ou responsivos materiais no escopo. Capturas de conteúdo excluem a barra de 9px. A primeira evidência de viewport foi substituída por capturas corrigidas e recortes superiores sem escala/preenchimento. O passe final resolveu apenas a comprovação do atendimento online pela bio fornecida; manteve a análise anterior e não refez testes ou auditoria visual. Não houve mudança de implementação após o build testado. Esta documentação incorpora essas evidências, sem executar novos testes.

## Product Principles
Preservar estrutura e funções ao substituir a identidade. Usar somente contatos, áreas e relatos fornecidos, mantendo origem e data da nota e dos relatos. Não inventar e-mail, OAB, formação, domínio, resultados ou disponibilidade. Conteúdo institucional; situações concretas dependem de análise individual.


## Refinamento de cores — 19/10/2026

Paleta ajustada a pedido do usuário para aproximar o site da logo e da fotografia sentada no hero: verde quase preto #0b1715, dourado suave #cfa86e, superfícies claras #fbfbf7/#f0f1ea e neutros com sálvia. Retrato original mantido integralmente. Tokens em app/globals.css, cor do navegador em app/layout.tsx e documentação visual sincronizados. Build de produção concluído sem erros; hero observado em1440 e390px, sem overflow e com retrato carregado. Contrastes atuais em .impeccable/review/morato/palette-contrast.json: texto/claro5,29:1, bronze/claro6,93:1, botão6,65:1, dourado/hero8,26:1 e texto/verde10,74:1. Capturas palette-desktop.jpg e palette-mobile.jpg; primeira tela nativa em palette-hero.png. Revisão independente e medições anteriores correspondem à versão anterior; este refinamento teve verificação direta, sem nova revisão independente. Detector desta etapa: apenas aviso consultivo sobre raio de999px já existente na barra de rolagem; não relacionado à alteração cromática.
