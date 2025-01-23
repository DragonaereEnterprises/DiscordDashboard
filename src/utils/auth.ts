import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    jwt({ token, account }: { token: any, account: any }) {
      if (account) { 
        token.id = account.access_token
      }
      return token
    },
    session({ session, token }: { session: any, token: any }) {
      session.user.token = token.id
      return session
    },
  },
  providers: [
    Discord({
      authorization: "https://discord.com/oauth2/authorize?scope=identify+email+guilds+applications.commands.permissions.update",
    })
  ],
  pages: {
    signOut: '/',
  }
})