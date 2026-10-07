import { lazy, Suspense } from 'react'

const ModelCanvas = lazy(() => import('./ModelCanvas'))

export default function LazyModelCanvas(props) {
  return (
    <Suspense fallback={<div className={`grid place-items-center text-sm tracking-widest text-white/50 ${props.className ?? ''}`}>Initializing NEXORA...</div>}>
      <ModelCanvas {...props} />
    </Suspense>
  )
}
