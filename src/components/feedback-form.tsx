'use client'

import { PropsWithChildren, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
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
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:asadulla2016@yandex.ru?subject=${encodeURIComponent(
      'Толковый русско-китайский строительный словарь - Обратная связь',
    )}&body=${encodeURIComponent(`Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`)}`
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
          <Input
            type='text'
            name='name'
            placeholder='Ваше имя'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type='email'
            name='email'
            placeholder='Email для обратной связи'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
