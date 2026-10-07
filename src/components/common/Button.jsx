import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-accent text-black hover:bg-white',
  ghost: 'glass text-white hover:border-accent/60',
}
const sizes = { md: 'px-6 py-3', sm: 'px-5 py-2' }

export default function Button({ children, href, variant = 'primary', size = 'md', className = '', ...rest }) {
  const Tag = href ? motion.a : motion.button
  return (
    <Tag
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
