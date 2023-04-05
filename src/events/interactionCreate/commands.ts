import commands from '../../commands'
import type { Command, CommandMeta } from '../../types/Command'
import { event } from '../../utils/Event'
import { Reply } from '../../utils/Replies'

export const categoryCommands = commands
  .map((category) => {
    return category.commands
  })
  .flat()

const allCommandsMap = new Map<CommandMeta, Command>(
  categoryCommands.map((command) => {
    return [command.meta.name, command]
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
          log(`[${command.meta.name as string}]`, ...args)
        }
      })
    } catch (error) {
      log('[Command Error]', error)

      return await interaction.reply(Reply.error('Something went wrong :('))
    }
  }
)
