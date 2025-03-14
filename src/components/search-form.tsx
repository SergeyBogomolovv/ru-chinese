'use client'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/react'
import { Input } from '@/components/ui/input'
import { searchByTitle } from '@/api/search'
import { Info } from '@/models/info'
import { Search } from 'lucide-react'

export default function SearchWithSuggestions() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchValue = searchParams.get('search')
  const [query, setQuery] = useState(searchValue || '')
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [items, setItems] = useState<Info[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setQuery(searchValue || '')
    if (!searchValue) {
      setSelectedItem(null)
      setItems([])
    }
  }, [searchValue])

  useEffect(() => {
    if (!query) {
      setItems([])
      return
    }
    setIsLoading(true)
    const handler = setTimeout(() => {
      searchByTitle(query)
        .then(setItems)
        .finally(() => setIsLoading(false))
    }, 300)
    return () => clearTimeout(handler)
  }, [query])

  const updateSearchParams = (value: string) => {
    const params = new URLSearchParams()
    if (value) params.set('search', value)
    router.push(`?${params.toString()}`, { scroll: false })
  }

  return (
    <Combobox
      value={selectedItem}
      onChange={(value) => {
        setSelectedItem(value)
        setQuery(value || '')
        updateSearchParams(value || '')
      }}
    >
      <div className='relative w-full'>
        <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' size={20} />
        <ComboboxInput
          as={Input}
          placeholder='Поиск...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='w-full pl-10'
        />
        {query && (
          <ComboboxOptions className='absolute mt-1 w-full bg-white border rounded-lg shadow-md z-10'>
            {isLoading ? (
              <div className='p-2 text-gray-500'>Загрузка...</div>
            ) : items.length > 0 ? (
              items.map((item, i) => (
                <ComboboxOption
                  key={i}
                  value={item.rusName}
                  className='cursor-pointer p-2 hover:bg-gray-100'
                >
                  {item.rusName} - {item.chineName}
                </ComboboxOption>
              ))
            ) : (
              <div className='p-2 text-gray-500'>Ничего не найдено.</div>
            )}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  )
}
