"use client";

import { signIn } from "next-auth/react";

export default function SigninButton() {
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await signIn("discord", { callbackUrl: "/servers" });
      }}
    >
      <button className="signin-button">Sign in</button>
    </form>
  );
}