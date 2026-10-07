import { Zap, Cpu, Brain, Layers, Gauge, Target, Bot, Factory, Building2, Car, Globe, Mail, Send } from 'lucide-react'

export const brand = 'NEXORA'
// Place the provided Algoryx GLB at public/models/algoryx-model.glb (or change this name)
export const modelPath = `${import.meta.env.BASE_URL}models/algoryx-model.glb`

export const navLinks = [
  { label: 'Home', href: '#home' }, { label: 'Technology', href: '#technology' },
  { label: 'Features', href: '#features' }, { label: 'Applications', href: '#applications' },
  { label: 'About', href: '#about' }, { label: 'Contact', href: '#contact' },
]

export const hero = {
  badge: 'NEXT-GEN ENERGY TECHNOLOGY',
  title: 'Powering the Intelligence of Tomorrow.',
  text: 'NEXORA combines intelligent energy technology with precision engineering to create a smarter and more efficient future.',
}

export const intro = {
  eyebrow: 'Concept Overview',
  title: 'Engineered around one idea: energy that thinks.',
  text: 'NEXORA is a fictional product concept: a compact energy platform where a responsive core, precision structure and a monitoring layer work as one system.',
  points: ['Responsive energy core', 'Precision-built housing', 'Real-time monitoring'],
}

export const features = [
  { icon: Zap, title: 'Intelligent Energy Core', text: 'Designed around a responsive energy architecture.' },
  { icon: Cpu, title: 'Precision Engineering', text: 'Built around efficient and controlled performance.' },
  { icon: Brain, title: 'Adaptive Intelligence', text: 'Designed for responsive and intelligent operation.' },
  { icon: Layers, title: 'Future-Ready Architecture', text: 'A modular foundation designed for next-generation applications.' },
]

export const showcase = {
  title: 'Meet NEXORA.',
  text: 'Explore the architecture behind our next-generation energy platform.',
  parts: [
    { label: 'ENERGY CORE', text: 'The glowing core at the heart of the platform.', pos: 'top-[22%] right-[4%]' },
    { label: 'PRECISION RINGS', text: 'Concentric rings that shape controlled output.', pos: 'top-[44%] left-[4%]' },
    { label: 'CONTROL MODULE', text: 'The response layer that adapts to demand.', pos: 'top-[10%] left-[10%]' },
    { label: 'STRUCTURAL BASE', text: 'A modular housing built for stability.', pos: 'bottom-[14%] right-[6%]' },
  ],
}

export const specs = [
  { label: 'Core Architecture', value: 'Adaptive Energy System' },
  { label: 'Control', value: 'Intelligent Response Layer' },
  { label: 'Structure', value: 'Modular Precision Housing' },
  { label: 'Interface', value: 'Real-Time Monitoring' },
  { label: 'Form Factor', value: 'Compact Technology Platform' },
]

export const stats = [
  { value: 99.8, decimals: 1, suffix: '%', label: 'System Efficiency' },
  { display: '24/7', label: 'Intelligent Monitoring' },
  { value: 4, suffix: 'x', label: 'Adaptive Performance' },
  { value: 50, suffix: '%', label: 'Reduced Energy Waste' },
]

export const applications = [
  { icon: Building2, title: 'Smart Infrastructure', text: 'Adaptive energy management for connected buildings and grids.' },
  { icon: Bot, title: 'Advanced Robotics', text: 'Compact, responsive power for next-generation machines.' },
  { icon: Factory, title: 'Industrial Automation', text: 'Efficient, monitored energy for precision production lines.' },
  { icon: Car, title: 'Future Mobility', text: 'A modular platform concept for tomorrow\u2019s transport.' },
]

export const why = {
  title: 'Built on four principles.',
  text: 'Every decision in NEXORA starts from a simple philosophy: do more with less, and make the system aware.',
  items: [
    { icon: Target, title: 'Precision', text: 'Tight tolerances and controlled output in every layer.' },
    { icon: Gauge, title: 'Efficiency', text: 'Less waste, more usable energy.' },
    { icon: Brain, title: 'Intelligence', text: 'A system that senses and adapts in real time.' },
    { icon: Layers, title: 'Scalability', text: 'Modular design that grows with the application.' },
  ],
}

export const cta = { title: 'Ready to Explore What\u2019s Next?' }
export const footerLinks = ['Technology', 'Features', 'Applications', 'Contact']
export const socials = [{ icon: Globe, label: 'Website' }, { icon: Mail, label: 'Email' }, { icon: Send, label: 'Updates' }]
