import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS } from '../data/site'
import { useContactModal } from '../hooks/useContactModal'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { openModal } = useContactModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-[72px]">
        <a href="#topo" aria-label="Catalyst Core, início"><Logo /></a>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] text-muted transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
          <button onClick={openModal} className="btn-primary !px-5 !py-2.5 !text-sm">
            Solicitar profissionais
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <div className="container-x flex flex-col pb-5">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-line py-4 text-lg text-fg">
                  {l.label}
                </a>
              ))}
              <button onClick={() => { setOpen(false); openModal() }} className="btn-primary mt-5 w-full">
                Solicitar profissionais
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
