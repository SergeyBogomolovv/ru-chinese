'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/react'
import { Input } from '@/components/ui/input'
import { searchByTitle } from '@/api/search'

export default function SearchWithSuggestions() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('search') || '')
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const items = searchByTitle(query)

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
        <ComboboxInput
          as={Input}
          placeholder='Поиск...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='w-full'
        />
        {query && (
          <ComboboxOptions className='absolute mt-1 w-full bg-white border rounded-lg shadow-md z-10'>
            {items.length > 0 ? (
              items.map((item, i) => (
                <ComboboxOption
                  key={i}
                  value={item.title}
                  className='cursor-pointer p-2 hover:bg-gray-100'
                >
                  {item.title} - {item.translation}
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
