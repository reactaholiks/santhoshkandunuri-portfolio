import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = imageUrlBuilder(client)

// Turn a Sanity image reference into a URL: urlFor(img).width(1200).url()
export const urlFor = (source) => builder.image(source)
