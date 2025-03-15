import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Info } from '@/models/info'

type Props = {
  data: Info
}

export default function InfoCard({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {data.rusName} - {data.chineName}
        </CardTitle>
        <CardDescription className='text-foreground'>
          Транскрипция: {data.transcription}
        </CardDescription>
        <CardDescription className='text-foreground'>
          Описание: {data.value} - {data.rusDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {data.image && (
          <Image
            alt={data.rusName}
            src={`/${data.image}`}
            width={500}
            height={500}
            className='rounded-lg'
          />
        )}
      </CardContent>
    </Card>
  )
}
