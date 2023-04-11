import type { APIApplicationCommandOptionChoice, AttachmentBuilder, EmbedBuilder } from 'discord.js'

export interface EmbedYMLBuilder {
  choice: APIApplicationCommandOptionChoice<string>
  embeds: {
    builder: EmbedBuilder
    image: { embed: EmbedBuilder; file: AttachmentBuilder }
  }
}
