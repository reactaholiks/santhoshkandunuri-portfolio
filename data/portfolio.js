// ============================================================================
//  PORTFOLIO DATA — EDIT EVERYTHING HERE
// ----------------------------------------------------------------------------
//  This single file powers the whole site. Content below is pulled from
//  Santhosh Kandunuri's resume. Update the LinkedIn / GitHub handles (marked
//  TODO) with your real profile URLs when you have them.
// ============================================================================

export const profile = {
  name: 'Santhosh Kandunuri',
  // Short role/tagline shown under your name in the hero banner.
  title: 'Frontend Developer · React.js & Next.js',
  tagline:
    'I build responsive, scalable web applications with clean component ' +
    'architecture, smooth UX and fast performance.',
  // A longer intro used in the "About Me" section.
  about:
    'Frontend Developer with 4+ years of experience building responsive, ' +
    'scalable web applications using React.js, Next.js, JavaScript, ' +
    'TypeScript, Redux and Material UI.\n\n' +
    'I work across server-side rendering, reusable component architecture, ' +
    'REST API integration, state management and frontend performance ' +
    'optimization. With working knowledge of Node.js, Python, FastAPI and ' +
    'PostgreSQL, I contribute to full-stack applications spanning ERP/LMS ' +
    'platforms, e-commerce, hospitality and AI-enabled features.',
  location: 'Hyderabad, India',
  // Used by the contact form + footer.
  email: 'santhoshkandunuri0620@gmail.com',
  phone: '+91 81799 22274',
  // Path (inside /public) to your downloadable CV. The resume PDF is copied to
  // public/resume.pdf so this just works.
  cvUrl: '/resume.pdf',
}

// Social / professional links shown in the header area and footer.
// TODO: replace the LinkedIn / GitHub URLs with your actual profile handles.
export const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/santhosh-kandunuri', icon: 'linkedin' },
  { label: 'GitHub', url: 'https://github.com/santhoshkandunuri', icon: 'github' },
  { label: 'Email', url: 'mailto:santhoshkandunuri0620@gmail.com', icon: 'mail' },
]

// A few headline stats for the hero banner.
export const stats = [
  { value: '4+', label: 'Years experience' },
  { value: '4', label: 'Major projects' },
  { value: '2', label: 'Companies' },
]

// Skills shown as pills in the About section.
export const skills = [
  'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3',
  'Redux', 'MobX', 'Context API', 'Material UI', 'Tailwind CSS',
  'Node.js', 'Python', 'FastAPI', 'REST APIs', 'GraphQL',
  'PostgreSQL', 'MongoDB', 'Sanity.io', 'Strapi',
  'Git', 'Jira', 'Postman', 'Azure DevOps',
]

// ----------------------------------------------------------------------------
//  EXPERIENCE — one object per company.
// ----------------------------------------------------------------------------
export const experience = [
  {
    company: 'Sparity Soft Technologies Pvt. Ltd.',
    role: 'MERN Stack Developer',
    period: 'Dec 2025 — Present',
    location: 'Hyderabad, India',
    summary:
      'Building AI-enabled platforms and an Education ERP/LMS using React.js, ' +
      'Next.js, Redux and Python/FastAPI.',
    highlights: [
      'Build ERP/LMS and AI-enabled platforms with React.js, Next.js, Redux and Tailwind CSS — from student registration and admissions to dashboards.',
      'Contribute to backend integrations with Python/FastAPI, PostgreSQL and MongoDB for end-to-end application workflows.',
      'Implement role-based access control, multi-tenant configs, reporting/Excel export and integrations like WhatsApp (Interakt) and Metabase analytics.',
    ],
    tech: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB'],
  },
  {
    company: 'Techouts Solutions Pvt. Ltd.',
    role: 'MERN Stack Developer',
    period: 'Nov 2021 — Dec 2025',
    location: 'Hyderabad, India',
    summary:
      'Delivered hospitality and e-commerce web experiences for enterprise ' +
      'clients with React.js, Next.js, Material UI and CMS integrations.',
    highlights: [
      'Built responsive, content-driven pages for IHCL — TajHotels.com and SSBeauty.in with React.js, Next.js, Material UI and Sanity.io/Strapi CMS.',
      'Delivered hotel booking/modification/cancellation journeys and e-commerce PLP/PDP/cart flows via REST and Magento GraphQL APIs.',
      'Improved image loading, rendering and Core Web Vitals; won the "Fantastic Frontier" award (2024) for frontend performance.',
    ],
    tech: ['React.js', 'Next.js', 'Material UI', 'MobX', 'Sanity.io', 'Strapi', 'GraphQL', 'REST APIs'],
  },
]

