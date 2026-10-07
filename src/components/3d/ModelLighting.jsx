import { Environment, Lightformer } from '@react-three/drei'

// Procedural environment: no external HDR download, so it works offline and after deploy.
export default function ModelLighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 6, 5]} intensity={1.5} />
      <pointLight position={[-4, 2, -3]} intensity={30} color="#22d3ee" />
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={2.5} position={[0, 5, -6]} scale={[12, 4, 1]} />
        <Lightformer form="rect" intensity={1.5} position={[6, 1, 3]} scale={[4, 6, 1]} />
        <Lightformer form="ring" color="#22d3ee" intensity={2} position={[-6, 1, 2]} scale={4} />
      </Environment>
    </>
  )
}
