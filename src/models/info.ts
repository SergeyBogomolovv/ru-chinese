import { z } from 'zod'

export const infoSchema = z.object({
  title: z.string(),
  translation: z.string(),
  transcription: z.string(),
  description: z.string(),
  description_ch: z.string(),
  image: z.string().url(),
})

export type Info = z.infer<typeof infoSchema>
