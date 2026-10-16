# Pendências antes de publicar

O site está montado com **conteúdo de demonstração**. Tudo o que está listado abaixo é fictício, provisório ou depende de confirmação, e precisa ser revisado e trocado na inspeção antes de o site ir ao ar com o cliente final.

Marque cada item com `[x]` quando resolver.

---

## 1. Dados fictícios (trocar obrigatoriamente)

### 1.1 Depoimentos (simulados)
Local: `index.html`, seção `#testimonials-img-bg` ("O que dizem os clientes").
Nomes, cargos, empresas, textos e fotos são **inventados**. Não publicar sem trocar: depoimento falso apresentado como verdadeiro é propaganda enganosa (CDC, art. 37).

| # | Nome (fictício) | Cargo e empresa (fictícios) | Foto (avatar com iniciais, provisório) |
|---|---|---|---|
| 1 | Rafael Mendes | Head de Engenharia, Vertex | `assets/images/testimonials/rafael-mendes.svg` |
| 2 | Bruno Teixeira | Diretor de Operações, Nordbank | `assets/images/testimonials/bruno-teixeira.svg` |
| 3 | Juliana Prado | CTO, Aurora | `assets/images/testimonials/juliana-prado.svg` |

- [ ] Coletar depoimentos reais (texto, nome, cargo, empresa) com **autorização por escrito** para uso no site.
- [ ] Trocar os avatares de iniciais pelas fotos reais dos clientes (autorizadas por escrito), em formato quadrado, de preferência 400×400 px. Se o cliente não quiser foto, basta atualizar as iniciais no SVG.
- [ ] Se não houver depoimentos reais, **remover a seção** e o item "Depoimentos" do menu.

### 1.2 Logos de clientes (fictícios)
Local: `assets/images/clients-logos/clientes/` e `index.html`, seção `#clientes` (as **duas** listas do marquee).
Empresas inventadas: Aurora, Vertex, Lumen, Nordbank, Pulsar, Órbita, Kairos, Solis.

- [ ] Trocar pelos logos reais (SVG ou PNG com fundo transparente, coloridos).
- [ ] Ter autorização de cada cliente para exibir a marca.
- [ ] Atualizar os nomes no atributo `alt` das imagens.
- [ ] Atenção: os depoimentos simulados citam Vertex, Nordbank e Aurora. Trocar os dois juntos.

### 1.3 Contato
- [x] **WhatsApp**: atualizado para `(11) 99343-9117` (`5511993439117` em `js/catalyst.js`, bloco `CONFIG`). Confirmar se é o número definitivo do cliente final.
- [ ] **Mensagem padrão do WhatsApp**: revisar `whatsappMessage` em `js/catalyst.js`.
- [x] **E-mail**: atualizado para `francelio.si@gmail.com` no rodapé do `index.html`. Para o cliente final, avaliar um e-mail no domínio da empresa (ex.: contato@dominio).

### 1.4 Rodapé
- [ ] **Endereço**: "São Paulo, SP, Brasil" é provisório. Trocar pelo endereço real ou remover a linha (`index.html`, rodapé).
- [ ] **Redes sociais**: LinkedIn, Instagram e YouTube apontam para `#0`. Trocar pelos perfis reais ou remover os ícones que não existirem. O ícone do WhatsApp já usa o número configurado.
- [ ] **Newsletter**: está em modo demonstração (mostra "Pronto!", mas não guarda o e-mail). Definir a ferramenta (Mailchimp, RD Station, Brevo etc.) e preencher `newsletterEndpoint` em `js/catalyst.js`, ou remover o formulário.
- [ ] **Imagem de fundo** `assets/images/footer/footer-bg-1.jpg`: veio do template; confirmar a licença ou trocar.

### 1.5 Formulário → WhatsApp (n8n + Chatwoot)
O formulário agora envia para `https://n8n.catalystcore.cloud/webhook/contato-site` (`formEndpoint` em `js/catalyst.js`). O fluxo do n8n está em `C:\Projetos\catalystcore\n8n\catalyst-formulario-whatsapp-chatwoot.json`.
- [ ] Importar o fluxo no n8n e preencher o bloco `CONFIG` do nó "Enviar no WhatsApp (Chatwoot)": URL do Chatwoot, `accountId`, `inboxId` (caixa de WhatsApp) e token de acesso.
- [ ] Ativar o fluxo e conferir se a Production URL do webhook é igual ao `formEndpoint` (se o n8n usar outro domínio, ajustar no `js/catalyst.js`).
- [ ] Testar um envio real pelo site e conferir no Chatwoot: contato criado, nota interna, mensagem de boas-vindas e aviso para (11) 99343-9117.
- [ ] Se a caixa do Chatwoot usar a **API oficial do WhatsApp (Meta)**, mensagens para quem nunca falou com a empresa exigem **modelo (template) aprovado**. Nesse caso, trocar as mensagens de texto por um template, ou usar a integração não oficial (Evolution API).
- [ ] Se o número (11) 99343-9117 for o próprio número conectado ao Chatwoot, o aviso não chega (o WhatsApp não envia mensagem para o mesmo número). Nesse caso, trocar `avisoPara` por outro número, ou contar só com as notificações do Chatwoot.
- [ ] Newsletter: ainda em modo demonstração (`newsletterEndpoint`).

