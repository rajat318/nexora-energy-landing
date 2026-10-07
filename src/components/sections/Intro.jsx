import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, stagger, viewOnce } from '../common/motion'
import { intro } from '../../data/siteData'

export default function Intro() {
  return (
    <section className="border-y border-line px-5 py-20 sm:py-28">
      <SectionHeading eyebrow={intro.eyebrow} title={intro.title} text={intro.text} />
      <motion.ul variants={stagger} {...viewOnce} className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
        {intro.points.map((p) => (
          <motion.li key={p} variants={fadeUp} className="glass rounded-full px-5 py-2 text-sm text-white/80">{p}</motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
