import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../common/Button'
import LazyModelCanvas from '../3d/LazyModelCanvas'
import { fadeUp, stagger } from '../common/motion'
import { hero } from '../../data/siteData'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_75%_50%,rgba(34,211,238,0.14),transparent)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-6 px-5 lg:grid-cols-2">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span variants={fadeUp} className="glass inline-block rounded-full px-4 py-1.5 text-xs tracking-[0.2em] text-accent">{hero.badge}</motion.span>
          <motion.h1 variants={fadeUp} className="grad-text mt-6 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl xl:text-7xl">{hero.title}</motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-base text-white/60 sm:text-lg">{hero.text}</motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Button href="#showcase">Explore Technology <ArrowRight size={16} /></Button>
            <Button href="#technology" variant="ghost">View Specifications</Button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="h-[340px] sm:h-[460px] lg:h-[640px]">
          <LazyModelCanvas className="h-full w-full" />
        </motion.div>
      </div>
    </section>
  )
}
