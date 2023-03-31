import type { Event } from '../types/Event'
import ready from './ready'
import interactionCreate from './interactionCreate'

const RypiEvents: Array<Event<any>> = [...interactionCreate, ready]

export default RypiEvents
