import Banner from '@/components/Banner'
import Experience from '@/components/Experience'
import ProjectsSection from '@/components/ProjectsSection'
import About from '@/components/About'
import CTA from '@/components/CTA'

// Home layout order: Banner → Experience → Projects → About → CTA → (global Footer)
export default function Home() {
  return (
    <div className="page">
      <Banner />
      <Experience />
      <ProjectsSection />
      <About />
      <CTA />
    </div>
  )
}
