import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '../common/Button'
import { brand, navLinks } from '../../data/siteData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? 'border-b border-line bg-bg/80 backdrop-blur-xl' : ''}`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#home" className="text-lg font-semibold tracking-[0.3em]">{brand}</a>
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} className="text-sm text-white/70 transition hover:text-white">{l.label}</a></li>
          ))}
        </ul>
        <Button href="#showcase" size="sm" className="hidden lg:inline-flex">Explore NEXORA</Button>
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden lg:hidden">
            <ul className="flex flex-col gap-1 px-5 pb-6">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-white/80 hover:bg-white/5">{l.label}</a>
                </li>
              ))}
              <li className="pt-3"><Button href="#showcase" onClick={() => setOpen(false)} className="w-full">Explore NEXORA</Button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
