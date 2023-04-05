import { Colors, EmbedBuilder, hyperlink } from 'discord.js'

import { ASSETS } from '../utils/Assets'

export enum EmbedEnum {
  REGLEMENT_EMBED = 0
}

const REGLEMENT_EMBEDS = [
  new EmbedBuilder().setColor(Colors.Blue).setImage(ASSETS.REGLEMENT.PATH),
  new EmbedBuilder()
    .setColor(Colors.DarkButNotBlack)
    .setDescription(
      '> 📜 Comme sur toute plateforme, il est important de respecter quelques règles pour conserver une ambiance saine et plaisante pour tous.'
    )
    .addFields(
      { name: '\n', value: '\n' },
      {
        name: '🔹 1. Règles de vie en communauté',
        value: `- Respecter la totalité des ${hyperlink(
          'TOS',
          'https://discord.com/terms'
        )} et les ${hyperlink(
          'Community Guidelines',
          'https://discord.com/guidelines'
        )} de Discord. \n - Un comportement respectueux est demandé pour chaque membre. \n - Tout type de nuisance à la vie du serveur (spam, mention abusive, dénigrement des artistes) se verra sanctionné. \n - Les débats autour de sujets jugés sensibles par notre équipe staff se verra interdit et sanctionné si abus. \n - Un comportement nuisible et l'utilisation de Soundboard abusivement en vocal sont bannissables. \n - Les promotions de services payantes de toutes sortes sont strictement interdites au sein du serveur.`
      },
      { name: '\n', value: '\n' },
      {
        name: "🔹 2. Règles du partage d'informations",
        value:
          "- Il est interdit de donner des liens que ce soit en message privé ou dans un salon qui amènent vers des sites frauduleux ou des téléchargements illégaux ou à caractère pornographique. \n - Les publicités en message privé sont interdites, un salon dédié à la pub est à votre disposition uniquement pour puber son rétro. \n - La propagation d'informations privées ou personnelles se verra sanctionnée sévèrement. \n - S'approprier tout code open-source de Rypî sous tout autres noms au public sera définitivement banni de ce serveur."
      }
    )
]

export const getEmbed = (type: string): EmbedBuilder[] => {
  switch (type) {
    case String(EmbedEnum.REGLEMENT_EMBED):
      return REGLEMENT_EMBEDS
    default:
      return [new EmbedBuilder()]
  }
}
