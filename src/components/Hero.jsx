import { motion } from 'framer-motion'
import WhatsAppIcon from './WhatsAppIcon'
import ReportCard from './ReportCard'
import { whatsappLink } from '../lib/whatsapp'
import { useContactModal } from '../hooks/useContactModal'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const { openModal } = useContactModal()

  return (
    <section id="topo" className="pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pt-40">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          <h1 className="text-[40px] font-extrabold leading-[1.02] tracking-tightest text-fg sm:text-[54px] lg:text-[60px]">
            Software, IA e profissionais tech que entregam desde a primeira semana.
          </h1>
          <p className="mt-7 max-w-[34rem] text-[17px] leading-[1.6] text-muted sm:text-lg">
            Mais de 20 anos de experiência no mercado entregando soluções robustas. Desenvolvemos sistemas e agentes
            de IA, e alocamos no seu time profissionais que já passaram pela nossa avaliação técnica.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button onClick={openModal} className="btn-primary">Solicitar profissionais</button>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <WhatsAppIcon className="h-[18px] w-[18px] text-[#25D366]" />
              Conversar no WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">Perfis avaliados em até 5 dias úteis. Primeira resposta em até 24 horas.</p>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <ReportCard />
        </div>
      </div>
    </section>
  )
}
