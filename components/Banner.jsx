import Link from 'next/link'
import { profile, stats } from '@/data/portfolio'
import { ArrowRight, Download, Sparkle } from './Icons'

// Hero banner: LEFT image, RIGHT content.
export default function Banner() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* LEFT — image */}
          <div className="hero-media reveal in">
            <div className="hero-figure">
              <div className="hero-photo">
                <img src="/profile.jpg" alt={profile.name} />
              </div>
              <div className="hero-float">
                <span className="ico"><Sparkle width={20} height={20} /></span>
                <span>
                  <span className="t">Open to work</span><br />
                  <span className="s">{profile.location}</span>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="hero-copy">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="hero-role">{profile.title}</p>
            <p className="hero-tagline">{profile.tagline}</p>

            <div className="hero-cta">
              <Link href="/projects" className="btn btn-primary">
                View Projects <ArrowRight className="arrow" width={18} height={18} />
              </Link>
              <a href={profile.cvUrl} download className="btn btn-ghost">
                <Download width={18} height={18} /> Download CV
              </a>
            </div>

            {stats?.length > 0 && (
              <div className="hero-stats">
                {stats.map((s) => (
                  <div className="hero-stat" key={s.label}>
                    <div className="num gradient-text">{s.value}</div>
                    <div className="lbl">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
