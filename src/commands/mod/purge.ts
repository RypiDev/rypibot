import { PermissionFlagsBits, SlashCommandBuilder } from 'discord.js'

import { command } from '../../utils/Command'

const meta = new SlashCommandBuilder()
  .setName('purge')
  .setDescription('Supprimer les messages dans un salon')
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
  .addNumberOption((option) => {
    return option
      .setName('amount')
      .setDescription('Nombre de messages à supprimer')
      .setMinValue(1)
      .setMaxValue(99)
      .setRequired(true)
  })

export default command(meta, async ({ interaction }) => {
  const amount = interaction.options.getNumber('amount') as number

  const messages = await interaction.channel?.messages.fetch({
    limit: amount + 1
  })

  if (messages?.size !== 0) {
    messages?.forEach(async (message) => {
      await interaction.channel?.messages.delete(message)
    })

    const reply = await interaction.reply(`${amount} messages ont été supprimés`)

    return setTimeout(async () => {
      if (!Boolean(reply)) return
      return await reply.delete()
    }, 2000)
  } else {
    const reply = await interaction.reply('Pas de messages à supprimer')

    return setTimeout(async () => {
      if (!Boolean(reply)) return
      return await reply.delete()
    }, 2000)
  }
})
