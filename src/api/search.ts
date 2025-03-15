'use server'
import Fuse from 'fuse.js'
import data from '@/assets/terms.json'

export const searchByTitle = async (title: string) => {
  const options = {
    keys: ['rusName', 'chineName'],
    threshold: 0.2,
    distance: 100,
    minMatchCharLength: 1,
  }

  const fuse = new Fuse(data, options)
  return fuse.search(title).map(({ item }) => item)
}

export const getByTitle = async (title: string) => {
  return data.find((item) => item.rusName === title) || null
}
