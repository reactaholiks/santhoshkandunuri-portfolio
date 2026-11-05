'use client'

// Embedded Sanity Studio — the content editor, served at /studio.
// Must be a Client Component so Sanity's library resolves with browser/client
// export conditions (not React Server Components), which it requires.
import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
