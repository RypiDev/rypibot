import commands from '../../commands'
import type { Command } from '../../types/Command'
import { event } from '../../utils/Event'
import { Reply } from '../../utils/Replies'

export const allCommands = commands
  .map(({ commands }) => {
    return commands
  })
  .flat()
const allCommandsMap = new Map<string, Command>(
  allCommands.map((c) => {
    return [c.meta.name, c]
  })
)

export default event(
  'interactionCreate',
  async ({ log, client }, interaction) => {
    if (!interaction.isChatInputCommand()) return

    try {
      const commandName = interaction.commandName
      const command = allCommandsMap.get(commandName)

      if (command == null) throw new Error('Command not found...')

      await command.exec({
        client,
        interaction,
        log(...args) {
          log(`[${command.meta.name}]`, ...args)
        }
      })
    } catch (error) {
      log('[Command Error]', error)

      return await interaction.reply(Reply.error('Something went wrong :('))
    }
  }
)
