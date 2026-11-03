import Link from 'next/link'
import Reveal from './Reveal'
import { ArrowRight } from './Icons'

export default function CTA() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="cta">
            <h2>Have a project in mind?</h2>
            <p>I'm always open to discussing new work, collaborations, or opportunities. Let's build something great together.</p>
            <Link href="/contact" className="btn">
              Contact Me <ArrowRight className="arrow" width={18} height={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
