import c from 'ansi-colors'
import type { ClientUser } from 'discord.js'

const PREFIX = '🤖 Rypîbot'
const PREFIX_INIT = c.bold.green(`${PREFIX} [INIT] > `)
const PREFIX_DEBUG = c.dim(`${PREFIX} [DEBUG] > `)
const PREFIX_ERROR = c.bold.bgRed(`${PREFIX} [ERROR] > `)

const error = (message: string): void => {
  return console.log(`\n${PREFIX_ERROR} ${message}\n`)
}

const debug = (message: string): void => {
  return console.log(`\n${PREFIX_DEBUG} ${message}\n`)
}

const init = (user: ClientUser): void => {
  return console.log(`\n${PREFIX_INIT} ${user.tag} is connected!\n`)
}

export const Logger = { error, debug, init }
