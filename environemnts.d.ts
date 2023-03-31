declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_ID: string
      CLIENT_TOKEN: string
      GUILD_ID: string
    }
  }
}

export {}
