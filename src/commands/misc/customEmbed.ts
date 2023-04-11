import { PermissionFlagsBits, SlashCommandBuilder } from 'discord.js'

import { command } from '../../utils/Command'
import { EMBEDYML_BUILDERS } from '../../utils/Embeds'

const meta = new SlashCommandBuilder()
  .setName('setup')
  .setDescription('Met en place la configuration par défaut du BOT.')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
  .addStringOption((option) => {
    return option
      .setName('embed')
      .setDescription('Met en place des messages embeds pré-définis avec images')
      .addChoices(
        ...EMBEDYML_BUILDERS.map((embed) => {
          return embed.choice
        })
      )
      .setRequired(true)
  })

export default command(meta, async ({ interaction }) => {
  const position = interaction.options.getString('embed')
  const targetEmbeds = EMBEDYML_BUILDERS[Number(position)].embeds

  await interaction.channel?.send({
    embeds: [targetEmbeds.image.embed, targetEmbeds.builder],
    files: [targetEmbeds.image.file]
  })

  const reply = await interaction.reply('Le message embed a été créé.')

  return setTimeout(async () => {
    await reply.delete()
  }, 2000)
})
