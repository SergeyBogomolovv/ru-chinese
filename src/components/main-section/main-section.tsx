'use client'
import InfoCard from '@/components/info-card/card'
import { useSearch } from '@/api/search'
import SearchWithSuggestions from '../search-form/search'

export default function MainSection() {
  const searched = useSearch()
  return (
    <section className='flex flex-col gap-4 max-w-[600px] mx-auto p-4'>
      <SearchWithSuggestions />
      {searched.map(({ item }, i) => (
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
