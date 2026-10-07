import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export default function StatCard({ value, decimals = 0, suffix = '', display, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView || display) return
    const c = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: setN })
    return () => c.stop()
  }, [inView, value, display])

  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center sm:p-8">
      <p className="grad-text text-4xl font-semibold sm:text-5xl">{display ?? `${n.toFixed(decimals)}${suffix}`}</p>
      <p className="mt-2 text-sm text-white/60">{label}</p>
    </div>
  )
}
