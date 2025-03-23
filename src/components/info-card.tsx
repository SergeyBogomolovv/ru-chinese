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

  return (
    <Card className='rounded-md'>
      <CardHeader>
        <CardTitle>
          {data.rusName} - {data.chineName}
        </CardTitle>
        <CardDescription className='text-foreground'>
          Транскрипция: {data.rusTranscription} - {data.transcription}
        </CardDescription>
        <CardDescription className='text-foreground'>
          <b>描述: </b>
          {data.value}
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
        <CardDescription className='text-foreground self-start'>
          <b>Описание: </b>
          {!isFullRus && data.rusDescription.length > 150
            ? data.rusDescription.slice(0, 150) + '...'
            : data.rusDescription}
          {data.rusDescription.length > 150 && (
            <small
              onClick={() => {
                setFullRus(!isFullRus)
              }}
              className='text-muted-foreground text-xs cursor-pointer'
            >
              {' '}
              {!isFullRus ? 'Еще' : 'Скрыть'}
            </small>
          )}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
