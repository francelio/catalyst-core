import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import { SAMPLE_REPORT as R } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

// O momento orquestrado da página: o parecer "se preenche" ao carregar.
export default function ReportCard() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay: 0.2 }}
      className="relative w-full max-w-[460px] rounded-[22px] border border-line bg-ink-800 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center justify-between border-b border-line px-6 py-4 text-[13px] text-muted">
        <span>Parecer técnico</span>
        <span>Exemplo ilustrativo</span>
      </div>

      <div className="px-6 pb-6 pt-5">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink-600 text-[15px] font-semibold text-fg">
            {R.initials}
          </span>
          <div className="min-w-0">
            <p className="text-[17px] font-semibold leading-tight text-fg">{R.role}</p>
            <p className="mt-1 text-sm text-muted">{R.years} de experiência</p>
          </div>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line text-sm">
          <div className="bg-ink-800 px-4 py-3">
            <dt className="text-muted">Disponibilidade</dt>
            <dd className="mt-0.5 font-medium text-fg">{R.availability}</dd>
          </div>
          <div className="bg-ink-800 px-4 py-3">
            <dt className="text-muted">Modelo</dt>
            <dd className="mt-0.5 font-medium text-fg">{R.model}</dd>
          </div>
        </dl>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
          {R.stack.map((s) => (
            <li key={s} className="rounded-md border border-line px-2.5 py-1 text-[13px] text-fg/80">{s}</li>
          ))}
        </ul>

        <ul className="mt-6 space-y-3">
          {R.scores.map((s, i) => (
            <li key={s.label} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5 text-sm">
              <span className="text-fg/85">{s.label}</span>
              <span className="tabular-nums text-muted">{s.value} de 5</span>
              <span className="col-span-2 flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, k) => (
                  <motion.span
                    key={k}
                    className={`h-1.5 flex-1 origin-left rounded-full ${k < s.value ? 'bg-steel' : 'bg-ink-600'}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.35, ease, delay: 0.7 + i * 0.12 + k * 0.05 }}
                  />
                ))}
              </span>
            </li>
          ))}
        </ul>

        <blockquote className="mt-6 border-l-2 border-steel/50 pl-4 text-[14px] leading-relaxed text-fg/80">
          {R.verdict}
        </blockquote>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 380, damping: 22, delay: 1.6 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-ok/10 px-3.5 py-2 text-sm font-medium text-ok"
        >
          <BadgeCheck className="h-4 w-4" />
          Aprovada na avaliação técnica
        </motion.div>
      </div>
    </motion.figure>
  )
}
