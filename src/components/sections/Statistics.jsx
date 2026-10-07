import StatCard from '../common/StatCard'
import SectionHeading from '../common/SectionHeading'
import { stats } from '../../data/siteData'

export default function Statistics() {
  return (
    <section className="border-y border-line px-5 py-20 sm:py-28">
      <SectionHeading eyebrow="Performance" title="Performance, by design." text="Concept performance targets for the NEXORA platform." />
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
    </section>
  )
}
