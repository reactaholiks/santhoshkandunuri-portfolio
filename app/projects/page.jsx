import { projects } from '@/data/portfolio'
import ProjectCard from '@/components/ProjectCard'
import Reveal from '@/components/Reveal'

export const metadata = {
  title: 'Projects — Santhosh Kandunuri',
  description: 'Selected projects across AI platforms, education ERP/LMS, hospitality and e-commerce.',
}

// Dedicated "project space" — shows every project.
export default function ProjectsPage() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Portfolio</span>
            <h1 className="section-title">All Projects</h1>
            <p className="section-subtitle">
              Everything I've worked on. Click any project to see the full details.
            </p>
          </Reveal>

          <div className="grid grid-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
