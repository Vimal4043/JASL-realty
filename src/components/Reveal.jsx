import { motion } from 'framer-motion'

export function Overline({ children, light = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          light ? 'bg-[#C9A24A]' : 'bg-[#032F25]'
        }`}
      />
      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
          light ? 'text-[#C9A24A]' : 'text-[#032F25]'
        }`}
      >
        {children}
      </span>
    </div>
  )
}

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}