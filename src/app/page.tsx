import FeedbackDialog from '@/components/feedback-form'
import Results from '@/components/results'
import SearchWithSuggestions from '@/components/search-form'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Suspense } from 'react'
import logo from '@/assets/logo-white.svg'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='p-6 md:p-8 lg:p-10 bg-[#1B365D] flex flex-col justify-center gap-8 md:gap-10 lg:gap-12'>
        <Image src={logo} alt='logo' className='w-50 md:w-60' />
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-white'>
          Толковый русско-китайский <br /> строительный словарь
        </h1>
      </header>

      <main className='flex flex-col gap-4 max-w-full w-[600px] mx-auto p-4 flex-1'>
        <Suspense>
          <SearchWithSuggestions />
          <Results />
        </Suspense>
      </main>

      <footer className='bg-[#101820] p-6 gap-2 text-white flex items-center justify-between flex-col sm:flex-row'>
        <FeedbackDialog lang='ru'>
          <Button variant='ghost' className='text-md'>
            Есть вопросы? Нажмите сюда
          </Button>
        </FeedbackDialog>
        <FeedbackDialog lang='zh'>
          <Button variant='ghost' className='text-md'>
            有什麼問題嗎？點這裡
          </Button>
        </FeedbackDialog>
      </footer>
    </div>
  )
}
