import { PermissionFlagsBits, SlashCommandBuilder } from 'discord.js'

import { command } from '../../utils/Command'
import { ASSETS } from '../../utils/Assets'
import { EmbedEnum, getEmbed } from '../../config/Embeds'

const meta = new SlashCommandBuilder()
  .setName('setup')
  .setDescription('Mets en place la configuration par défaut du BOT.')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
  .addStringOption((option) => {
    return option
      .setName('embed')
      .setDescription('Mets en place des messages embeds pré-définis.')
      .addChoices({
        name: 'RÉGLEMENT',
        value: String(EmbedEnum.REGLEMENT_EMBED)
      })
      .setRequired(true)
  })

export default command(meta, async ({ interaction }) => {
  const embedType = interaction.options.getString('embed')
  const targetEmbeds = getEmbed(embedType as string)

  await interaction.channel?.send({
    embeds: [...targetEmbeds],
    files: [ASSETS.REGLEMENT.FILE]
  })

  const reply = await interaction.reply('Le message embed a été créé.')

  return setTimeout(async () => {
    await reply.delete()
  }, 2000)
})
