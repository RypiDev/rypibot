import type { Client } from 'discord.js'

import type { Event, EventExec, EventKeys } from '../types/Event'
import { Logger } from './Logger'

export const event = <T extends EventKeys>(id: T, exec: EventExec<T>): Event<T> => {
  return { id, exec }
}

export const registerEvents = (client: Client, events: Array<Event<any>>): void => {
  for (const event of events)
    client.on(event.id, async (...args) => {
      const props = {
        client,
        log: (...args: unknown[]) => {
          return console.log(`[${event.id as number}]`, ...args)
        }
      }

      try {
        await event.exec(props, ...args)
      } catch (error) {
        Logger.error(error as string)
      }
    })
}
