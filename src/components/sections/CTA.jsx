import { motion } from 'framer-motion'
import Button from '../common/Button'
import { cta } from '../../data/siteData'

export default function CTA() {
  return (
    <section id="contact" className="px-5 pb-24">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="glass relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-6 py-16 text-center sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_100%,rgba(34,211,238,0.18),transparent)]" />
        <h2 className="grad-text relative text-3xl font-semibold sm:text-5xl">{cta.title}</h2>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Button href="#showcase">Explore NEXORA</Button>
          <Button href="#technology" variant="ghost">View Technology</Button>
        </div>
      </motion.div>
    </section>
  )
}
