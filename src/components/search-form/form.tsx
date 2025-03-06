'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { useForm } from 'react-hook-form'

type SearchFormValues = {
  search: string
}

export default function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const form = useForm<SearchFormValues>({
    defaultValues: {
      search: searchParams.get('search') || '',
    },
  })

  const handleSearch = (values: SearchFormValues) => {
    const params = new URLSearchParams(searchParams)
    if (values.search) {
      params.set('search', values.search)
    } else {
      params.delete('search')
    }
    router.push(`?${params.toString()}`)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSearch)}
        className='flex sm:flex-row flex-col gap-2 w-full max-w-[500px]'
      >
        <FormField
          control={form.control}
          name='search'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormControl>
                <Input type='search' {...field} placeholder='Поиск...' className='w-full' />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type='submit'>Искать</Button>
      </form>
    </Form>
  )
}
