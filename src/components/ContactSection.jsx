import ContactForm from './ContactForm'
import WhatsAppIcon from './WhatsAppIcon'
import { SITE } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'

const next = [
  { t: 'Em até 24 horas', d: 'Um especialista responde com os perfis disponíveis e o valor-hora.' },
  { t: 'No briefing', d: 'Alinhamos stack, senioridade, modelo de contratação e prazo.' },
  { t: 'Em até 5 dias úteis', d: 'Você recebe os currículos padronizados com o nosso parecer.' },
]

export default function ContactSection() {
  return (
    <section id="contato" className="border-t border-line py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-20">
        <div>
          <h2 className="section-title max-w-[16ch]">Seu próximo profissional começa com uma conversa.</h2>
          <dl className="mt-12 max-w-md divide-y divide-line border-y border-line">
            {next.map((n) => (
              <div key={n.t} className="grid gap-1 py-5 sm:grid-cols-[150px_1fr] sm:gap-6">
                <dt className="text-[15px] font-medium text-fg">{n.t}</dt>
                <dd className="text-[15px] leading-relaxed text-muted">{n.d}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 text-[15px] text-muted">
            Prefere falar agora?{' '}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-fg underline decoration-line underline-offset-4 hover:decoration-fg">
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              WhatsApp {SITE.whatsappDisplay}
            </a>
          </div>
        </div>
        <ContactForm titleId="contact-section-title" />
      </div>
    </section>
  )
}
