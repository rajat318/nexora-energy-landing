import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, stagger, viewOnce } from '../common/motion'
import { why } from '../../data/siteData'

export default function WhyNexora() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-2">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHeading eyebrow="Why NEXORA" title={why.title} text={why.text} align="left" />
      </div>
      <motion.ul variants={stagger} {...viewOnce} className="space-y-4">
        {why.items.map(({ icon: Icon, title, text }) => (
          <motion.li key={title} variants={fadeUp} className="glass flex gap-5 rounded-2xl p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent"><Icon size={22} /></span>
            <div><h3 className="text-lg font-medium">{title}</h3><p className="mt-1 text-sm text-white/60">{text}</p></div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
