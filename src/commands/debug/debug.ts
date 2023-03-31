import { SlashCommandBuilder } from 'discord.js'

import { command } from '../../utils/Command'

const meta = new SlashCommandBuilder()
  .setName('info')
  .setDescription('test commande.')
  .addStringOption((option) => {
    return option
      .setName('message')
      .setDescription('test commande 2.')
      .setMinLength(1)
      .setAutocomplete(true)
      .setMaxLength(2000)
      .setRequired(false)
  })

export default command(meta, async ({ interaction }) => {
  const message = interaction.options.getString('message')

  return await interaction.reply({
    ephemeral: true,
    content: message ?? 'it works !'
  })
})
