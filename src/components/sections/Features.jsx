import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, stagger, viewOnce } from '../common/motion'
import { features } from '../../data/siteData'

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
      <SectionHeading eyebrow="Features" title="Designed for what comes next." />
      <motion.div variants={stagger} {...viewOnce} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }, i) => (
          <motion.article key={title} variants={fadeUp} whileHover={{ y: -6 }} className="glass rounded-2xl p-6 transition-colors hover:border-accent/40">
            <div className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent"><Icon size={20} /></span>
              <span className="text-sm text-white/30">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="mt-6 text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm text-white/60">{text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
