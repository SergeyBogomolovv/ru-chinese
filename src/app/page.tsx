import FeedbackDialog from '@/components/feedback-form'
import Results from '@/components/results'
import SearchWithSuggestions from '@/components/search-form'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Suspense } from 'react'
import logo from '@/assets/logo.svg'
import logo_wide from '@/assets/logo-wide.svg'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='p-4 md:p-8 lg:p-10 bg-[#1B365D] flex justify-between gap-2 md:gap-10 lg:gap-12'>
        <h1 className='lg:text-4xl sm:text-3xl text-md font-bold text-white'>
          Толковый русско-китайский <br /> строительный словарь
        </h1>
        <Image src={logo} alt='logo' className='md:hidden sm:w-20 w-10' />
        <Image
          src={logo_wide}
          alt='logo'
          className='hidden md:block w-30 sm:w-50 md:w-60 lg:w-70'
        />
      </header>

      <main className='flex flex-col gap-4 max-w-full w-[600px] mx-auto p-4 flex-1'>
        <Suspense>
          <SearchWithSuggestions />
          <Results />
        </Suspense>
      </main>

      <footer className='bg-[#101820] p-6 gap-2 text-white flex items-center justify-between flex-col sm:flex-row'>
        <FeedbackDialog lang='ru'>
          <Button variant='ghost' className='text-md border-2 w-full sm:w-fit border-gray-700'>
            Есть вопросы? Нажмите сюда
          </Button>
        </FeedbackDialog>
        <FeedbackDialog lang='zh'>
          <Button variant='ghost' className='text-md border-2 w-full sm:w-fit border-gray-700'>
            有什麼問題嗎？點這裡
          </Button>
        </FeedbackDialog>
      </footer>
    </div>
  )
}
