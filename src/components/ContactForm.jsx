import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { maskPhone, isValidPhone } from '../lib/phoneMask'
import { SITE } from '../data/site'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function Field({ label, error, ...props }) {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-fg/85">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`w-full rounded-xl border bg-ink px-4 py-3.5 text-[15px] text-fg placeholder:text-muted/60 outline-none transition-all duration-200
          focus:ring-4 ${
            error
              ? 'border-red-400/60 focus:border-red-400 focus:ring-red-400/10'
              : 'border-line hover:border-muted/50 focus:border-steel focus:ring-steel/10'
          }`}
        {...props}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-err`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 text-xs text-red-300"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ContactForm({ titleId }) {
  const [values, setValues] = useState({ name: '', email: '', whatsapp: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const set = (k) => (e) => {
    const v = k === 'whatsapp' ? maskPhone(e.target.value) : e.target.value
    setValues((s) => ({ ...s, [k]: v }))
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (values.name.trim().length < 2) e.name = 'Informe seu nome.'
    if (!EMAIL_RE.test(values.email.trim())) e.email = 'Informe um e-mail válido.'
    if (!isValidPhone(values.whatsapp)) e.whatsapp = 'Informe um WhatsApp com DDD.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      if (SITE.formEndpoint) {
        const res = await fetch(SITE.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw new Error('Falha no envio')
      } else {
        await new Promise((r) => setTimeout(r, 900)) // modo demonstração
      }
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="rounded-[24px] border border-line bg-ink-800 p-6 sm:p-9">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <CheckCircle2 className="h-12 w-12 text-ok" strokeWidth={1.5} />
            <h3 id={titleId} className="mt-5 text-2xl font-bold tracking-tight">Recebemos seu pedido!</h3>
            <p className="mt-3 max-w-sm text-muted">
              Um especialista responde em até 24 horas com os perfis disponíveis e o valor-hora.
            </p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate exit={{ opacity: 0 }}>
            <h3 id={titleId} className="text-2xl font-bold tracking-tight sm:text-3xl">
              Diga o perfil que falta no seu time
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Um especialista responde em até 24 horas com os perfis disponíveis e o valor-hora.
            </p>

            <div className="mt-8 space-y-5">
              <Field label="Nome" placeholder="Seu nome" autoComplete="name" value={values.name} onChange={set('name')} error={errors.name} />
              <Field label="E-mail de trabalho" type="email" placeholder="voce@empresa.com" autoComplete="email" value={values.email} onChange={set('email')} error={errors.email} />
              <Field label="WhatsApp" type="tel" inputMode="numeric" placeholder="(11) 99999-9999" autoComplete="tel-national" value={values.whatsapp} onChange={set('whatsapp')} error={errors.whatsapp} />
            </div>

            {status === 'error' && (
              <p className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                Não foi possível enviar agora. Tente novamente ou fale com a gente pelo WhatsApp.
              </p>
            )}

            <button type="submit" disabled={status === 'sending'} className="btn-primary mt-8 w-full disabled:cursor-wait disabled:opacity-70">
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Enviando…
                </>
              ) : (
                'Enviar'
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