---

## 2. Informações a confirmar com o cliente final

- [x] **Logo oficial em SVG aplicada** (16/10/2026), a partir do arquivo do designer (`catalistcoreLogo.svg`, 900 × 356):
  - Cabeçalho: `assets/images/logo/catalyst-core-logo-horizontal.svg` (emblema reduzido para o texto ficar legível).
  - Rodapé: `catalyst-core-logo.svg` (logo completa, recortada).
  - Emblema: `catalyst-core-emblema.svg` / `.png` (512 px). Fundo claro: `catalyst-core-logo-fundo-claro.svg` / `.png` e `catalyst-core-logo-horizontal-fundo-claro.svg`.
  - Ícones em `assets/images/fav-icon/`: `favicon.ico` (16/32/48), `favicon.svg` (emblema simplificado), `favicon-16.png`, `favicon-32.png`, `favicon-48.png`, `apple-touch-icon.png` (180), `android-chrome-192.png` e `-512.png`, mais o `site.webmanifest` na raiz.
  - Compartilhamento: `assets/images/og/og-catalyst-core.jpg` (1200 × 630) e tags Open Graph/Twitter nas três páginas. Perfil para redes: `assets/images/logo/perfil-redes-400.png`.
- [ ] **Fonte demo no SVG da logo**: o slogan do arquivo original usa a fonte *"FONTSPRING DEMO - Geon Condensed Thin"* como texto (não convertido em curvas). Fontes demo da Fontspring **não permitem uso comercial**. No site o slogan é HTML (fonte Jost), então isso não afeta o site, mas: (1) se o texto "Catalyst Core" da logo também foi feito com essa fonte demo, comprar a licença; (2) para usar o slogan dentro da logo em outros materiais, converter o texto em curvas no Illustrator.
- [ ] Versões monocromáticas (toda branca / toda preta) ainda não foram feitas; pedir ao designer se forem necessárias (marca-d'água, impressão, parceiros).
- [ ] Confirmar o nome "Catalyst Core" com o cliente final.
- [ ] **Posicionamento**: o site foi reposicionado como empresa de **desenvolvimento de software e IA** (a parte de alocação de profissionais foi removida em 14/10/2026). Se o cliente final também fizer alocação, reavaliar hero, "Como funciona", formulário e textos.
- [ ] **"Mais de 20 anos de mercado"**: aparece no hero, em "Sobre nós", nos números e no rodapé.
- [ ] **Números** da seção de estatísticas: 20+ anos, 5 dias úteis para a proposta, 24 h para a primeira resposta, 15 dias por ciclo de entrega.
- [ ] **Prazos e promessas** citados no texto: diagnóstico de 30 minutos sem custo, proposta com protótipo em até 5 dias úteis, resposta em até 24 horas, entregas a cada 15 dias, suporte e monitoramento depois da entrega, time sênior do início ao fim.
- [ ] **Textos dos serviços** e dos blocos "Sobre nós" e "Por que nos escolher".
- [ ] **Título da página e meta description** (`<title>` e `<meta name="description">` no `index.html`).

---

## 3. Licenças e questões legais

- [ ] **Licença do template Flex-IT** (amin-themes, ThemeForest). A pasta `flex-it` parece ter sido copiada do site de demonstração (arquivos `.html` vazios, páginas como `GET.html`, erro no `main.js`). Comprar a licença adequada para um site que será **vendido a um cliente** (verificar se é Regular ou Extended).
- [ ] **Imagens do template ainda em uso**: fundos do hero (`assets/images/hero/hero-bg-1/2/3.jpg`). Imagens de demonstração de templates muitas vezes **não estão incluídas na licença**. Confirmar ou trocar por imagens próprias/licenciadas (podem ser do Pexels/Unsplash, como as de "Sobre nós").

### Imagens de bancos gratuitos (Pexels)
Fotos usadas nas seções "Sobre nós" e "Por que nos escolher". A [licença do Pexels](https://www.pexels.com/license/) permite uso comercial gratuito, sem atribuição obrigatória (o crédito ficou como comentário no `index.html`).

| Seção | Arquivo | Foto original | Autor |
|---|---|---|---|
| Sobre nós | `assets/images/about/sobre-nos.jpg` (1200×800) | [Team Discussing Project at a Computer](https://www.pexels.com/photo/team-discussing-project-at-a-computer-6804084/) | [cottonbro studio](https://www.pexels.com/@cottonbro/) |
| Por que nos escolher | `assets/images/about/por-que-nos-escolher.jpg` (1200×1800) | [Man and Woman Talking about Programming](https://www.pexels.com/photo/man-and-woman-talking-about-programming-12899168/) | [Mizuno K](https://www.pexels.com/@mizunokozuki/) |

- [ ] Confirmar com o cliente final se as fotos combinam com a marca, ou trocar por fotos da equipe real.
- [ ] As fotos mostram pessoas reais. A licença do Pexels **não permite** usá-las de forma que sugira que essas pessoas endossam a empresa. Por isso **não** usar essas fotos (nem outras de bancos de imagem) como "foto do cliente" nos depoimentos.
- [ ] Guardar os links acima como comprovante da origem e da licença das imagens.
- [ ] **LGPD / páginas legais**: as páginas `politica-de-privacidade.html` e `termos-de-uso.html` (links no rodapé) são **rascunhos genéricos** para demonstração. Antes de publicar:
  - [ ] Revisar os dois textos com um advogado.
  - [ ] Preencher `[razão social]` e `[00.000.000/0000-00]` (CNPJ) nas duas páginas e `[cidade/UF]` (foro) nos Termos de uso.
  - [ ] Ajustar a seção de cookies se for instalar analytics ou pixel, e a data de "Última atualização".
  - [ ] Adicionar um aviso curto junto ao botão Enviar do formulário, com link para a Política de privacidade.

---

## 4. Limpeza técnica

Arquivos copiados do template que o site não usa:

- [ ] 16 arquivos `.html` vazios dentro de `assets/images/` (`blog/avatars/1-4.html`, `blog/post-images/featured-img.html` e `post-img.html`, `blog/recent-posts/2-4.html`, `our-team/4-8.html`, `our-team/cert-1.html` e `cert-2.html`).
- [ ] `assets/videos/` (6 MB, não usado).
- [ ] `css/main-RTL.css`.
- [ ] Pastas de imagens não usadas: `assets/images/blog`, `portfolio`, `our-team`, `services`, `logo` e os logos `clients-logos/*-white.png`.
- [ ] Ilustrações do template que deixaram de ser usadas: `assets/images/about/1.png`, `2.png`, `photo-1.png`, `photo-2.png`, `signature-dark.png` e `signature-light.png`.
- [ ] Logos e ícones antigos que deixaram de ser usados: `assets/images/logo/logo-colored.png`, `logo-dark.png`, `logo-light.png`, `catalyst-core-logo-horizontal.png` (versão recortada do JPG), `assets/images/fav-icon/fav-icon.png`, `catalyst-core.svg`, e as regras `.cc-logo` em `css/catalyst.css`.
- [ ] Avatares do template que deixaram de ser usados: `assets/images/testimonials/1.png`, `2.png` e `3.png`.
- [ ] Cópias das duas fotos do Pexels que ficaram na pasta Downloads (`sobre-nos.jpg` e `por-que-nos-escolher.jpg`).
- [ ] Bibliotecas não usadas: `css/vendors/jquery.fancybox.min.css`, `js/vendors/jquery.fancybox.min.js`, `js/vendors/isotope-min.js`.
- [ ] Na pasta `C:\Projetos\catalystcore`: decidir o destino do projeto React antigo (raiz) e da pasta `flex-it` original.

---

## 5. Antes de ir ao ar

- [ ] Testar em Chrome, Safari, Firefox e Edge, e em celular Android e iPhone.
- [x] Botão de tema claro/escuro removido a pedido: o site fica sempre no tema escuro. As regras `body.light-theme` em `css/catalyst.css` ficaram sem uso e podem ser apagadas.
- [ ] Rodar o Lighthouse (desempenho, acessibilidade, SEO) e otimizar as imagens do hero.
- [x] Imagem de compartilhamento (Open Graph) criada. Depois de publicar, testar a prévia em https://www.opengraph.xyz ou no Post Inspector do LinkedIn.
- [ ] Configurar domínio, HTTPS, `robots.txt` e `sitemap.xml`.
- [ ] Se for usar, instalar analytics (Google Analytics, Meta Pixel) e atualizar a política de privacidade.
