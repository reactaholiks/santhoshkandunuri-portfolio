import Link from 'next/link'
import { profile, socials } from '@/data/portfolio'
import { iconByName } from './Icons'

export default function Footer() {
  const year = 2026 // Update yearly, or wire to a build-time value.
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span className="brand-mark">
                {profile.name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase() || 'P'}
              </span>
              <span>{profile.name}</span>
            </Link>
            <p>{profile.tagline}</p>
            <div className="socials">
              {socials.map((s) => {
                const Icon = iconByName[s.icon]
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    className="social-btn"
                    aria-label={s.label}
                    target={s.url.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {Icon ? <Icon /> : s.label[0]}
                  </a>
                )
              })}
            </div>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Navigate</h4>
              <Link href="/">Home</Link>
              <Link href="/#about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
            <div className="footer-col">
              <h4>Get in touch</h4>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              <a href={profile.cvUrl} download>Download CV</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span>Built with Next.js.</span>
        </div>
      </div>
    </footer>
  )
}
