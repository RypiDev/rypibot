import type { EmbedData } from 'discord.js'
import { hyperlink, EmbedBuilder } from 'discord.js'
import { z } from 'zod'

export type IEmbedYMLBuilder = z.infer<typeof EmbedBuilderSCHEMA>

const EmbedBuilderSCHEMA = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  fields: z.array(z.object({ name: z.string(), value: z.string() }).nullish()),
  image: z.object({ color: z.number(), file: z.string() })
})

const validateYML = (data: unknown): EmbedData => {
  EmbedBuilderSCHEMA.parse(data)
  return data as EmbedData
}

export const parseYML = (data: unknown): EmbedBuilder => {
  const embedYML = validateYML(data)

  return new EmbedBuilder({
    title: embedYML.title,
    description: embedYML.description,
    fields: embedYML.fields?.map((field) => {
      if (field != null) {
        const regex = /\[(.*?)]\((.*?)\)|\((.*?)\)(?=\s*\[)/g
        const matches = [...field.value.matchAll(regex)]

        matches.map((match) => {
          return field.value.replace(match[0], hyperlink(match[1], match[2]))
        })

        return field
      } else return { name: '\n', value: '\n' }
    })
  })
}
