import { projects } from '@/data/portfolio'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

// Shows ALL projects directly on the home page.
export default function ProjectsSection() {
  return (
    <section className="section" id="projects" style={{ background: 'var(--gradient-soft)' }}>
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of things I've designed and built. Click any card for the full case study.
          </p>
        </Reveal>

        <div className="grid grid-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
