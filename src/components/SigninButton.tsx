import { signIn } from "@/utils/auth"

export default function SigninButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("discord", { redirectTo: "/servers" })
      }}
    >
      <button className="signin-button">Sign in</button>
    </form>
  )
}
