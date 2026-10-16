import Logo from './Logo'
import { NAV_LINKS, SITE } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="container-x flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Software, IA e alocação de profissionais tech há mais de 20 anos.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-14 gap-y-3 text-sm">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-muted hover:text-fg">{l.label}</a>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-fg">WhatsApp</a>
          <span className="col-span-2 select-all text-muted">{SITE.email}</span>
        </div>
      </div>
      <div className="container-x mt-10 text-[13px] text-muted/70">© {new Date().getFullYear()} {SITE.brand}. Todos os direitos reservados.</div>
    </footer>
  )
}
