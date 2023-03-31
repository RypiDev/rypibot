import type { ApplicationCommandDataResolvable } from 'discord.js'

export interface RegisterCommandsOptions {
  guildId?: string
  commands: ApplicationCommandDataResolvable[]
}
