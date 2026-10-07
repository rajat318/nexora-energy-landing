import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, stagger, viewOnce } from '../common/motion'
import { applications } from '../../data/siteData'

export default function Applications() {
  return (
    <section id="applications" className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
      <SectionHeading eyebrow="Applications" title="One platform. Many futures." text="Possible fictional applications for NEXORA." />
      <motion.div variants={stagger} {...viewOnce} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {applications.map(({ icon: Icon, title, text }) => (
          <motion.article key={title} variants={fadeUp} whileHover={{ y: -6 }} className="glass rounded-2xl p-6 hover:border-accent/40">
            <Icon className="text-accent" size={26} />
            <h3 className="mt-5 text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm text-white/60">{text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
