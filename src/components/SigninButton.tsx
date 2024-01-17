"use client"

import { signIn } from "next-auth/react"

export default function SigninButton() {
  return (
    <button className="signin-button" onClick={() => signIn("discord", { callbackUrl: '/servers' })}>Sign in</button>
  )
}
