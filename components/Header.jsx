'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { profile } from '@/data/portfolio'
import { Download, ArrowRight, Sun, Moon } from './Icons'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const [theme, setTheme] = useState('light')
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation.
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Sync the toggle with the theme the no-flash script already applied to <html>.
  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      try { localStorage.setItem('theme', next) } catch (e) {}
      return next
    })
  }

  // Scroll-spy: highlight "About" when its section is in view (home page only).
  useEffect(() => {
    setActiveSection('top')
    if (pathname !== '/') return
    const about = document.getElementById('about')
    if (!about) return
    const obs = new IntersectionObserver(
      ([entry]) => setActiveSection(entry.isIntersecting ? 'about' : 'top'),
      { rootMargin: '-45% 0px -45% 0px' },
    )
    obs.observe(about)
    return () => obs.disconnect()
  }, [pathname])

  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const isActive = (to) => {
    // Hash links (e.g. /#about) highlight when that section is in view on home.
    if (to.includes('#')) return pathname === '/' && activeSection === 'about'
    // Home highlights only at the top of the home page (not when viewing About).
    if (to === '/') return pathname === '/' && activeSection === 'top'
    return pathname.startsWith(to)
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
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun width={18} height={18} /> : <Moon width={18} height={18} />}
          </button>
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
