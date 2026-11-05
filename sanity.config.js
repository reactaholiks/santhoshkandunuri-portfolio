import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schema'
import { projectId, dataset } from './sanity/env'

// Config for the embedded Studio mounted at /studio.
export default defineConfig({
  name: 'portfolio',
  title: 'Santhosh Kandunuri — Portfolio',
  basePath: '/studio',
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool()],
})
