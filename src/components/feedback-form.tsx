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

interface Props extends PropsWithChildren {
  lang: 'ru' | 'zh'
}

export default function FeedbackDialog({ children, lang }: Props) {
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
          <DialogTitle>{lang === 'ru' ? 'Форма обратной связи' : '回饋表'}</DialogTitle>
          <DialogDescription>
            {lang === 'ru' ? 'Если вы заметили ошибку, сообщите нам' : '如果您發現錯誤，請告訴我們'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <Input
            type='text'
            name='name'
            placeholder={lang === 'ru' ? 'Ваше имя' : '你的名字'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type='email'
            name='email'
            placeholder={lang === 'ru' ? 'Email для обратной связи' : '郵件'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Textarea
            name='message'
            placeholder={lang === 'ru' ? 'Ваше сообщение' : '您的留言'}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button type='submit'>{lang === 'ru' ? 'Отправить' : '發送訊息'}</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
