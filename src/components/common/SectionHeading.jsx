import { motion } from 'framer-motion'
import { fadeUp, stagger, viewOnce } from './motion'

export default function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  const a = align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <motion.div variants={stagger} {...viewOnce} className={`max-w-2xl ${a}`}>
      {eyebrow && <motion.p variants={fadeUp} className="mb-3 text-xs font-medium tracking-[0.25em] text-accent uppercase">{eyebrow}</motion.p>}
      <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-tight sm:text-5xl">{title}</motion.h2>
      {text && <motion.p variants={fadeUp} className="mt-4 text-base text-white/60 sm:text-lg">{text}</motion.p>}
    </motion.div>
  )
}
