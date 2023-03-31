import type {
  Command,
  CommandCategory,
  CommandCategoryExtra,
  CommandExec,
  CommandMeta
} from '../types/Command'

export const command = (meta: CommandMeta, exec: CommandExec): Command => {
  return { meta, exec }
}

export const category = (
  name: string,
  commands: Command[],
  extra: CommandCategoryExtra = {}
): CommandCategory => {
  return { name, commands, ...extra }
}
