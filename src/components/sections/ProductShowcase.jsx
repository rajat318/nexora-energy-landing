import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import LazyModelCanvas from '../3d/LazyModelCanvas'
import { fadeUp, stagger, viewOnce } from '../common/motion'
import { showcase } from '../../data/siteData'

export default function ProductShowcase() {
  const wrap = useRef(null)
  const controls = useRef(null)
  const visible = useInView(wrap, { once: true, margin: '200px' }) // mount the canvas only near the viewport
  const [active, setActive] = useState(0)

  return (
    <section id="showcase" className="relative overflow-hidden px-5 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_70%_50%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div variants={stagger} {...viewOnce}>
          <motion.p variants={fadeUp} className="mb-3 text-xs tracking-[0.25em] text-accent uppercase">Interactive Product</motion.p>
          <motion.h2 variants={fadeUp} className="grad-text text-4xl font-semibold sm:text-6xl">{showcase.title}</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-white/60 sm:text-lg">{showcase.text}</motion.p>
          <ul className="mt-8 space-y-3">
            {showcase.parts.map((p, i) => (
              <motion.li key={p.label} variants={fadeUp} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} tabIndex={0}
                className={`glass cursor-default rounded-xl p-4 transition-colors ${active === i ? 'border-accent/50' : ''}`}>
                <p className="text-xs tracking-[0.2em] text-accent">{p.label}</p>
                <p className="mt-1 text-sm text-white/60">{p.text}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <div ref={wrap} className="glass relative h-[420px] rounded-3xl sm:h-[560px] lg:h-[640px]">
          {visible && <LazyModelCanvas interactive controlsRef={controls} className="h-full w-full" />}
          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            {showcase.parts.map((p, i) => (
              <span key={p.label} className={`absolute ${p.pos} rounded-full border px-3 py-1 text-[10px] tracking-[0.2em] transition-colors ${active === i ? 'border-accent text-accent' : 'border-line text-white/40'}`}>{p.label}</span>
            ))}
          </div>
          <button onClick={() => controls.current?.reset()} className="glass absolute right-4 bottom-4 flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/70 hover:text-white">
            <RotateCcw size={14} /> Reset view
          </button>
          <p className="pointer-events-none absolute bottom-5 left-5 text-xs text-white/40">Drag to rotate</p>
        </div>
      </div>
    </section>
  )
}
