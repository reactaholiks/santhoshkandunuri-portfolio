import Link from 'next/link'
import { projects } from '@/data/portfolio'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import { ArrowRight } from './Icons'

// "Featured projects" preview on the home page (first 3). Full list lives on /projects.
export default function ProjectsSection() {
  const featured = projects.slice(0, 3)
  return (
    <section className="section" id="projects" style={{ background: 'var(--gradient-soft)' }}>
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of things I've designed and built. Click any card for the full case study.
          </p>
        </Reveal>

        <div className="grid grid-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        {projects.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link href="/projects" className="btn btn-outline">
              See all {projects.length} projects <ArrowRight className="arrow" width={18} height={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
