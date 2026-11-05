import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({ name: 'company', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'period', type: 'string', description: 'e.g. "Nov 2021 — Dec 2025"' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'summary', type: 'text', rows: 2 }),
    defineField({ name: 'highlights', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'tech', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'order', title: 'Sort order (lower = first)', type: 'number', initialValue: 0 }),
  ],
  orderings: [{ title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'company', subtitle: 'role' } },
})
