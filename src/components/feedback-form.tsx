'use client'

import { PropsWithChildren, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function FeedbackDialog({ children }: PropsWithChildren) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:asadulla2016@yandex.ru?subject=${encodeURIComponent(
      'Толковый русско-китайский строительный словарь - Обратная связь',
    )}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoLink
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Форма обратной связи</DialogTitle>
          <DialogDescription>Если вы заметили ошибку, сообщите нам</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <Textarea
            name='message'
            placeholder='Ваше сообщение'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button type='submit'>Отправить</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
