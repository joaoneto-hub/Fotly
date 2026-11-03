import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1]

/** Revela o conteúdo ao entrar na tela (fade + subida). */
export function Reveal({ children, delay = 0, y = 28, className, as = 'div', ...rest }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease, delay }}
      {...rest}
    >
      {children}
    </M>
  )
}

/** Variantes para listas com entrada escalonada. */
export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
export const staggerChild = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

/** Número que conta de 0 até o valor quando aparece na tela. */
export function CountUp({ to, duration = 1.4 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease,
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  return <span ref={ref}>{value.toLocaleString('pt-BR')}</span>
}

export function SectionHead({ eyebrow, title, lead }) {
  return (
    <Reveal className="section-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h2">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  )
}

export function Logo({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="8" fill="var(--accent)" />
      <circle cx="16" cy="16" r="6.5" fill="none" stroke="var(--ink)" strokeWidth="2.5" />
      <circle cx="23.5" cy="8.5" r="1.8" fill="var(--ink)" />
    </svg>
  )
}

/** Ícones em traço, herdam a cor do texto. */
const paths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  drive: <path d="M7 3h10l5 9-5 9H7l-5-9z" />,
  box: (
    <>
      <path d="M3 7l3-3h12l3 3v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <path d="M3 7h18" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  money: <path d="M12 3v18M17 7.5c0-1.8-2-3-5-3s-5 1-5 3 2 2.6 5 3.5 5 1.7 5 3.5-2 3-5 3-5-1-5-3" />,
  link: (
    <>
      <path d="M9 15l6-6" />
      <path d="M11 6l1-1a4 4 0 0 1 6 6l-1 1" />
      <path d="M13 18l-1 1a4 4 0 0 1-6-6l1-1" />
    </>
  ),
  folder: <path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />,
  play: <path d="M8 5v14l11-7z" />,
  check: <path d="M5 12l5 5L20 7" />,
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.5-4.5" />
    </>
  ),
  image: (
    <>
      <path d="M3 17l5-5 4 4 3-3 6 6" />
      <circle cx="15.5" cy="8.5" r="1.5" />
    </>
  ),
}

export function Icon({ name, size = 22, stroke = 1.8, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
