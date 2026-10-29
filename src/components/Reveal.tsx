import type { ReactNode } from 'react'
import { motion, type Variants } from 'motion/react'

const ease = [0.22, 1, 0.36, 1] as const

/** Jedna animacja w całym portfolio: delikatne pojawienie się z lekkim ruchem w górę. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

/** Rodzic, który uruchamia dzieci z krótkim opóźnieniem jedno po drugim (hero). */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

/** Propsy dla dowolnego elementu motion.*, który ma się odsłonić po wejściu w widok (raz). */
export const reveal = {
  variants: fadeUp,
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount: 0.2 },
} as const

/** Opakowuje fragment strony w odsłanianie po wejściu w widok. */
export function Reveal({ children, amount = 0.2 }: { children: ReactNode; amount?: number }) {
  return (
    <motion.div {...reveal} viewport={{ once: true, amount }}>
      {children}
    </motion.div>
  )
}
