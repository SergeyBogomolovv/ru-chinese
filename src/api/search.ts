import data from '@/assets/terms.json'
import Fuse from 'fuse.js'

export const searchByTitle = (title: string) => {
  const options = {
    keys: ['title', 'translation'],
    threshold: 0.2,
    distance: 100,
    minMatchCharLength: 1,
  }

  const fuse = new Fuse(data, options)
  return fuse.search(title).map(({ item }) => item)
}
