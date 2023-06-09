import { resolve } from 'node:path'

import { config } from 'dotenv'
import { Client, GatewayIntentBits, REST, Routes } from 'discord.js'

import { allCommands } from './events/interactionCreate/commands'
import { Logger } from './utils/Logger'
import { registerEvents } from './utils/Event'
import RypiEvents from './events'

config({ path: resolve(__dirname, '..', '.env') })

const RypiClient = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages
  ]
})

const rest = new REST({ version: '10' }).setToken(
  String(process.env.CLIENT_TOKEN)
)

registerEvents(RypiClient, RypiEvents)
;(async () => {
  await rest.put(Routes.applicationCommands(String(process.env.APP_ID)), {
    body: allCommands.map((c) => {
      return c.meta
    })
  })
})().catch((error) => {
  Logger.error(error)
})

RypiClient.login(process.env.CLIENT_TOKEN).catch((error) => {
  Logger.error(error)
  process.exit(1)
})
