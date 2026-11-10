import Banner from '@/components/Banner'
import Experience from '@/components/Experience'
import ProjectsSection from '@/components/ProjectsSection'
import About from '@/components/About'
import CTA from '@/components/CTA'

// Home layout order: Banner → Projects → Experience → About → CTA → (global Footer)
export default function Home() {
  return (
    <div className="page">
      <Banner />
      <ProjectsSection />
      <Experience />
      <About />
      <CTA />
    </div>
  )
}
