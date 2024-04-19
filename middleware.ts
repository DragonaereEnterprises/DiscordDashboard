export { auth as middleware } from "@/utils/auth"
export const config = {
  matcher: ['/servers', '/dashboard/:path*'],
}