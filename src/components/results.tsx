'use client'
import InfoCard from '@/components/info-card'
import { useSearchParams } from 'next/navigation'
import data from '@/assets/terms.json'

export default function Results() {
  const searchParams = useSearchParams()
  const title = searchParams.get('search')
  const item = data.find((item) => item.rusName === title)

  return (
    <div className='flex flex-col gap-4'>
      {!item ? (
        <div className='w-full justify-center text-muted-foreground text-center'>
          <p>Начните поиск по словарю</p>
          <p>開始字典搜尋</p>
        </div>
      ) : (
        <InfoCard data={item} />
      )}
    </div>
  )
}
