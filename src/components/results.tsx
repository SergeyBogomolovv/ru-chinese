'use client'
import InfoCard from '@/components/info-card'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Info } from '@/models/info'
import { getByTitle } from '@/api/search'

export default function Results() {
  const searchParams = useSearchParams()
  const title = searchParams.get('search')
  const [item, setItem] = useState<Info | null>(null)

  useEffect(() => {
    getByTitle(title || '').then(setItem)
  }, [title])

  return (
    <div className='flex flex-col gap-4'>
      {!item ? (
        <div className='w-full justify-center text-muted-foreground text-center'>
          <p>Введите слово на русском или китайском</p>
          <p>輸入俄語或中文單字</p>
        </div>
      ) : (
        <InfoCard data={item} />
      )}
    </div>
  )
}
