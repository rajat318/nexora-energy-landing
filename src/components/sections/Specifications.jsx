import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, stagger, viewOnce } from '../common/motion'
import { specs } from '../../data/siteData'

export default function Specifications() {
  return (
    <section id="technology" className="mx-auto max-w-4xl px-5 py-20 sm:py-28">
      <SectionHeading eyebrow="Technology" title="Specifications" text="Concept specifications for the fictional NEXORA product." />
      <motion.dl variants={stagger} {...viewOnce} className="glass mt-12 divide-y divide-line rounded-2xl">
        {specs.map((s) => (
          <motion.div key={s.label} variants={fadeUp} className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <dt className="text-sm text-white/50">{s.label}</dt>
            <dd className="font-medium">{s.value}</dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  )
}
