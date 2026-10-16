import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import ContactForm from './ContactForm'
import { useContactModal } from '../hooks/useContactModal'

export default function ContactModal() {
  const { open, closeModal } = useContactModal()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && closeModal()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, closeModal])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <div className="absolute inset-0 bg-black/75" onClick={closeModal} />
          <motion.div
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          >
            <button
              onClick={closeModal}
              autoFocus
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-line bg-ink text-muted transition hover:text-fg"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>
            <ContactForm titleId="contact-modal-title" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
