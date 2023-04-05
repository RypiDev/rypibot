import { AttachmentBuilder } from 'discord.js'

const dir = (asset: string): string => {
  return process.cwd() + `/assets/${asset}`
}

export const ASSETS = {
  REGLEMENT: {
    FILE: new AttachmentBuilder(dir('REGLEMENT.jpg')),
    PATH: 'attachment://REGLEMENT.jpg'
  }
}
