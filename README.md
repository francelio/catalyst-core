# Landing Page — Consultoria de Software & Alocação Tech

React 18 + Vite + Tailwind CSS 3 + Framer Motion + lucide-react.

## Rodar
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist pronto para deploy (Vercel, Netlify, S3…)
```

## Personalizar (sem mexer nos componentes)
Tudo fica em `src/data/site.js`:
- `SITE.brand` — nome da empresa
- `SITE.whatsappNumber` — número com DDI, só dígitos (ex.: `5511999999999`)
- `SITE.whatsappMessage` — mensagem padrão do WhatsApp
- `SITE.formEndpoint` — URL que recebe o POST JSON `{ name, email, whatsapp }` (Formspree, n8n, API própria). Vazio = modo demonstração.
- `CLIENTS`, `SERVICE_GROUPS`, `STEPS`, `SAMPLE_REPORT` — conteúdo das seções

**Logos de clientes:** substitua os SVGs de exemplo em `src/assets/logos/` (e os imports em `src/data/site.js`) pelas logos reais (SVG ou PNG transparente, coloridas). O componente as deixa brancas a 40% de opacidade e revela as cores originais no hover.

Cores e fonte: `tailwind.config.js` (tokens `ink`, `line`, `fg`, `muted`, `steel`, `ok`; fonte `Schibsted Grotesk`).

## Estrutura
```
src/
  App.jsx                 ordem das seções
  components/
    Navbar, Logo, Hero, ReportCard, ClientsMarquee, Services,
    HowItWorks, ContactSection, ContactForm, ContactModal,
    WhatsAppFloat, WhatsAppIcon, Footer
  hooks/useContactModal   contexto do modal "Solicitar profissionais"
  lib/                    máscara de telefone e link do WhatsApp
  data/site.js            conteúdo e configuração
```

## Pré-visualização em arquivo único
`npx vite build -c vite.preview.config.js` gera `dist-preview/index.html` com tudo embutido.

## Detalhes
- Hero com exemplo de parecer técnico que se preenche ao carregar (único momento animado automático).
- Marquee infinito de clientes que pausa no hover; logos brancas que ganham cor no hover.
- Linha do tempo do processo desenhada uma vez ao entrar na tela.
- Respeita `prefers-reduced-motion`.
- Formulário com validação, máscara `(11) 99999-9999`, estados de envio/sucesso/erro; modal fecha com Esc e clique fora.
