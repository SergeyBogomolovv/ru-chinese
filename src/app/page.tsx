import MainSection from '@/components/main-section/main-section'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
      <header className='p-4 bg-accent'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-center'>
          Толковый русско-китайский строительный словарь
        </h1>
      </header>

      <Suspense>
        <MainSection />
      </Suspense>
    </main>
  )
}
