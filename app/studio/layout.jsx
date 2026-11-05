// Server layout for the Studio route. Holds the route-segment config and the
// Studio's own <head> metadata, keeping the client page (page.jsx) lean.
export { metadata, viewport } from 'next-sanity/studio'

export const dynamic = 'force-static'

export default function StudioLayout({ children }) {
  return children
}
