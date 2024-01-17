import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      image: string
      id: string
      name: string
      global_name: string
      access_tokens: string
    }
    account: {
    }
  }

  interface Profile {
    id: string
    global_name: string
  }

  interface User {
    id: string
    display_name: string
  }
}