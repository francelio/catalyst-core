import { SERVICE_GROUPS } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'

function ServiceRow({ title, description, examples }) {
  return (
    <li className="group grid gap-4 border-t border-line py-8 transition-colors md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-12 md:py-10">
      <h3 className="text-[22px] font-semibold leading-snug tracking-tight text-fg transition-colors group-hover:text-steel sm:text-[26px]">
        {title}
      </h3>
      <div className="min-w-0">
        <p className="max-w-[46ch] text-[16px] leading-[1.65] text-muted">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-fg/70">
          {examples.map((e) => <li key={e}>{e}</li>)}
        </ul>
      </div>
    </li>
  )
}

export default function Services() {
  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="container-x">
        <h2 className="section-title max-w-[18ch]">O que fazemos para o seu time</h2>

        {SERVICE_GROUPS.map((g) => (
          <div key={g.label} className="mt-16 grid gap-2 lg:grid-cols-[180px_1fr] lg:gap-10">
            <p className="pt-9 text-[15px] font-medium text-steel lg:pt-11">{g.label}</p>
            <ul className="border-b border-line">
              {g.items.map((s) => <ServiceRow key={s.title} {...s} />)}
            </ul>
          </div>
        ))}

        <div className="mt-14 flex flex-col gap-4 rounded-2xl bg-ink-800 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:ml-[220px]">
          <p className="text-[16px] text-fg">Tem um projeto em mente ou precisa de alguém para ontem?</p>
          <a href={whatsappLink('Olá! Quero conversar sobre um projeto.')} target="_blank" rel="noopener noreferrer" className="btn-secondary shrink-0 !bg-ink">
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  )
}
