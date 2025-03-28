import { z } from 'zod'

export const infoSchema = z.object({
  rusName: z.string(),
  chineName: z.string(),
  transcription: z.string(),
  rusTranscription: z.string(),
  value: z.string(),
  image: z.nullable(z.string()),
  rusDescription: z.string(),
})

export type Info = z.infer<typeof infoSchema>