// ----------------------------------------------------------------------------
//  PROJECTS — one object per project. `slug` must be unique (used in the URL).
//  Each detail page shows a LEFT banner image + RIGHT content.
//  Drop banner images in /public/projects/ and set `banner` to use them.
// ----------------------------------------------------------------------------
export const projects = [
  {
    slug: 'ai4ap',
    title: 'AI4AP',
    tagline: 'AI-enabled application platform.',
    banner: null,
    description:
      'An AI-enabled application platform where I contributed to frontend ' +
      'development and the integration of AI features into real application ' +
      'workflows, with a focus on modular, maintainable architecture.',
    features: [
      'Built frontend with React.js, Next.js, reusable components and state-management patterns.',
      'Integrated AI-enabled functionality with application workflows and backend APIs.',
      'Supported modular frontend and micro-frontend concepts to separate application features.',
      'Collaborated on backend integrations and data workflows connecting UIs with functionality.',
    ],
    tech: ['React.js', 'Next.js', 'Redux', 'REST APIs', 'Micro-frontends'],
    liveUrl: '',
    sourceUrl: '',
    year: '2026',
  },
  {
    slug: 'education-erp-lms',
    title: 'Education ERP / LMS / Job Portal',
    tagline: 'Education and student management platform.',
    banner: null,
    description:
      'A multi-tenant education platform handling the full student lifecycle — ' +
      'registration, admissions, enrolment, course assignment and batch ' +
      'allocation — with dashboards, analytics and an integrated LMS.',
    features: [
      'Developed features for student registration, admissions, enrolment, course assignment, batch allocation and dashboards.',
      'Built responsive interfaces with React.js, Next.js, Redux and Tailwind CSS, integrating APIs for application workflows.',
      'Contributed backend integrations with Python/FastAPI and PostgreSQL, plus MongoDB for applicable data workflows.',
      'Implemented role-based access control, tenant-specific configurations, reporting and Excel export.',
      'Integrated WhatsApp messaging via Interakt and dashboards/analytics via Metabase; built LMS document and video workflows.',
    ],
    tech: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Metabase'],
    liveUrl: '',
    sourceUrl: '',
    year: '2026',
  },
  {
    slug: 'tajhotels',
    title: 'IHCL — TajHotels.com',
    tagline: 'Hospitality and hotel booking platform.',
    banner: null,
    description:
      'The flagship booking platform for IHCL (Taj Hotels). I built responsive, ' +
      'content-driven pages and contributed to the end-to-end booking journey ' +
      'while improving performance and Core Web Vitals.',
    features: [
      'Developed responsive pages using React.js, Next.js, Material UI and reusable components.',
      'Integrated Sanity.io CMS content for dynamic, content-driven experiences.',
      'Contributed to hotel booking, modification and cancellation journeys via REST API integrations.',
      'Used MobX for state management and collaborated cross-functionally to resolve functional/UI issues.',
      'Improved image loading, rendering and Core Web Vitals for better performance.',
    ],
    tech: ['React.js', 'Next.js', 'Material UI', 'MobX', 'Sanity.io', 'REST APIs'],
    liveUrl: 'https://www.tajhotels.com',
    sourceUrl: '',
    year: '2022–2025',
  },
  {
    slug: 'ssbeauty',
    title: 'SSBeauty.in',
    tagline: 'E-commerce beauty products platform.',
    banner: null,
    description:
      'An e-commerce storefront for beauty products built on a headless stack. ' +
      'I developed reusable components and key shopping journeys powered by ' +
      'Strapi CMS content and Magento GraphQL.',
    features: [
      'Built reusable React components and dynamic pages from Strapi CMS content.',
      'Developed Homepage, Account, Wishlist, Product Listing (PLP) and Product Detail (PDP) pages.',
      'Integrated Magento GraphQL queries and mutations for product data and e-commerce workflows.',
      'Implemented cart and order functionality using frontend state management.',
    ],
    tech: ['React.js', 'Strapi', 'GraphQL', 'Magento', 'JavaScript'],
    liveUrl: 'https://www.ssbeauty.in',
    sourceUrl: '',
    year: '2022–2023',
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
