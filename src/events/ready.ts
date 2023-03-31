import { event } from '../utils/Event'
import { Logger } from '../utils/Logger'

export default event('ready', (_, client) => {
  return Logger.init(client.user)
})
