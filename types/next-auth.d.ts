import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      image: string
      id: string
      name: string
      email: string
      token: string
    }
  }

  interface User {
    image: string
    id: string
    name: string
    name: string
    token: string
  }
}