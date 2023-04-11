import { readdirSync } from 'node:fs'
import { extname } from 'node:path'

export const ROOT_DIR = (path: string): string => {
  return process.cwd() + `/${path}`
}

export const CONFIG_DIR = readdirSync(ROOT_DIR('config'))
export const ASSETS_DIR = (asset: string): string => {
  return `${ROOT_DIR('assets')}/${asset}`
}

export const YMLFILES = CONFIG_DIR.filter((file) => {
  const extension = extname(file)
  return extension === '.yml'
})
