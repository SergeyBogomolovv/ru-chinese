import FeedbackDialog from '@/components/feedback-form'
import Results from '@/components/results'
import SearchWithSuggestions from '@/components/search-form'
import { Button } from '@/components/ui/button'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
      <header className='p-4 bg-accent'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-center'>
          Толковый русско-китайский строительный словарь
        </h1>
      </header>

      <section className='flex flex-col gap-4 max-w-full w-[600px] mx-auto p-4'>
        <Suspense>
          <SearchWithSuggestions />
        </Suspense>
        <Suspense>
          <Results />
        </Suspense>
        <FeedbackDialog>
          <Button variant='ghost' className='w-fit mx-auto mt-3' size='lg'>
            Что то не так?
          </Button>
        </FeedbackDialog>
      </section>
    </main>
  )
}
