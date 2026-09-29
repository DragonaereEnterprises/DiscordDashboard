import { signIn } from "@/utils/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const callbackUrl = searchParams.get("callbackUrl") || "/servers";

  await signIn("discord", {
    redirectTo: callbackUrl,
  });
}