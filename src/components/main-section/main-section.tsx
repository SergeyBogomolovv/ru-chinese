'use client'
import InfoCard from '@/components/info-card/card'
import SearchWithSuggestions from '../search-form/search'
import { useSearchParams } from 'next/navigation'
import { searchByTitle } from '@/api/search'

export default function MainSection() {
  const searchParams = useSearchParams()
  const title = searchParams.get('search')
  const items = searchByTitle(title || '')
  return (
    <section className='flex flex-col gap-4 max-w-full w-[600px] mx-auto p-4'>
      <SearchWithSuggestions />
      {items.length === 0 && (
        <div className='w-full justify-center text-muted-foreground text-center'>
          <p>Начните поиск по словарю</p>
          <p>開始字典搜尋</p>
        </div>
      )}
      {items.map((item, i) => (
        <InfoCard
          key={i}
          data={{
            title: item.title,
            description: item.description,
            description_ch: item.description_ch,
            transcription: item.transcription,
            image: item.image.replace('/public', ''),
            translation: item.translation,
          }}
        />
      ))}
    </section>
  )
}
