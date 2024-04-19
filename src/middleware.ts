import { auth } from "@/utils/auth"
import { NextResponse } from "next/server"

export default auth((req:any) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL('/', req.url))
  }
})

export const config = {
  matcher: ["/servers/:path*"],
}