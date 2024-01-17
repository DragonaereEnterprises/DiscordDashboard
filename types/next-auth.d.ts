import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      image: string
      name: string
      global_name: string
      access_tokens: string
      email: string
    }
    account: {
    }
  }

  interface Profile {
    id: string
    global_name: string
  }

  interface User {
    image: string
    id: string
    name: string
    global_name: string
    access_tokens: string
  }
}