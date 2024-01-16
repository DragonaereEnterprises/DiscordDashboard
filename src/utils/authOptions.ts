
import { NextAuthOptions } from "next-auth";
import Discord from "next-auth/providers/discord"

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { randomBytes, randomUUID } from "crypto";
const prisma = new PrismaClient()

const scopes = [ 'identify', 'email', "guilds", "applications.commands.permissions.update" ]

const providers = [
  Discord({
    clientId: process.env.DISCORD_CLIENT_ID ?? "",
    clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
    authorization: {params: {scope: scopes.join(' ')}},
  })
]

export const nextAuthOptions: NextAuthOptions = {
  providers,
  secret: '+Urs3ZfrKLJJkWgt3vYxGFGJj7HNvNNz16MI7Tyu/9k=',
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60,
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    }
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
    // You can define your own encode/decode functions for signing and encryption
    // async encode() {},
    // async decode() {},
  }
}