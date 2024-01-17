"use client"

import { signIn } from "next-auth/react"

export default function SigninButton() {
  return (
    <button onClick={() => signIn("discord", { callbackUrl: '/servers' })}>Sign in with Google</button>
  )
}
