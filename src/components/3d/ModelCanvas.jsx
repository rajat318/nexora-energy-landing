import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useProgress } from '@react-three/drei'
import { AnimatePresence, motion } from 'framer-motion'
import ProductScene from './ProductScene'

function Loader() {
  const { active, progress } = useProgress()
  return (
    <AnimatePresence>
      {active && (
        <motion.div exit={{ opacity: 0 }} className="absolute inset-0 grid place-items-center">
          <div className="w-44 text-center">
            <p className="animate-pulse text-sm tracking-widest text-white/70">Initializing NEXORA...</p>
            <div className="mt-3 h-px w-full bg-white/10"><div className="h-px bg-accent transition-all" style={{ width: `${progress}%` }} /></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function ModelCanvas({ interactive = false, controlsRef, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0.4, 6.2], fov: 35 }} performance={{ min: 0.5 }} gl={{ antialias: true, powerPreference: 'high-performance' }}>
        <Suspense fallback={null}>
          <ProductScene interactive={interactive} controlsRef={controlsRef} />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  )
}
