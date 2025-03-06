'use client'
import { useSearchParams } from 'next/navigation'
import data from '@/assets/terms.json'
import Fuse from 'fuse.js'

export const useSearch = () => {
  const searchParams = useSearchParams()
  const title = searchParams.get('search')
  if (!title) {
    return data.slice(0, 5).map((item) => ({ item }))
  }
  return searchByTitle(title)
}

export const searchByTitle = (title: string) => {
  const options = {
    keys: ['title', 'translation'],
    threshold: 0.2,
    distance: 100,
    minMatchCharLength: 1,
  }

  const fuse = new Fuse(data, options)
  return fuse.search(title)
}
