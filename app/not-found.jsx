import Link from 'next/link'
import { ArrowLeft } from '@/components/Icons'

export default function NotFound() {
  return (
    <div className="page">
      <section className="section">
        <div className="container notfound">
          <div>
            <div className="code gradient-text">404</div>
            <h1 style={{ marginTop: 8 }}>Page not found</h1>
            <p className="section-subtitle">
              The page you're looking for doesn't exist or has moved.
            </p>
            <Link href="/" className="btn btn-primary" style={{ marginTop: 24 }}>
              <ArrowLeft width={18} height={18} /> Back home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
