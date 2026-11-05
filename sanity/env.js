// Sanity connection settings, read from env. Fill these in .env.local.
// A non-empty fallback keeps `next build` from throwing before you add a real
// project — the Studio / queries just won't return data until the ID is set.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01'

// True once a real project id is configured — used to decide whether to fetch
// from Sanity or fall back to the static data file.
export const sanityEnabled = projectId !== 'placeholder'
