import { profile, skills } from '@/data/portfolio'
import { Mail, MapPin, Phone } from './Icons'
import Reveal from './Reveal'

export default function About() {
  // Split the about text into paragraphs on blank lines, if any.
  const paragraphs = profile.about.split('\n\n').filter(Boolean)

  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Introduction</span>
          <h2 className="section-title">About Me</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}

            {skills?.length > 0 && (
              <div className="about-skills">
                <h4>Skills &amp; tools</h4>
                <div className="pills">
                  {skills.map((s) => <span className="pill" key={s}>{s}</span>)}
                </div>
              </div>
            )}
          </Reveal>

          <Reveal delay={120}>
            <div className="about-card">
              <div className="row">
                <span className="ico"><Mail width={18} height={18} /></span>
                <div><div className="k">Email</div><div className="v">{profile.email}</div></div>
              </div>
              <div className="row">
                <span className="ico"><Phone width={18} height={18} /></span>
                <div><div className="k">Phone</div><div className="v">{profile.phone}</div></div>
              </div>
              <div className="row">
                <span className="ico"><MapPin width={18} height={18} /></span>
                <div><div className="k">Location</div><div className="v">{profile.location}</div></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
