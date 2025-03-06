import InfoCard from '@/components/info-card/card'
import SearchForm from '@/components/search-form/form'

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
      <header className='p-4 bg-accent'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-center'>
          Толковый русско-китайский строительный словарь
        </h1>
      </header>
      <section className='flex items-center justify-center p-4'>
        <SearchForm />
      </section>
      <section className='flex flex-col gap-2 max-w-[95%] mx-auto'>
        <InfoCard
          data={{
            title: 'Кусторез',
            description: 'gē guànjī',
            transcription: '割灌机是拖拉机的附件，设计用于从灌木和灌木丛中清除侧面区域',
            image:
              'https://autobau.ru/sites/default/files/imagecache/lightbox/srg_galerija_001.jpg',
          }}
        />
      </section>
    </main>
  )
}
