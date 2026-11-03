import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProject, projects } from '@/data/portfolio'
import { ArrowLeft, ExternalLink, Github } from '@/components/Icons'
import Reveal from '@/components/Reveal'

// Pre-render a static page for every project slug.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project not found' }
  return {
    title: `${project.title} — Santhosh Kandunuri`,
    description: project.tagline,
  }
}

// Project detail: LEFT banner image, RIGHT content.
export default async function ProjectDetail({ params }) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  return (
    <div className="page">
      <section className="section detail-hero">
        <div className="container">
          <Link href="/projects" className="back-link">
            <ArrowLeft width={18} height={18} /> Back to projects
          </Link>

          <div className="detail-grid">
            {/* LEFT — banner */}
            <Reveal className="detail-banner">
              {project.banner ? (
                <img src={project.banner} alt={project.title} />
              ) : (
                <span className="ph">{project.title}<br /><small style={{ fontWeight: 400, fontSize: '0.9rem', opacity: 0.85 }}>banner coming soon</small></span>
              )}
            </Reveal>

            {/* RIGHT — content */}
            <Reveal className="detail-content" delay={120}>
              {project.year && <span className="eyebrow">{project.year}</span>}
              <h1>{project.title}</h1>
              <p className="tagline">{project.tagline}</p>
              <p className="desc">{project.description}</p>

              {project.features?.length > 0 && (
                <ul className="detail-features">
                  {project.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              )}

              {project.tech?.length > 0 && (
                <div className="pills">
                  {project.tech.map((t) => <span className="pill" key={t}>{t}</span>)}
                </div>
              )}

              <div className="detail-actions">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Live demo <ExternalLink width={17} height={17} />
                  </a>
                )}
                {project.sourceUrl && (
                  <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
                    <Github width={17} height={17} /> Source code
                  </a>
                )}
                <Link href="/contact" className="btn btn-outline">Discuss this project</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
