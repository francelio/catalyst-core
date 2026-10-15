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

### 1.5 Formulário
- [ ] O formulário está em **modo demonstração**: valida os campos e mostra "Recebemos seu pedido", mas **não envia nada**.
- [ ] Definir o destino dos leads (Formspree, n8n, Make, RD Station, API própria etc.) e preencher `formEndpoint` em `js/catalyst.js`. O envio é um POST JSON com `{ nome, email, whatsapp }`.
- [ ] Testar um envio real de ponta a ponta.

---

## 2. Informações a confirmar com o cliente final

- [ ] **Logo**: a logo oficial foi aplicada no cabeçalho (`assets/images/logo/catalyst-core-logo-horizontal.png`), no rodapé (`catalyst-core-logo.png`) e como ícone da aba (`assets/images/fav-icon/favicon-32.png` e `apple-touch-icon.png`, feitos a partir do emblema `catalyst-core-emblema.png`). O fundo foi **removido automaticamente** a partir de uma imagem JPG, então:
  - [ ] Pedir ao designer a logo em **vetor (SVG)** ou PNG transparente em alta resolução, para nitidez em telas grandes e retina.
  - [ ] Pedir também uma **versão para fundo claro**: a atual tem sombras e brilhos escuros nas bordas e só fica bem sobre fundo escuro. Por isso o cabeçalho fixo e o cabeçalho no celular foram deixados escuros (antes eram azul-ciano).
  - [ ] Conferir o texto da logo: na arte original o "C" de "Core" aparece duplicado/sobreposto ("CatalystCCore").
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
- [ ] Logos e ícones antigos que deixaram de ser usados: `assets/images/logo/logo-colored.png`, `logo-dark.png`, `logo-light.png`, `assets/images/fav-icon/fav-icon.png`, `assets/images/fav-icon/catalyst-core.svg` e as regras `.cc-logo` em `css/catalyst.css`.
- [ ] Avatares do template que deixaram de ser usados: `assets/images/testimonials/1.png`, `2.png` e `3.png`.
- [ ] Cópias das duas fotos do Pexels que ficaram na pasta Downloads (`sobre-nos.jpg` e `por-que-nos-escolher.jpg`).
- [ ] Bibliotecas não usadas: `css/vendors/jquery.fancybox.min.css`, `js/vendors/jquery.fancybox.min.js`, `js/vendors/isotope-min.js`.
- [ ] Na pasta `C:\Projetos\catalystcore`: decidir o destino do projeto React antigo (raiz) e da pasta `flex-it` original.

---

## 5. Antes de ir ao ar

- [ ] Testar em Chrome, Safari, Firefox e Edge, e em celular Android e iPhone.
- [x] Botão de tema claro/escuro removido a pedido: o site fica sempre no tema escuro. As regras `body.light-theme` em `css/catalyst.css` ficaram sem uso e podem ser apagadas.
- [ ] Rodar o Lighthouse (desempenho, acessibilidade, SEO) e otimizar as imagens do hero.
- [ ] Adicionar imagem de compartilhamento (Open Graph) para WhatsApp e LinkedIn.
- [ ] Configurar domínio, HTTPS, `robots.txt` e `sitemap.xml`.
- [ ] Se for usar, instalar analytics (Google Analytics, Meta Pixel) e atualizar a política de privacidade.
