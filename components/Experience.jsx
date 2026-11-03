import { experience, stats } from '@/data/portfolio'
import { MapPin } from './Icons'
import Reveal from './Reveal'

export default function Experience() {
  // Pull the "years experience" figure from stats so it stays in sync.
  const years = stats.find((s) => /year/i.test(s.label))?.value

  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Career</span>
          <h2 className="section-title">
            Experience
            {years && <span className="title-badge">{years} years</span>}
          </h2>
          <p className="section-subtitle">
            Companies I've worked with and what I built there.
          </p>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <article className="card exp-card">
                <div className="exp-top">
                  <div className="exp-company">
                    <span className="exp-logo">{job.company[0]}</span>
                    <div>
                      <h3>{job.company}</h3>
                      <span className="role">{job.role}</span>
                    </div>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{job.period}</span>
                    {job.location && (
                      <div style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                        <MapPin width={14} height={14} /> {job.location}
                      </div>
                    )}
                  </div>
                </div>

                {job.summary && <p className="exp-summary">{job.summary}</p>}

                {job.highlights?.length > 0 && (
                  <ul className="exp-highlights">
                    {job.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
                  </ul>
                )}

                {job.tech?.length > 0 && (
                  <div className="pills">
                    {job.tech.map((t) => <span className="pill" key={t}>{t}</span>)}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
