import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import WhatsAppIcon from './WhatsAppIcon'
import { whatsappLink } from '../lib/whatsapp'

export default function WhatsAppFloat() {
  const [tip, setTip] = useState(false)

  // Mostra um balão de convite uma vez, alguns segundos após carregar.
  useEffect(() => {
    const show = setTimeout(() => setTip(true), 4000)
    const hide = setTimeout(() => setTip(false), 11000)
    return () => { clearTimeout(show); clearTimeout(hide) }
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {tip && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="hidden rounded-full border border-line bg-ink-700 px-4 py-2 text-sm text-fg shadow-xl backdrop-blur sm:block"
          >
            Fale com um especialista
          </motion.span>
        )}
      </AnimatePresence>
      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onMouseEnter={() => setTip(true)}
        onMouseLeave={() => setTip(false)}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)]"
      >
                <WhatsAppIcon className="relative h-7 w-7" />
      </motion.a>
    </div>
  )
}
