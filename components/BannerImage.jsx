'use client'

import { useState } from 'react'

// Renders a project banner image, falling back to a gradient + title label if
// the image is missing or fails to load (so nothing ever looks broken).
export default function BannerImage({ src, alt }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return <span className="ph">{alt}</span>
  }

  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}
