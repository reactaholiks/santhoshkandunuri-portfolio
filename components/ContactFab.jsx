'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MessageCircle } from './Icons'

// Floating "Contact me" button (chat-style) shown on mobile/tablet, where the
// header's Contact button is hidden to save space. Hidden on the contact page.
export default function ContactFab() {
  const pathname = usePathname()
  if (pathname === '/contact') return null

  return (
    <Link href="/contact" className="contact-fab" aria-label="Contact me" title="Contact me">
      <MessageCircle width={24} height={24} />
    </Link>
  )
}
