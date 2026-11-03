import Link from 'next/link'
import { ArrowRight } from './Icons'

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="card project-card">
      <div className="project-thumb" style={{ background: 'var(--gradient)' }}>
        {project.banner ? (
          <img src={project.banner} alt={project.title} loading="lazy" />
        ) : (
          <span className="ph">{project.title}</span>
        )}
        {project.year && <span className="project-year">{project.year}</span>}
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="tagline">{project.tagline}</p>
        {project.tech?.length > 0 && (
          <div className="pills">
            {project.tech.slice(0, 4).map((t) => <span className="pill" key={t}>{t}</span>)}
          </div>
        )}
        <span className="project-link">
          View project <ArrowRight className="arrow" width={16} height={16} />
        </span>
      </div>
    </Link>
  )
}
