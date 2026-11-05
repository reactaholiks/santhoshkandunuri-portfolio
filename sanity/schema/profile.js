import { defineType, defineField } from 'sanity'

// Singleton: your personal details, stats, skills and social links.
export default defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'title', title: 'Role / headline', type: 'string' }),
    defineField({ name: 'tagline', type: 'text', rows: 2 }),
    defineField({ name: 'about', type: 'text', rows: 5, description: 'Use a blank line to separate paragraphs.' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'email', type: 'string' }),
    defineField({ name: 'phone', type: 'string' }),
    defineField({ name: 'cvUrl', title: 'CV path or URL', type: 'string' }),
    defineField({
      name: 'stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', type: 'string' },
          { name: 'label', type: 'string' },
        ],
      }],
    }),
    defineField({ name: 'skills', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({
      name: 'socials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'string' },
          { name: 'url', type: 'url', validation: (r) => r.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }) },
          { name: 'icon', type: 'string', options: { list: ['linkedin', 'github', 'mail'] } },
        ],
      }],
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'title' } },
})
