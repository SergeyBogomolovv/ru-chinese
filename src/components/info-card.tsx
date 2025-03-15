'use client'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Info } from '@/models/info'
import { useState } from 'react'

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
      </CardHeader>
      <CardContent>
        {data.image && (
          <Image
            alt={data.rusName}
            src={`/${data.image}`}
            width={500}
            height={500}
            className='rounded-md mx-auto'
          />
        )}
        <CardDescription
          className='text-foreground mt-2 mb-4 cursor-pointer'
          onClick={() => {
            if (data.rusDescription.length > 100) setFullRus(!isFullRus)
          }}
        >
          <b>Описание: </b>
          {!isFullRus && data.rusDescription.length > 100
            ? data.rusDescription.slice(0, 100) + '...'
            : data.rusDescription}
        </CardDescription>
        <CardDescription
          className='text-foreground cursor-pointer'
          onClick={() => {
            if (data.value.length > 50) setFullZh(!isFullZh)
          }}
        >
          <b>描述: </b>
          {!isFullZh && data.value.length > 100 ? data.value.slice(0, 50) + '...' : data.value}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
