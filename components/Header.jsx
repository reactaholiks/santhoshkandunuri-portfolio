'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { profile } from '@/data/portfolio'
import { Download, ArrowRight } from './Icons'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation.
  useEffect(() => { setMenuOpen(false) }, [pathname])

  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const isActive = (to) => {
    if (to.includes('#')) return false
    return to === '/' ? pathname === '/' : pathname.startsWith(to)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="brand" aria-label="Home">
          <span className="brand-mark">{initials || 'P'}</span>
          <span>{profile.name}</span>
        </Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={`nav-link ${isActive(item.to) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a href={profile.cvUrl} download className="btn btn-ghost btn-cv-text">
            <Download width={17} height={17} /> Download CV
          </a>
          <Link href="/contact" className="btn btn-primary">
            Contact Me <ArrowRight className="arrow" width={17} height={17} />
          </Link>
          <button
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
