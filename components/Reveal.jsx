'use client'

import { useEffect, useRef, useState } from 'react'

// Wraps children and fades/slides them in when they scroll into view.
// `from` controls the entry direction: 'up' (default), 'left', 'right', 'down'.
// Usage: <Reveal delay={120} from="left"><Card/></Reveal>
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', from = 'up' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${from} ${visible ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
