import { Component } from 'react'
import { ContactShadows, OrbitControls } from '@react-three/drei'
import ModelLighting from './ModelLighting'
import ProductModel, { FallbackModel } from './ProductModel'

class ModelBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch(err) { console.warn('NEXORA: model failed to load, using fallback.', err) }
  render() { return this.state.failed ? this.props.fallback : this.props.children }
}

export default function ProductScene({ interactive = false, controlsRef }) {
  const motion = { parallax: !interactive, spin: interactive ? 0.08 : 0.12 }
  return (
    <>
      <ModelLighting />
      <ModelBoundary fallback={<FallbackModel {...motion} />}>
        <ProductModel {...motion} />
      </ModelBoundary>
      <ContactShadows position={[0, -1.4, 0]} opacity={0.5} scale={7} blur={2.6} far={3} resolution={256} />
      {interactive && (
        <OrbitControls
          ref={controlsRef} enableDamping enablePan={false} enableZoom={false}
          minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.9}
        />
      )}
    </>
  )
}
