'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Info } from '@/models/info'
import { useState } from 'react'
import { Image } from 'antd'

type Props = {
  data: Info
}

export default function InfoCard({ data }: Props) {
  const [isFullRus, setFullRus] = useState(false)
  const [isFullZh, setFullZh] = useState(false)

  return (
    <Card className='rounded-md'>
      <CardHeader>
        <CardTitle>
          {data.rusName} - {data.chineName}
        </CardTitle>
        <CardDescription className='text-foreground'>
          Транскрипция: {data.transcription}
        </CardDescription>
        <CardDescription
          className='text-foreground cursor-pointer'
          onClick={() => {
            if (data.value.length > 50) setFullZh(!isFullZh)
          }}
        >
          <b>描述: </b>
          {!isFullZh && data.value.length > 50 ? data.value.slice(0, 50) + '...' : data.value}
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col items-center gap-4'>
        {data.image && (
          <Image
            wrapperClassName='w-full'
            alt={data.rusName}
            src={`/${data.image}`}
            className='rounded-md'
          />
        )}
        <CardDescription
          className='text-foreground cursor-pointer'
          onClick={() => {
            if (data.rusDescription.length > 150) setFullRus(!isFullRus)
          }}
        >
          <b>Описание: </b>
          {!isFullRus && data.rusDescription.length > 150
            ? data.rusDescription.slice(0, 150) + '...'
            : data.rusDescription}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
