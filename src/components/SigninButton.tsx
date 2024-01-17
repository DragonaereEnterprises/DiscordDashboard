"use client"

import { signIn } from "next-auth/react"

export default function SigninButton() {
  return (
    <button className="signin-button" onClick={() => signIn("discord")}>Sign in</button>
  )
}
