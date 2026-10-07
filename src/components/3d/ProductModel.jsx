import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { modelPath } from '../../data/siteData'

const TARGET_SIZE = 2.4

// Shared motion: slow spin, gentle float, subtle mouse response.
function Rig({ children, parallax = true, spin = 0.12 }) {
  const group = useRef()
  const angle = useRef(0)
  const ptr = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    const g = group.current
    angle.current += delta * spin
    ptr.current.x = THREE.MathUtils.damp(ptr.current.x, parallax ? state.pointer.x : 0, 3, delta)
    ptr.current.y = THREE.MathUtils.damp(ptr.current.y, parallax ? state.pointer.y : 0, 3, delta)
    g.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.06
    g.rotation.y = angle.current + ptr.current.x * 0.4
    g.rotation.x = -ptr.current.y * 0.12
  })

  return <group ref={group}>{children}</group>
}

function GlbModel() {
  const { scene } = useGLTF(modelPath)
  const { object, scale, offset } = useMemo(() => {
    const obj = scene.clone(true) // clone: hero and showcase canvases both use the model
    const box = new THREE.Box3().setFromObject(obj)
    const size = box.getSize(new THREE.Vector3())
    const s = TARGET_SIZE / Math.max(size.x, size.y, size.z)
    return { object: obj, scale: s, offset: box.getCenter(new THREE.Vector3()).multiplyScalar(-s) }
  }, [scene])
  return <primitive object={object} scale={scale} position={offset} />
}

export default function ProductModel(props) {
  return <Rig {...props}><GlbModel /></Rig>
}

// Shown only if the GLB is missing or fails to load, so the page never breaks.
export function FallbackModel(props) {
  return (
    <Rig {...props}>
      <mesh position={[0, -1, 0]}><cylinderGeometry args={[0.9, 1, 0.3, 6]} /><meshStandardMaterial color="#12161d" metalness={0.9} roughness={0.35} /></mesh>
      {[0.1, 0.5, 0.9].map((y, i) => (
        <mesh key={y} position={[0, y - 0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.7 - i * 0.1, 0.05, 12, 48]} /><meshStandardMaterial color="#8896a8" metalness={1} roughness={0.3} />
        </mesh>
      ))}
      <mesh position={[0, 0.2, 0]}><sphereGeometry args={[0.32, 32, 32]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2.5} /></mesh>
    </Rig>
  )
}
