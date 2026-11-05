import { groq } from 'next-sanity'

export const profileQuery = groq`*[_type == "profile"][0]{
  name, title, tagline, about, location, email, phone, cvUrl,
  stats[]{value, label},
  skills,
  socials[]{label, url, icon}
}`

export const experienceQuery = groq`*[_type == "experience"] | order(order asc){
  company, role, period, location, summary, highlights, tech
}`

export const projectsQuery = groq`*[_type == "project"] | order(order asc){
  title, "slug": slug.current, tagline, banner, description, features, tech, liveUrl, sourceUrl, year
}`

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  title, "slug": slug.current, tagline, banner, description, features, tech, liveUrl, sourceUrl, year
}`
