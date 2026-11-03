// Lightweight inline SVG icons — no icon library needed.
const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const ArrowRight = (p) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const ArrowLeft = (p) => (
  <svg {...base} {...p}><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
)
export const Download = (p) => (
  <svg {...base} {...p}><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
)
export const Mail = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
)
export const Phone = (p) => (
  <svg {...base} {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg>
)
export const MapPin = (p) => (
  <svg {...base} {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
)
export const Github = (p) => (
  <svg {...base} {...p}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6.4 0C6.3 1.6 5.2 1.9 5.2 1.9a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 3.7 9c0 5 3 6.3 6 6.6a3.4 3.4 0 0 0-1 2.5V22" /></svg>
)
export const Linkedin = (p) => (
  <svg {...base} {...p}><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
)
export const ExternalLink = (p) => (
  <svg {...base} {...p}><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
)
export const Sparkle = (p) => (
  <svg {...base} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>
)

export const iconByName = { github: Github, linkedin: Linkedin, mail: Mail }
