import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"

import Discord from "next-auth/providers/discord"
import type { NextAuthOptions } from "next-auth";
import { fetchGuildsWithPerms } from "./fetchGuildsWithPerms";

// Still want to add a way to save user info if possible... But maybe don't for security purposes :KEKW:

const scopes = [ 'identify', 'email', "guilds", "applications.commands.permissions.update" ]

const providers = [
  Discord({
    clientId: process.env.DISCORD_CLIENT_ID ?? "",
    clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
    allowDangerousEmailAccountLinking: true,
    authorization: {params: {scope: scopes.join(' ')}},
  })
]

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user'
  },
  providers,
  callbacks: {
    async jwt({ token, user, profile, account }) {
      if(user){
        token.id = user.id
      }
      if (account) {
        token.accessToken = account.access_token;
        token.tokenType = account.token_type;
        token.global_name = account.global_name
      }
      if (profile) {
        token.profile = profile;
        token.global_name = profile.global_name
      }
      // token.guilds = fetchGuildsWithPerms(account?.access_token?)
      return token
    },
    session({ session, token }) {
      return { ...session,
        user: { ...session.user,
          id: token.id,
          global_name: token.global_name,
          accessToken: token.access_token,
          tokenType: token.tokenType,
          discordUser: token.profile
        }
      }
    },
    async signIn() {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        return false
      }
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
} satisfies NextAuthOptions

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, authOptions)
}