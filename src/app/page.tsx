'use client'
import InfoCard from '@/components/info-card/card'
import SearchForm from '@/components/search-form/form'
import { useSearch } from '@/api/search'

export default function Home() {
  const searched = useSearch()
  return (
    <main className='flex flex-col min-h-screen'>
      <header className='p-4 bg-accent'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-center'>
          Толковый русско-китайский строительный словарь
        </h1>
      </header>
      <section className='flex flex-col gap-4 max-w-[600px] mx-auto p-4'>
        <SearchForm />
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
    </main>
  )
}
