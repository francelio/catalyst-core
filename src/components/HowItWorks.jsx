import { motion } from 'framer-motion'
import WhatsAppIcon from './WhatsAppIcon'
import { STEPS } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-line bg-ink-800/40 py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <h2 className="section-title">Do briefing ao profissional trabalhando, em quatro passos.</h2>
          <p className="max-w-[44ch] text-[17px] leading-[1.6] text-muted">
            Você entrevista só quem já passou pela nossa avaliação técnica. O resto do processo é nosso.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-10 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {/* Trilho: vertical no mobile, horizontal no desktop. Desenha uma vez ao entrar na tela. */}
          <span aria-hidden="true" className="absolute bottom-2 left-[19px] top-2 w-px bg-line lg:hidden" />
          <span aria-hidden="true" className="absolute left-5 right-5 top-5 hidden h-px bg-line lg:block" />
          <motion.span
            aria-hidden="true"
            className="absolute left-5 right-5 top-5 hidden h-px origin-left bg-steel lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {STEPS.map((s) => (
            <li key={s.n} className="relative grid grid-cols-[40px_1fr] gap-x-5 lg:block">
              <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-line bg-ink text-sm font-semibold tabular-nums text-fg">
                {s.n}
              </span>
              <div className="lg:mt-7">
                <p className="text-sm font-medium text-steel">{s.time}</p>
                <h3 className="mt-1.5 text-[20px] font-semibold leading-snug tracking-tight text-fg">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-muted">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={whatsappLink('Olá! Quero agendar um briefing técnico.')} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Agendar briefing pelo WhatsApp
          </a>
          <p className="text-sm text-muted sm:ml-3">O briefing é gratuito e leva trinta minutos.</p>
        </div>
      </div>
    </section>
  )
}
