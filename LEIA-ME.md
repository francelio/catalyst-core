# Site Catalyst Core (template Flex-IT, Home 1)

Abra `index.html` no navegador para ver. Não precisa de instalação: é HTML, CSS e JS estáticos.

## O que editar antes de publicar
A lista completa do que é fictício ou provisório está em **`PENDENCIAS.md`**. Resumo:
- `js/catalyst.js`, bloco `CONFIG`: número do WhatsApp, número exibido no rodapé, mensagem padrão e `formEndpoint` (URL que recebe o formulário; vazio = modo demonstração, não envia nada).
- `index.html`, seção "Depoimentos": nomes, textos e fotos são simulados. Troque por depoimentos reais autorizados ou remova a seção.
- `assets/images/clients-logos/clientes/`: logos de exemplo. Troque pelos logos reais (SVG ou PNG transparente, coloridos) e atualize os nomes no `index.html` (as duas listas do marquee).
- E-mail do rodapé: `contato@catalystcore.cloud` no `index.html`.

## Arquivos da Catalyst Core
- `css/catalyst.css`: todos os ajustes visuais sobre o template (não altere `main-LTR.css`).
- `js/catalyst.js`: configurações, links de WhatsApp, máscara e envio do formulário.
- `js/main.js`: o do template, com uma correção na linha das imagens de fundo (`data-bg-img`), que estava quebrada na cópia.
