import { readFileSync } from 'node:fs'

import { load } from 'js-yaml'
import { AttachmentBuilder, EmbedBuilder } from 'discord.js'

import type { EmbedYMLBuilder } from '../types/Embed'
import type { IEmbedYMLBuilder } from './YML'
import { parseYML } from './YML'
import { ASSETS_DIR, ROOT_DIR, YMLFILES } from './Config'

export const EMBEDYML_BUILDERS: EmbedYMLBuilder[] = YMLFILES.map((yml, index) => {
  const dataYML = load(readFileSync(`${ROOT_DIR('config')}/${yml}`, 'utf8')) as IEmbedYMLBuilder

  const builder = parseYML(dataYML)
  const imageEmbed = new EmbedBuilder({
    color: dataYML.image?.color,
    image: { url: `attachment://${dataYML.image.file}` }
  })

  return {
    choice: { name: yml.replace('.yml', ''), value: String(index) },
    embeds: {
      image: {
        embed: imageEmbed,
        file: new AttachmentBuilder(ASSETS_DIR(dataYML.image.file))
      },
      builder
    }
  }
})
